INSERT INTO usuario (nome, nome_social, email, senha, cpf)
VALUES ('Lucas Oliveira', 'Lucas', 'lucas.oliveira@example.com', 'w7t9k5p2', '12345678900'),
       ('Isabella Santos', 'Isabella', 'isabella.santos@example.com', 'x3g8m1h9', '23456789011'),
       ('Pedro Almeida', 'Pedro', 'pedro.almeida@example.com', 'z6b5c2y4', '34567890122'),
       ('Sofia Costa', 'Sofia', 'sofia.costa@example.com', 'r2f7q9j6', '45678901233'),
       ('Gabriel Pereira', 'Gabriel', 'gabriel.pereira@example.com', 's4v1n6d8', '56789012344'),
       ('Laura Rodrigues', 'Laura', 'laura.rodrigues@example.com', 't9l8w4s2', '67890123455');

INSERT INTO ongs (nome_ong, cnpj, endereco, cidade, uf)
VALUES ('Pata Amiga', '12345678000100', 'Rua dos Sonhos 123 Bairro Felicidade', 'Cidade Ficticia', 'XX'),
       ('Vida Animal', '23456789000101', 'Avenida das Flores, 456 - Bairro Esperanca', 'Cidade Ficticia', 'YY'),
       ('Fiel Cuidado', '34567890000102', 'Praca da Liberdade, 789 - Bairro Harmonia', 'Cidade Ficticia', 'ZZ'),
       ('Lar Feliz', '45678901000103', 'Rua dos Amigos, 321 - Bairro Uniao', 'Cidade Ficticia', 'WW'),
       ('Patas Livres', '56789012000104', 'Avenida Principal, 987 - Bairro Progresso', 'Cidade Ficticia', 'VV'),
       ('Anjos Peludos', '67890123000105', 'Praca Central, 654 - Bairro Paz', 'Cidade Ficticia', 'UU');

INSERT INTO acb (url, nome)
VALUES ('https://amorcombigodes.com', 'amor com bigodes');

INSERT INTO telefone (cnpj, telefone)
VALUES ('12345678000100', '(0) 1234-5678'),
       ('23456789000101', '(0) 9876-5432'),
       ('34567890000102', '(0) 2468-1357'),
       ('45678901000103', '(0) 7412-3698'),
       ('56789012000104', '(0) 8521-4379'),
       ('67890123000105', '(0) 9753-8642');

INSERT INTO doacoes (valor, data_doacao, doador_id)
VALUES (100.00, '2023-06-09', 1),
       (200.00, '2023-06-10', 2),
       (150.00, '2023-06-11', 3),
       (300.00, '2023-06-12', 4),
       (250.00, '2023-06-13', 5),
       (180.00, '2023-06-14', 1);

INSERT INTO doacoes_ongs (doacao_id, ong_id)
VALUES (1, 1),
       (2, 1),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6);

INSERT INTO acb_recebimentos (doacao_id, acb_id)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (4, 1),
       (5, 1),
       (6, 1);

       