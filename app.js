const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const mainRouter = require('./routes/mainRouter');

app.use(express.static(path.join(__dirname, "/public")));

app.use('/', mainRouter); 

app.listen(PORT, () => console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
`))