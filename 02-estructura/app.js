import express from 'express';
import logger from "./middlewares/logger.js";
// import { logger } from 
import mainRouter from "./routes/index.js";

const PORT = process.env.PORT || 3000; 
// Si existe el valor coje ese valor, sino el puerto 80

const app = express();

// Modo de uso de JSON
// Middleware para entender JSON
app.use(express.json());

// Middleware de loggeo
app.use(logger);

// Endpoint raiz
app.get('/', (req, res) => { //request y response
    res.send({
        mensaje: 'Hola mundo desde mi segundo servidor con Express'
    });
})

// Cargar rutas
app.use('/api', mainRouter);

// Esuchcar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT );
})