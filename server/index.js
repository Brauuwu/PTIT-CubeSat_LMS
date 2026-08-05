require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/api');
const compilerRoutes = require('./routes/compiler');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);
app.use('/api/compile', compilerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
