CREATE TABLE cliente(
	id_cliente BIGINT NOT NULL AUTO_INCREMENT,
	cpf_cnpj VARCHAR(18),
	descricao VARCHAR (60) NOT NULL,
	email VARCHAR(255) NOT NULL,
	tipo CHAR(1),
	
	PRIMARY KEY(id_cliente)
);
