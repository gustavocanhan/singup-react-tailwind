const bcrypt = require("bcrypt");

async function generateHashDaSenha(senha) {
  const saltRounds = 10;
  return await bcrypt.hash(senha, saltRounds);
}

async function compareHashSenhas(senha, hash) {
  return await bcrypt.compare(senha, hash);
}

module.exports = { generateHashDaSenha, compareHashSenhas };
