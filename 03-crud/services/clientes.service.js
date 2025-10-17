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