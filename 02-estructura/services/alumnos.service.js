
import { alumnos } from '../db/memory.js';

// En un servicio real,
//aqui iriam las llamadas a base de datos
// Las consultas a la base de datos son operacion asincronas
// por lo que normalmente devolverian una promes
// y habra que usar async/await

export const getAlumnosFromDb = () => {

    // SELECT * FROM alumnos;


    return alumnos;
}