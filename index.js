const express = require('express');
const https = require('https');
const fs = require('file-system');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const puerto = 8443;
app.use(express.static(path.join(__dirname, 'public')));

https.createServer({
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('public.crt')
}, app).listen(puerto, ()=>{
    console.log(`Servidor en línea en el puerto ${puerto}`)
})

app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'index.html'))
});

app.get('/queLesInteresa', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'queLesInteresa.html'))
})

app.get('/extra', (req, res)=>{
    res.sendFile(path.join(__dirname, '.', 'views', 'extra.html'))
})