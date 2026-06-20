// Traduce la condición meteorológica (código de OpenWeatherMap) a un "tema"
// visual y a un emoji. Centraliza aquí la relación clima -> apariencia para
// que componentes y CSS no repitan estas decisiones (G5).
//
// Rangos de códigos de OpenWeatherMap:
//   2xx tormenta · 3xx llovizna · 5xx lluvia · 6xx nieve
//   7xx niebla/bruma · 800 despejado · 80x nubes

const RANGOS = [
  { min: 200, max: 299, tema: () => 'tormenta', emoji: () => '⛈️' },
  { min: 300, max: 599, tema: () => 'lluvia', emoji: () => '🌧️' },
  { min: 600, max: 699, tema: () => 'nieve', emoji: () => '❄️' },
  { min: 700, max: 799, tema: () => 'niebla', emoji: () => '🌫️' },
  {
    min: 800,
    max: 800,
    tema: (esDeDia) => (esDeDia ? 'despejado-dia' : 'despejado-noche'),
    emoji: (esDeDia) => (esDeDia ? '☀️' : '🌙'),
  },
  {
    min: 801,
    max: 899,
    tema: (esDeDia) => (esDeDia ? 'nubes-dia' : 'nubes-noche'),
    emoji: (esDeDia) => (esDeDia ? '⛅' : '☁️'),
  },
]

const POR_DEFECTO = RANGOS[4]

function rangoDe(condicionId) {
  return RANGOS.find((r) => condicionId >= r.min && condicionId <= r.max) ?? POR_DEFECTO
}

// Clave de tema usada como clase CSS del fondo (p. ej. "lluvia").
export function temaPorClima(condicionId, esDeDia) {
  return rangoDe(condicionId).tema(esDeDia)
}

// Emoji grande que representa el clima en la tarjeta (sustituye al icono
// raster de la API, que no siempre carga y se ve pequeño).
export function emojiPorClima(condicionId, esDeDia) {
  return rangoDe(condicionId).emoji(esDeDia)
}
