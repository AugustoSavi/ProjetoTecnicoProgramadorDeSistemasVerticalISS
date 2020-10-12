CREATE TABLE cad_usuario (
  id_cad_usuario INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  login VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id_cad_usuario)
);