const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "escola_react_node"
});


conexao.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar no MySQL:", erro);
    return;
  }
  console.log("Conectado ao MySQL com sucesso!");
});

module.exports = conexao;