const bcrypt = require('bcrypt');
const pool = require('./db');
require('dotenv').config();

const createAdmin = async () => {
  try {
    const name = 'Admin Utama';
    const username = 'admin';
    const plainPassword = 'admin123'; // nanti diganti setelah login pertama
    const role = 'admin';

    // Hash password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Insert ke database
    const [result] = await pool.query(
      'INSERT INTO users (name, username, password, role) VALUES (?, ?, ?, ?)',
      [name, username, hashedPassword, role]
    );

    console.log('Akun admin berhasil dibuat!');
    console.log('Username:', username);
    console.log('Password:', plainPassword);
    console.log('ID:', result.insertId);

    process.exit(0);
  } catch (error) {
    console.error('Gagal membuat akun admin:', error.message);
    process.exit(1);
  }
};

createAdmin();