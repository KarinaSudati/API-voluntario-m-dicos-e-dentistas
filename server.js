require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let cadastros = [];
let proximoId = 1;

app.use(express.json());

function validarNome(nome) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(nome);
}

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function telefoneValido(telefone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(telefone);
}

function validarMensagem(mensagem) {
  const regex = /^[a-zA-Z0-9\s.,!?]+$/;
  return regex.test(mensagem);
}

function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;
  if (!nome || nome.length < 3) {
    return res.status(400).json({
      erro: "Nome é obrigatório e deve conter pelo menos 3 caracteres",
    });
  }
  if (!email || !emailValido(email)) {
    return res.status(400).json({
      erro: "Email inválido ou ausente",
    });
  }
  if (!telefone || !telefoneValido(telefone)) {
    return res.status(400).json({
      erro: "Telefone inválido ou ausente",
    });
  }
  if (mensagem && !validarMensagem(mensagem)) {
    return res.status(400).json({
      erro: "Mensagem contém caracteres inválidos",
    });
  }

  next();
}

app.get("/", (req, res) => {
  res.send("API rodando!");
});

app.get("/cadastros", (req, res) => {
  res.json(cadastros);
});

app.post("/cadastros", validarCadastro, (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const novoCadastro = {
    id: proximoId++,
    nome,
    email,
    telefone,
    mensagem: mensagem || null,
  };
  cadastros.push(novoCadastro);
  res.status(201).json({
    mensagem: "cadastro enviado com sucesso",
    cadastro: novoCadastro,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
