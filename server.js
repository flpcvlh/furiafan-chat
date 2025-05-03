// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// API routes podem ser adicionadas aqui
// Por exemplo:
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'FuriaFan API está funcionando!' });
});

// Sempre retorne o app React para qualquer rota não encontrada
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});