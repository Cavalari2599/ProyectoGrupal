// Funciones puras de formato y presentación. Sin estado ni efectos:
// reciben datos y devuelven texto listo para mostrar (fáciles de probar).

const PUNTOS_CARDINALES = [
  'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO',
]

const GRADOS_POR_PUNTO = 360 / PUNTOS_CARDINALES.length

// Convierte los grados del viento (0-360) en un punto cardinal legible.
export function direccionViento(grados) {
  const indice = Math.round(grados / GRADOS_POR_PUNTO) % PUNTOS_CARDINALES.length
  return PUNTOS_CARDINALES[indice]
}

// Hora local de la ciudad consultada.
// La API entrega tiempos en UTC y el desfase de la ciudad en segundos;
// se suma el desfase y se leen las horas en UTC para obtener la hora local.
export function horaLocal(segundosUtc, desfaseSegundos) {
  const fecha = new Date((segundosUtc + desfaseSegundos) * 1000)
  const horas = String(fecha.getUTCHours()).padStart(2, '0')
  const minutos = String(fecha.getUTCMinutes()).padStart(2, '0')
  return `${horas}:${minutos}`
}

// Pasa la visibilidad de metros a kilómetros con un decimal.
export function visibilidadEnKm(metros) {
  return `${(metros / 1000).toFixed(1)} km`
}

// Arma el nombre completo de una ciudad: "Ciudad, Estado, País".
// Omite las partes vacías para no dejar comas sueltas.
export function nombreCompleto({ nombre, estado, pais }) {
  return [nombre, estado, pais].filter(Boolean).join(', ')
}
