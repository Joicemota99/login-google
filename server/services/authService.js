// /services/authService.js
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const authServiceGoogle = {
  async verifyGoogleToken(token) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      return { name: payload.name, email: payload.email };
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  },
};

module.exports = authServiceGoogle;
