const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Ruta de la API
app.get('/api/mensaje', (req, res) => {
    res.json({ texto: "¡Conexión exitosa entre el Frontend y el Backend a través de Docker Compose prueba !" });
});

app.listen(PORT, () => {
    console.log(`Backend escuchando en el puerto ${PORT}`);
});