const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();

// Example route
router.post('/register', (req, res) => {
    res.send('User registration route');
  });
router.post('/login', login);

module.exports = router;
