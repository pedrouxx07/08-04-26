CREATE DATABASE escola_react_node;

USE escola_react_node;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
        senha VARCHAR(100) NOT NULL,

    dia_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from alunos;