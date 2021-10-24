const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const puerto = 443;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'index.html'))
});

app.get('/queLesInteresa', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'queLesInteresa.html'))
})

app.get('/extra', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'extra.html'))
})

app.listen(puerto, ()=>{
    console.log(`Servidor en línea en el puerto ${puerto}`)
});