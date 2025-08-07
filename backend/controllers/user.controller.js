const { createUser, findUserByEmail } = require("../models/user.model");
const { generateHashDaSenha } = require("../utils/hash");

async function registerUser(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  const existeUsuario = await findUserByEmail(email);

  if (existeUsuario) {
    return res.status(409).json({ message: "Login já cadastrado." });
  }

  const senhaHash = await generateHashDaSenha(senha);

  await createUser({ nome, sobrenome, email, senhaHash });

  res.status(201).json({ message: "Usuário cadastrado com sucesso." });
}

module.exports = { registerUser };
