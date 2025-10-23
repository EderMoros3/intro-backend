import pool from "../db/db.js";

export const getAllPedidos = async () => {
  const result = await pool.query('SELECT * FROM pedidos');
  console.log(result.rows);
  return result.rows;
}

export const newPedidoService = async (data) => {
  const { id_cliente, descripcion = null, cantidad = null } = data;

  if(!id_cliente) {
    throw new Error('id_cliente')
  }
  const result = await pool.query(
    'INSERT INTO pedidos (id_cliente, descripcion, cantidad) VALUES ($1, $2, $3) RETURNING *',
    [id_cliente, descripcion, cantidad]
  );

  return result.rows[0];
}

export const updatePedidoService = async (id, data) => {
  const { id_cliente, descripcion, cantidad } = data;

  const result = await pool.query(
    'UPDATE pedidos SET id_cliente = $1, descripcion = $2, cantidad = $3 WHERE id_pedidos = $4 RETURNING *',
    [id_cliente, descripcion, cantidad, id]
  );

  if(result.rows.length === 0) {
    throw new Error('Cliente no encontrado');
  }

  return result.rows[0];
}