


// Middleware para loggear peticiones
// next, el paquete pasa a la siguiente capa
// export permite importarlo en otros ficheros
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip} - ${req.socket.remoteAddress}`);
    next();
}

// exporta unicamente logger (por defecto)
// sino export const logger = 
export default logger;