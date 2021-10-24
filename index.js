const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const puerto = 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.listen(puerto, ()=>{
    console.log(`Servidor en línea en el puerto ${puerto}`)
});

app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'index.html'))
});

app.get('/queLesInteresa', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'queLesInteresa.html'))
})

app.get('/extra', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'extra.html'))
})