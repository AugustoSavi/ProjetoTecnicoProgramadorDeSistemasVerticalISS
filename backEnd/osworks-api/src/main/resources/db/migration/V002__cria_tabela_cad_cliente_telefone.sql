CREATE TABLE cad_cliente_telefone (
	id_cad_cliente_telefone BIGINT NOT NULL AUTO_INCREMENT,
	id_cliente BIGINT NOT NULL,
	telefone VARCHAR(30) NOT NULL,
	PRIMARY KEY(id_cad_cliente_telefone)
);
ALTER TABLE cad_cliente_telefone ADD CONSTRAINT fk_cad_cliente_telefone FOREIGN KEY (id_cliente) REFERENCES cad_cliente(id_cliente);
