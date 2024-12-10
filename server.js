const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// Routes
app.get('/', (_req, res) => {
    res.send('Hello World!');
  });
  
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Use the user routes
app.use('/api/users', userRoutes);

// Routes
app.use('/api/pets', require('./routes/petRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;