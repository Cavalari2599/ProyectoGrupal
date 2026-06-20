import { useMemo } from 'react'

// Cantidad de partículas por efecto. Constantes con nombre, no números
// mágicos sueltos en el JSX (G25).
const NUMERO_GOTAS = 60
const NUMERO_COPOS = 40
const NUMERO_ESTRELLAS = 50
const NUMERO_NUBES = 5

const aleatorio = (minimo, maximo) => minimo + Math.random() * (maximo - minimo)

// Lluvia: gotas que caen con posición, velocidad y retraso variados.
function Lluvia() {
  const gotas = useMemo(
    () =>
      Array.from({ length: NUMERO_GOTAS }, () => ({
        left: `${aleatorio(0, 100)}%`,
        animationDuration: `${aleatorio(0.4, 0.9)}s`,
        animationDelay: `${aleatorio(0, 2)}s`,
      })),
    [],
  )
  return (
    <div className="capa-particulas">
      {gotas.map((estilo, indice) => (
        <span key={indice} className="gota" style={estilo} />
      ))}
    </div>
  )
}

// Nieve: copos que descienden lento, de distintos tamaños.
function Nieve() {
  const copos = useMemo(
    () =>
      Array.from({ length: NUMERO_COPOS }, () => {
        const tamano = `${aleatorio(4, 10)}px`
        return {
          left: `${aleatorio(0, 100)}%`,
          width: tamano,
          height: tamano,
          animationDuration: `${aleatorio(5, 11)}s`,
          animationDelay: `${aleatorio(0, 6)}s`,
        }
      }),
    [],
  )
  return (
    <div className="capa-particulas">
      {copos.map((estilo, indice) => (
        <span key={indice} className="copo" style={estilo} />
      ))}
    </div>
  )
}

// Estrellas: puntos que titilan en el cielo nocturno despejado.
function Estrellas() {
  const estrellas = useMemo(
    () =>
      Array.from({ length: NUMERO_ESTRELLAS }, () => {
        const tamano = `${aleatorio(1, 3)}px`
        return {
          left: `${aleatorio(0, 100)}%`,
          top: `${aleatorio(0, 70)}%`,
          width: tamano,
          height: tamano,
          animationDelay: `${aleatorio(0, 3)}s`,
        }
      }),
    [],
  )
  return (
    <div className="capa-particulas">
      {estrellas.map((estilo, indice) => (
        <span key={indice} className="estrella" style={estilo} />
      ))}
    </div>
  )
}

// Nubes: pocas formas que se desplazan despacio de lado a lado.
function Nubes() {
  const nubes = useMemo(
    () =>
      Array.from({ length: NUMERO_NUBES }, () => ({
        top: `${aleatorio(5, 55)}%`,
        '--escala': aleatorio(0.7, 1.5),
        animationDuration: `${aleatorio(25, 60)}s`,
        animationDelay: `${-aleatorio(0, 30)}s`,
      })),
    [],
  )
  return (
    <div className="capa-particulas">
      {nubes.map((estilo, indice) => (
        <span key={indice} className="nube" style={estilo} />
      ))}
    </div>
  )
}

// Sol: resplandor fijo para el cielo despejado de día.
function Sol() {
  return <span className="sol" />
}

// Elige el efecto animado correspondiente al tema del clima.
function EfectoDelTema({ tema }) {
  if (tema === 'lluvia' || tema === 'tormenta') return <Lluvia />
  if (tema === 'nieve') return <Nieve />
  if (tema === 'despejado-noche') return <Estrellas />
  if (tema === 'despejado-dia') return <Sol />
  if (tema.startsWith('nubes') || tema === 'niebla') return <Nubes />
  return null
}

/**
 * Fondo a pantalla completa cuya apariencia (degradado + efecto animado)
 * cambia según el clima actual. Es puramente decorativo, por eso se oculta
 * a los lectores de pantalla con aria-hidden.
 */
export function FondoClima({ tema }) {
  return (
    <div className={`fondo fondo--${tema}`} aria-hidden="true">
      <EfectoDelTema tema={tema} />
    </div>
  )
}
