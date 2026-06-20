// Configuración central: URLs y parámetros de la API, y límites de la app.
// Tener un único lugar evita números mágicos (G25) y strings duplicados (G5).

// Clima actual por coordenadas o nombre.
export const URL_CLIMA = 'https://api.openweathermap.org/data/2.5/weather'

// Geocoding: convierte un nombre de ciudad en una lista de coincidencias
// (con país y estado) para que la persona elija la correcta.
export const URL_GEOCODING = 'https://api.openweathermap.org/geo/1.0/direct'

// 'metric' => temperatura en °C ; 'es' => descripciones en español.
export const UNIDADES = 'metric'
export const IDIOMA = 'es'

// Cuántas coincidencias de ciudad se ofrecen al buscar.
export const MAXIMO_CANDIDATOS = 5

// Ciudad que se muestra al abrir la app (requisito de la demo).
// Se usan coordenadas fijas para garantizar que sea San José de Costa Rica
// y no otra homónima.
export const CIUDAD_POR_DEFECTO = {
  nombre: 'San José',
  pais: 'CR',
  estado: '',
  lat: 9.9281,
  lon: -84.0907,
}

// Historial: cuántas ciudades se recuerdan y con qué clave en localStorage.
export const MAXIMO_HISTORIAL = 5
export const CLAVE_HISTORIAL = 'clima:historial'
