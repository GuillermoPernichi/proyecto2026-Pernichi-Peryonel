import { writeFile } from 'node:fs/promises'
import destinos from '../src/data/destinos.js'
import itinerarios from '../src/data/itinerarios.js'

const db = {
    destinos,
    itinerarios
}

await writeFile(
    new URL('../public/db.json', import.meta.url),
    JSON.stringify(db, null, 2),
    'utf8'
)

console.log('db.json generado correctamente')
console.log(`Destinos: ${destinos.length}`)
console.log(`Itinerarios: ${itinerarios.length}`)