const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Rutas
const todosRoutes = require('./routes/todos.routes');

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: '*', // Dominios autorizados
  methods: '*', // Métodos permitidos
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas
app.use('/api/todos', todosRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (error) {
    console.log('Connection error');
  }

  app.listen(process.env.PORT, () => console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`));
};

startServer();
