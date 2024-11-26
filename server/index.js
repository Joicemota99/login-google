// /server.js
const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para ler o corpo das requisições em JSON
app.use(express.json());
app.use(cors());
// Definindo as rotas
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
