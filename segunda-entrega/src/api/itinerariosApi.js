const API_URL = 'http://localhost:3001/itinerarios'

export const obtenerItinerarios = async ({ signal } = {}) => {
    const respuesta = await fetch(API_URL, { signal })

    if (!respuesta.ok) {
        throw new Error('No se pudieron cargar los itinerarios.')
    }

    const itinerarios = await respuesta.json()

    if (!Array.isArray(itinerarios)) {
        throw new Error('Los datos de itinerarios no son válidos.')
    }

    return itinerarios
}