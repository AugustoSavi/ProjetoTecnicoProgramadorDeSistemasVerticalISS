CREATE TABLE cad_cliente_endereco (
	id_cad_cliente_endereco BIGINT NOT NULL AUTO_INCREMENT,
	id_cliente BIGINT NOT NULL,
	endereco_principal INT(2),
	endereco VARCHAR(30) NOT NULL,
	cep VARCHAR(20) NOT NULL,
	bairro VARCHAR(255) NOT NULL,
	cidade VARCHAR(255) NOT NULL,
	complemento VARCHAR(255),
	numero VARCHAR(10),
	PRIMARY KEY(id_cad_cliente_endereco)
);

ALTER TABLE cad_cliente_endereco ADD CONSTRAINT fk_cad_cliente_endereco FOREIGN KEY (id_cliente) REFERENCES cad_cliente(id_cliente);