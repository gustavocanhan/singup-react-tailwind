const db = require("../config/db");

async function createUser({ nome, sobrenome, email, senhaHash }) {
  const sql =
    "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)";
  await db.execute(sql, [nome, sobrenome, email, senhaHash]);
}

async function findUserByEmail(email) {
  const [rows] = await db.execute("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);
  return rows[0];
}

module.exports = { createUser, findUserByEmail };
