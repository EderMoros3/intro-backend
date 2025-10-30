const logger = {(req, res, next) => {
  const startTime = Date.now();
  const date = today.toISOString().slice(0, 10);
  const today = new Date();

  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;

    const string = `[${today.toISOString()}] - ${req.method} - ${req.url} - ${res.socket.remoteAddress} - ${duration}ms`;
    console.log(string);

    let logPath=path.resolve('/logs/');

    if(!fstat.existsSync(logPath)){
      fs.mkdirSync(logPath, {recursive:true});
    }
  })
}}