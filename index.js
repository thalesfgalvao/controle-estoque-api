require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usuarioRoute = require('./src/routes/usuario.route');
const itemRoute = require('./src/routes/item.route');

app.use('/api/itens', itemRoute);
app.use('/api/usuarios', usuarioRoute);

app.listen(process.env.PORTA, () => {
  console.log('rodando');
});
