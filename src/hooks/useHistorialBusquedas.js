import { useState, useEffect, useCallback } from 'react'
import { MAXIMO_HISTORIAL, CLAVE_HISTORIAL } from '../configuracion/constantes.js'

// Cada ciudad del historial se identifica por sus coordenadas, de modo que
// dos ciudades homónimas (San José, CR vs San Jose, US) no se confundan.
function mismaCiudad(a, b) {
  return a.lat === b.lat && a.lon === b.lon
}

// Una ciudad válida es un objeto con coordenadas numéricas. Filtrar por esto
// descarta entradas corruptas o de versiones anteriores del historial.
function esCiudadValida(item) {
  return (
    item != null &&
    typeof item === 'object' &&
    typeof item.lat === 'number' &&
    typeof item.lon === 'number'
  )
}

// Lee el historial guardado al iniciar; tolera datos corruptos o ausentes.
function leerHistorialGuardado() {
  try {
    const crudo = localStorage.getItem(CLAVE_HISTORIAL)
    const valor = crudo ? JSON.parse(crudo) : []
    return Array.isArray(valor) ? valor.filter(esCiudadValida) : []
  } catch {
    return []
  }
}

/**
 * Funcionalidades 3 y 6: mantiene las últimas ciudades buscadas
 * (sin duplicados, máximo MAXIMO_HISTORIAL, la más reciente primero)
 * y las persiste en localStorage para que sobrevivan a la recarga.
 * Guarda el objeto completo de la ciudad (con coordenadas) para poder
 * volver a consultarla sin ambigüedad.
 */
export function useHistorialBusquedas() {
  const [historial, setHistorial] = useState(leerHistorialGuardado)

  // Cada cambio del historial se refleja en localStorage (Funcionalidad 6).
  useEffect(() => {
    localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial))
  }, [historial])

  const agregarCiudad = useCallback((ciudad) => {
    setHistorial((anterior) => {
      const sinDuplicado = anterior.filter((item) => !mismaCiudad(item, ciudad))
      return [ciudad, ...sinDuplicado].slice(0, MAXIMO_HISTORIAL)
    })
  }, [])

  const limpiarHistorial = useCallback(() => setHistorial([]), [])

  return { historial, agregarCiudad, limpiarHistorial }
}
