const pool = require('../db');

const User = {
  getAll: async () => {
    const [rows] = await pool.query(
      'SELECT id, name, username, role, created_at FROM users'
    );
    return rows;
  },

  getByUsername: async (username) => {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0];
  },

  create: async (data) => {
    const { name, username, password, role } = data;
    const [result] = await pool.query(
      'INSERT INTO users (name, username, password, role) VALUES (?, ?, ?, ?)',
      [name, username, password, role]
    );
    return result.insertId;
  },

  update: async (id, data) => {
    const { name, username, role } = data;
    const [result] = await pool.query(
      'UPDATE users SET name = ?, username = ?, role = ? WHERE id = ?',
      [name, username, role, id]
    );
    return result.affectedRows;
  }
};

module.exports = User;