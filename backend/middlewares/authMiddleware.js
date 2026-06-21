const jwt = require('jsonwebtoken');
const response = require('../response');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return response(401, null, 'Token tidak ditemukan, akses ditolak', res);
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return response(401, null, 'Token tidak valid', res);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return response(403, null, 'Token tidak valid atau sudah expired', res);
  }
};

const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return response(403, null, 'Kamu tidak memiliki akses untuk fitur ini', res);
    }
    next();
  };
};

module.exports = { verifyToken, checkRole };