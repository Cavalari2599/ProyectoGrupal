/**
 * Funcionalidad 2 (apoyo): muestra un dato suelto del clima con su icono.
 * Al pasar el cursor (o al enfocar con el teclado) revela una breve
 * explicación de qué significa ese dato.
 * Componente reutilizable para cada métrica de la tarjeta (DRY/G5).
 */
export function DetalleClima({ icono, etiqueta, valor, descripcion }) {
  return (
    <div className="detalle" tabIndex={0}>
      <span className="detalle__icono" aria-hidden="true">
        {icono}
      </span>
      <dt className="detalle__etiqueta">{etiqueta}</dt>
      <dd className="detalle__valor">{valor}</dd>
      {descripcion && (
        <span className="detalle__info" role="tooltip">
          {descripcion}
        </span>
      )}
    </div>
  )
}
