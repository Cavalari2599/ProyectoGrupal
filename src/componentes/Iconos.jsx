// Iconos SVG lineales (estilo outline) que sustituyen a los emojis.
// Todos usan stroke="currentColor" para heredar el color del texto y
// poder cambiar de tono junto con el resto de la tarjeta sin tocarlos.
// viewBox uniforme de 24x24 para que cualquier tamaño se vea nítido.

const trazoBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// --- Iconos grandes de condición climática (reemplazan emojiPorClima) ---

export function IconoSol(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  )
}

export function IconoLuna(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export function IconoNube(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M7 18a4 4 0 0 1-.6-7.96A5 5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 17 17H7Z" />
    </svg>
  )
}

export function IconoNubeNoche(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M6.5 18a3.8 3.8 0 0 1-.5-7.56A4.7 4.7 0 0 1 14.8 8.6 4.2 4.2 0 0 1 15.5 17H6.5Z" />
      <path d="M16.5 4.3A4.6 4.6 0 0 0 19 8a4.6 4.6 0 0 0 3.5.7 4.6 4.6 0 0 1-6 2.6 4.6 4.6 0 0 1-1-7 4.6 4.6 0 0 1 1-.3Z" opacity="0.6" />
    </svg>
  )
}

export function IconoLluvia(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M7 16a4 4 0 0 1-.6-7.96A5 5 0 0 1 16.2 6.1 4.5 4.5 0 0 1 17 15H7Z" />
      <path d="M8 19.5 7 21M12 19.5l-1 1.5M16 19.5l-1 1.5" />
    </svg>
  )
}

export function IconoTormenta(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M7 14a4 4 0 0 1-.6-7.96A5 5 0 0 1 16.2 4.1 4.5 4.5 0 0 1 17 13H7Z" />
      <path d="M12.5 13.5 10 18h3l-1.5 4 5-7h-3l1.5-3.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconoNieve(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M7 15a4 4 0 0 1-.6-7.96A5 5 0 0 1 16.2 5.1 4.5 4.5 0 0 1 17 14H7Z" />
      <path d="M9 18v4M9 19l-1.3 1M9 19l1.3 1M15 18v4M15 19l-1.3 1M15 19l1.3 1" />
    </svg>
  )
}

export function IconoNiebla(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M6 9a4 4 0 0 1 7.6-1.8A4.5 4.5 0 0 1 17 11.5" />
      <path d="M4 14h16M4 17.5h16M4 10.5h6" />
    </svg>
  )
}

export function IconoLogo(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="8.5" cy="8" r="3.2" />
      <path d="M8.5 3.3v1.3M8.5 11.4v1.3M4.7 4.2l.9.9M11.4 4.2l-.9.9M3.5 8h1.3M12.5 8h1.3" opacity="0.85" />
      <path d="M9 18a4 4 0 0 1-.5-7.96c.7-.1 1.4 0 2 .26" />
      <path d="M9 18h7.5a3.5 3.5 0 0 0 .7-6.93 4.3 4.3 0 0 0-7.7-2.62" />
    </svg>
  )
}


export function IconoTermometro(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a3.5 3.5 0 1 0 4 0Z" />
    </svg>
  )
}

export function IconoFlechaArriba(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

export function IconoFlechaAbajo(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  )
}

export function IconoGota(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M12 3c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11Z" />
    </svg>
  )
}

export function IconoViento(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M3 8h11a2.5 2.5 0 1 0-2.2-3.7M3 12.5h15a2.5 2.5 0 1 1-2.2 3.7M3 17h9" />
    </svg>
  )
}

export function IconoRafaga(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M2 7.5h13a2 2 0 1 0-1.8-3M2 12h17a2 2 0 1 1-1.8 3M2 16.5h11" />
    </svg>
  )
}

export function IconoBarometro(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="12" cy="14" r="6.5" />
      <path d="M12 14 14.3 10.5M12 8.5V7" />
    </svg>
  )
}

export function IconoNubosidad(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M7 16.5a3.8 3.8 0 0 1-.55-7.56A4.7 4.7 0 0 1 15.7 7 4.2 4.2 0 0 1 16.5 15.5H7Z" />
    </svg>
  )
}

export function IconoOjo(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  )
}

export function IconoAmanecer(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="12" cy="14" r="4" />
      <path d="M12 6v2M5 14H3M21 14h-2M6.3 8.3l1.4 1.4M17.7 8.3l-1.4 1.4M3 18.5h18" />
    </svg>
  )
}

export function IconoAtardecer(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="12" cy="11" r="4" />
      <path d="M12 19v-2M5 11H3M21 11h-2M6.3 6.7l1.4 1.4M17.7 6.7l-1.4 1.4M3 15.5h18" />
    </svg>
  )
}

export function IconoReloj(props) {
  return (
    <svg viewBox="0 0 24 24" {...trazoBase} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}