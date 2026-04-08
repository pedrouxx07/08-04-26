const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt"); 
const conexao = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando com MySQL!");
});

app.post("/alunos", async (req, res) => {
  const { nome, email, senha } = req.body; 

  if (!nome || !email || !senha) {
    return res.status(400).json({
      erro: "Nome, email e senha são obrigatórios"
    });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const sql = "INSERT INTO alunos (nome, email, senha) VALUES (?, ?, ?)";

    conexao.query(sql, [nome, email, senhaHash], (erro, resultado) => {
      if (erro) {
        console.error("Erro ao salvar aluno:", erro);
        return res.status(500).json({
          erro: "Erro ao salvar no banco de dados"
        });
      }

      res.status(201).json({
        mensagem: "Aluno cadastrado com sucesso!",
        id: resultado.insertId
      });
    });

  } catch (erro) {
    console.error("Erro ao criptografar senha:", erro);
    res.status(500).json({
      erro: "Erro interno no servidor"
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});