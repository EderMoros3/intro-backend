import pool from '../db/db.js';

export const getAllClientes = async () => {
  const result = await pool.query('SELECT * FROM clientes');
  console.log(result.rows);
  return result.rows;
}

export const newClienteService = async (data) => {

  // Descomponer un JSON en variables
  const { nombre, telefono, ubicacion } = data;

  const result = await pool.query(
    'INSERT INTO clientes (nombre, telefono, ubicacion) VALUES ($1, $2, $3) RETURNING *', // RETURNING * para devolver la fila insertada
    [nombre, telefono, ubicacion]
  );

  return result.rows[0];
}

export const updateClienteService = async (id, data) => {
  const { nombre, telefono, ubicacion } = data;

  // Se ponen todos los posibles campos para actualizar
  const result = await pool.query(
    'UPDATE clientes SET nombre = $1, telefono = $2, ubicacion = $3 WHERE id_cliente = $4 RETURNING *',
    [nombre, telefono, ubicacion, id]
  );

  if (result.rows.length === 0) {
    throw new Error('Cliente no encontrado');
    // Sale automaticamente al catch del controlador
  }

  return result.rows[0];

}