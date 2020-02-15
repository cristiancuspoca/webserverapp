const htpp = require('http');

htpp.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Cristian Andres',
        edad: 28,
        uri: req.url
    };
    res.write(JSON.stringify(salida));

    res.end();
}).listen(8080);