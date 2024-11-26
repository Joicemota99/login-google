// /controllers/autenticacaoGoogleController.js
const authServiceGoogle = require('../services/authService');

const autenticacaoGoogleController = {
  async handleGoogleLogin(req, res) {
    const { token } = req.body;

    try {
      const user = await authServiceGoogle.verifyGoogleToken(token);
      res.json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = autenticacaoGoogleController;
