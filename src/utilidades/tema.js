// Traduce la condición meteorológica (código de OpenWeatherMap) a un "tema"
// visual y a una clave de ícono. Centraliza aquí la relación clima ->
// apariencia para que componentes y CSS no repitan estas decisiones (G5).
//
// Rangos de códigos de OpenWeatherMap:
//   2xx tormenta · 3xx llovizna · 5xx lluvia · 6xx nieve
//   7xx niebla/bruma · 800 despejado · 80x nubes

const RANGOS = [
  { min: 200, max: 299, tema: () => 'tormenta', icono: () => 'tormenta' },
  { min: 300, max: 599, tema: () => 'lluvia', icono: () => 'lluvia' },
  { min: 600, max: 699, tema: () => 'nieve', icono: () => 'nieve' },
  { min: 700, max: 799, tema: () => 'niebla', icono: () => 'niebla' },
  {
    min: 800,
    max: 800,
    tema: (esDeDia) => (esDeDia ? 'despejado-dia' : 'despejado-noche'),
    icono: (esDeDia) => (esDeDia ? 'sol' : 'luna'),
  },
  {
    min: 801,
    max: 899,
    tema: (esDeDia) => (esDeDia ? 'nubes-dia' : 'nubes-noche'),
    icono: (esDeDia) => (esDeDia ? 'nube' : 'nube-noche'),
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

// Clave de ícono que <IconoClima> traduce al componente SVG correspondiente.
// Sustituye al emoji anterior: mismo propósito, sin depender de las
// fuentes de emoji del sistema operativo (inconsistentes entre dispositivos).
export function iconoPorClima(condicionId, esDeDia) {
  return rangoDe(condicionId).icono(esDeDia)
}