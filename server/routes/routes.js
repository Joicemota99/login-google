// /routes/routes.js
const express = require('express');
const autenticacaoGoogleController = require('../controllers/authGoogleController');
const router = express.Router();

router.post('/auth/google/callback', autenticacaoGoogleController.handleGoogleLogin);

module.exports = router;
