require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/dbConfig');
const authRoutes = require("./Routers/passwordRouter");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Default Route for `/`
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API! Navigate to /api/recipes to interact with the API.');
});

// Recipe Routes
app.use('/api/users', authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
