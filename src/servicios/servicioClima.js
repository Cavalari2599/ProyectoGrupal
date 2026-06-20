import {
  URL_CLIMA,
  URL_GEOCODING,
  UNIDADES,
  IDIOMA,
  MAXIMO_CANDIDATOS,
} from '../configuracion/constantes.js'

const CLAVE_API = import.meta.env.VITE_OWM_API_KEY

// Traduce el código de estado HTTP a un mensaje claro para la persona usuaria.
// Apoya la Funcionalidad 5 (manejo de errores) desde una sola fuente.
function mensajeSegunEstado(estadoHttp) {
  switch (estadoHttp) {
    case 401:
      return 'La API Key no es válida o aún no está activada. Espera unos minutos.'
    case 404:
      return 'No se encontró la ciudad. Revisa el nombre e inténtalo de nuevo.'
    default:
      return 'No se pudo obtener el clima. Inténtalo más tarde.'
  }
}

// Mensaje unificado para los hooks: distingue el fallo de red (TypeError, no
// hubo respuesta) de los errores ya redactados que lanza este servicio (G5).
export function mensajeDeError(fallo) {
  return fallo instanceof TypeError
    ? 'Error de red. Verifica tu conexión a internet.'
    : fallo.message
}

// Pide un recurso a la API y devuelve el JSON, o lanza un error legible.
// Concentra fetch + validación de estado para no repetirlo en cada llamada.
async function pedirJson(url) {
  const respuesta = await fetch(url)
  if (!respuesta.ok) {
    throw new Error(mensajeSegunEstado(respuesta.status))
  }
  return respuesta.json()
}

// --- Funcionalidad 1: selección de ciudad (Geocoding) ---

// Da forma a cada coincidencia de ciudad que devuelve el Geocoding.
function aCiudad(item) {
  return {
    nombre: item.name,
    pais: item.country,
    estado: item.state ?? '',
    lat: item.lat,
    lon: item.lon,
  }
}

/**
 * Busca ciudades por nombre y devuelve las coincidencias para que el usuario
 * elija (resuelve la ambigüedad de ciudades homónimas).
 * @param {string} nombre
 * @returns {Promise<Array<{nombre,pais,estado,lat,lon}>>}
 */
export async function buscarCiudades(nombre) {
  const parametros = new URLSearchParams({
    q: nombre,
    limit: MAXIMO_CANDIDATOS,
    appid: CLAVE_API,
  })
  const datos = await pedirJson(`${URL_GEOCODING}?${parametros}`)
  return datos.map(aCiudad)
}

// --- Funcionalidad 2: clima actual ---

// Convierte la respuesta cruda de la API en la forma que usa la interfaz.
// Aísla los accesos profundos (datos.main.temp...) en un único lugar (G6).
function aClimaDeLaApp(datos) {
  return {
    ciudad: datos.name,
    pais: datos.sys?.country ?? '',
    coordenadas: { lat: datos.coord.lat, lon: datos.coord.lon },

    condicionId: datos.weather[0].id,
    descripcion: datos.weather[0].description,
    esDeDia: datos.weather[0].icon.endsWith('d'),

    temperatura: Math.round(datos.main.temp),
    sensacion: Math.round(datos.main.feels_like),
    temperaturaMin: Math.round(datos.main.temp_min),
    temperaturaMax: Math.round(datos.main.temp_max),
    humedad: datos.main.humidity,
    presion: datos.main.pressure,

    viento: Math.round(datos.wind.speed),
    vientoGrados: datos.wind.deg,
    rafaga: datos.wind.gust != null ? Math.round(datos.wind.gust) : null,

    nubosidad: datos.clouds?.all ?? 0,
    visibilidad: datos.visibility ?? null,
    lluvia1h: datos.rain?.['1h'] ?? null,
    nieve1h: datos.snow?.['1h'] ?? null,

    momento: datos.dt,
    desfaseHorario: datos.timezone,
    amanecer: datos.sys.sunrise,
    atardecer: datos.sys.sunset,
  }
}

/**
 * Obtiene el clima actual a partir de coordenadas exactas (sin ambigüedad).
 * @param {number} lat
 * @param {number} lon
 * @returns {Promise<object>} clima ya normalizado para la interfaz
 */
export async function obtenerClimaPorCoordenadas(lat, lon) {
  const parametros = new URLSearchParams({
    lat,
    lon,
    appid: CLAVE_API,
    units: UNIDADES,
    lang: IDIOMA,
  })
  return aClimaDeLaApp(await pedirJson(`${URL_CLIMA}?${parametros}`))
}
