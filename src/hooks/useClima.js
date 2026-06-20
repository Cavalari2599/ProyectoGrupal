import { useState, useCallback } from 'react'
import {
  obtenerClimaPorCoordenadas,
  mensajeDeError,
} from '../servicios/servicioClima.js'

// Estados posibles de la consulta. Da soporte a las Funcionalidades 4 (carga)
// y 5 (error) sin varios booleanos sueltos que haya que sincronizar.
export const Estado = {
  INICIAL: 'inicial',
  CARGANDO: 'cargando',
  EXITO: 'exito',
  ERROR: 'error',
}

/**
 * Encapsula la lógica de consultar el clima: datos, estado de carga y error.
 * Recibe coordenadas (no un nombre) para que el resultado sea inequívoco.
 * Los componentes solo consumen el resultado; no conocen el fetch ni la API.
 */
export function useClima() {
  const [clima, setClima] = useState(null)
  const [estado, setEstado] = useState(Estado.INICIAL)
  const [error, setError] = useState(null)

  const consultar = useCallback(async (lat, lon) => {
    setEstado(Estado.CARGANDO)
    setError(null)

    try {
      const datos = await obtenerClimaPorCoordenadas(lat, lon)
      setClima(datos)
      setEstado(Estado.EXITO)
      return datos
    } catch (fallo) {
      setError(mensajeDeError(fallo))
      setEstado(Estado.ERROR)
      return null
    }
  }, [])

  return { clima, estado, error, consultar }
}
