const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const response = require('../response');
require('dotenv').config();

const AuthController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return response(400, null, 'Username dan password wajib diisi', res);
      }

      const user = await User.getByUsername(username);
      if (!user) {
        return response(401, null, 'Username atau password salah', res);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return response(401, null, 'Username atau password salah', res);
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      );

      return response(200, {
        token,
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role
        }
      }, 'Login berhasil', res);

    } catch (error) {
      return response(500, null, 'Terjadi kesalahan server: ' + error.message, res);
    }
  }
};

module.exports = AuthController;