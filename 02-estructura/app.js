import express from 'express';

const PORT = 80; // Puerto por defecto para HTTP

const app = express();

// Modo de uso de JSON
app.use(express.json());

// Endpoint raiz
app.get('/', (req, res) => { //request y response
    res.send({
        mensaje: 'Hola mundo desde mi segundo servidor con Express'
    });
})

// Esuchcar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT );
})