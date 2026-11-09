const API_URL = 'http://localhost:3001/destinos'

export const obtenerDestinos = async ({ signal } = {}) => {
    const respuesta = await fetch(API_URL, { signal })

    if (!respuesta.ok) {
        throw new Error('No se pudieron cargar los destinos.')
    }

    const destinos = await respuesta.json()

    if (!Array.isArray(destinos)) {
        throw new Error('Los datos de destinos no son válidos.')
    }

    return destinos
}
export const crearDestino = async (nuevoDestino) => {
    const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoDestino)
    })

    if (!respuesta.ok) {
        throw new Error('No se pudo crear el destino.')
    }

    return await respuesta.json()
}

export const actualizarDestino = async (id, cambios) => {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cambios)
    })

    if (!respuesta.ok) {
        throw new Error('No se pudo actualizar el destino.')
    }

    return await respuesta.json()
}

export const eliminarDestino = async (id) => {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    if (!respuesta.ok) {
        throw new Error('No se pudo eliminar el destino.')
    }

    return true
}