import { nombreCompleto } from '../utilidades/formato.js'

/**
 * Funcionalidad 1: cuando un nombre coincide con varias ciudades, muestra
 * las opciones (con estado y país) para que la persona elija la correcta.
 * Así se resuelve la ambigüedad de ciudades homónimas.
 */
export function ListaCiudades({ ciudades, alSeleccionar }) {
  return (
    <section className="lista-ciudades">
      <h3 className="lista-ciudades__titulo">¿Cuál de estas ciudades?</h3>
      <ul className="lista-ciudades__lista">
        {ciudades.map((ciudad) => (
          <li key={`${ciudad.lat},${ciudad.lon}`}>
            <button
              type="button"
              className="lista-ciudades__item"
              onClick={() => alSeleccionar(ciudad)}
            >
              📍 {nombreCompleto(ciudad)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
