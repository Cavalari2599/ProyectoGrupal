import { nombreCompleto } from '../utilidades/formato.js'

/**
 * Funcionalidad 3: historial de búsquedas.
 * Lista las últimas ciudades (con estado y país); al hacer clic en una se
 * vuelve a consultar usando sus coordenadas, sin ambigüedad.
 * No se renderiza nada si el historial está vacío.
 */
export function HistorialBusquedas({ historial, alSeleccionar, alLimpiar }) {
  if (historial.length === 0) return null

  return (
    <section className="historial">
      <div className="historial__cabecera">
        <h3 className="historial__titulo">Búsquedas recientes</h3>
        <button type="button" className="historial__limpiar" onClick={alLimpiar}>
          Limpiar
        </button>
      </div>
      <ul className="historial__lista">
        {historial.map((ciudad) => (
          <li key={`${ciudad.lat},${ciudad.lon}`}>
            <button
              type="button"
              className="historial__item"
              onClick={() => alSeleccionar(ciudad)}
            >
              {nombreCompleto(ciudad)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
