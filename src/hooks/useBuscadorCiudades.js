import { useState, useCallback } from 'react'
import { buscarCiudades, mensajeDeError } from '../servicios/servicioClima.js'

// Estados de la búsqueda de coincidencias de ciudad (Funcionalidad 1).
export const EstadoBusqueda = {
  INICIAL: 'inicial',
  CARGANDO: 'cargando',
  EXITO: 'exito',
  SIN_RESULTADOS: 'sin_resultados',
  ERROR: 'error',
}

/**
 * Encapsula la búsqueda de ciudades por nombre: devuelve las coincidencias
 * para que la persona elija la correcta (resuelve las ciudades homónimas).
 */
export function useBuscadorCiudades() {
  const [candidatos, setCandidatos] = useState([])
  const [estado, setEstado] = useState(EstadoBusqueda.INICIAL)
  const [error, setError] = useState(null)

  const buscar = useCallback(async (texto) => {
    const consulta = texto.trim()
    if (!consulta) return []

    setEstado(EstadoBusqueda.CARGANDO)
    setError(null)

    try {
      const resultados = await buscarCiudades(consulta)
      setCandidatos(resultados)
      setEstado(
        resultados.length > 0
          ? EstadoBusqueda.EXITO
          : EstadoBusqueda.SIN_RESULTADOS,
      )
      return resultados
    } catch (fallo) {
      setError(mensajeDeError(fallo))
      setEstado(EstadoBusqueda.ERROR)
      return []
    }
  }, [])

  const limpiar = useCallback(() => {
    setCandidatos([])
    setEstado(EstadoBusqueda.INICIAL)
    setError(null)
  }, [])

  return { candidatos, estado, error, buscar, limpiar }
}
