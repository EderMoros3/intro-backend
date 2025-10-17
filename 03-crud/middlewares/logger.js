const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip} - ${req.socket.remoteAddress}`);
  next();
}

export default logger;