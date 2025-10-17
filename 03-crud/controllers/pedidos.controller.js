import { getAllPedidos, newPedidoService} from '../services/pedidos.service.js';

export const getPedidos = (req, res) => {
  getAllPedidos().then((pedidos) =>{
    res.send(pedidos);
  })
}

export const createPedido = (req,res) => {
  const data = req.body;

  if(data.id_cliente){
    newPedidoService(data)
      .then((newPedido) => {
        res.status(201).send(newPedido)
      })
      .catch((error) => {
        res.status(400).send({ error: error.message })
      });
  } else {
    res.status(400).send ({ error: 'Faltan datos obligatorios'});
  }
}
