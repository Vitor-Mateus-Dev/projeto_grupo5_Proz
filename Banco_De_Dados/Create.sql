CREATE TABLE usuario (
    usuario_id SERIAL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    nome_social VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE
);

CREATE TABLE doacoes (
    doacoes_id SERIAL PRIMARY KEY,
    valor NUMERIC(15, 2) NOT NULL,
    data_doacao DATE NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,
    doador_id INT NOT NULL,
    FOREIGN KEY (doador_id) REFERENCES usuario (usuario_id)
);

CREATE TABLE acb (
    id SERIAL PRIMARY KEY,
    url VARCHAR(50),
    nome VARCHAR(30)
);

CREATE TABLE ongs (
    id_ongs SERIAL PRIMARY KEY,
    nome_ong VARCHAR(30) NOT NULL,
    cnpj VARCHAR(20) NOT NULL UNIQUE,
    endereco VARCHAR(50) NOT NULL,
    cidade VARCHAR(20) NOT NULL,
    uf VARCHAR(5) NOT NULL
);

CREATE TABLE telefone (
    cnpj VARCHAR(20),
    telefone VARCHAR(15),
    PRIMARY KEY (cnpj, telefone),
    FOREIGN KEY (cnpj) REFERENCES ongs (cnpj)
);

CREATE TABLE doacoes_ongs (
    doacoes_ongs_id SERIAL PRIMARY KEY,
    doacao_id INT NOT NULL,
    ong_id INT NOT NULL,
    FOREIGN KEY (doacao_id) REFERENCES doacoes (doacoes_id),
    FOREIGN KEY (ong_id) REFERENCES ongs (id_ongs)
);

CREATE TABLE acb_recebimentos (
    recebimento_id SERIAL PRIMARY KEY,
    doacao_id INT NOT NULL,
    acb_id INT NOT NULL,
    FOREIGN KEY (doacao_id) REFERENCES doacoes (doacoes_id),
    FOREIGN KEY (acb_id) REFERENCES acb (id)
);
