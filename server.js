const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// Para servir contenido estatico (Se le indica la direccion del contenido)
app.use(express.static(__dirname + '/public'))

// Hbs partials
hbs.registerPartials(__dirname + '/views/partials');

require('./hbs/helpers');

app.set('view engine', 'hbs')



// Define path home /
app.get('/', function(req, res) {
    res.render('home', {
        nameUser: 'Cristian Cuspoca',
        anio: new Date().getFullYear()
    })
})

// Define path /about
app.get('/about', function(req, res) {
    res.render('about', {
        nameUser: 'Cristian Cuspoca'
    })
})

app.listen(port, () => {
    console.log('Escuchando el puerto ' + port);
})