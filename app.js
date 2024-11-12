const express = require('express');
const app = express();
const port = 4000;

const router = require('./routes/index.js');
const swaggerDocs = require('./swagger.js');

app.use(express.json());
app.use(router);

// Inicializar Swagger
swaggerDocs(app);

app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});
