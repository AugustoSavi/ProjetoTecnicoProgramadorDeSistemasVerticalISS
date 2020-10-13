# ProjetoTecnicoProgramadorDeSistemasVerticalISS

### Orientações Projeto Técnico

Tecnologias a utilizar:

Obrigatório:
- [X] AngularJS
- [X] Spring Boot
- [X] Banco de dados MySQL ou Postgres

Opcional:

- [X] Utilizar Bootstrap como framework de design
- [ ] Deixar o projeto preparado para rodar com Docker

- [ ]  O projeto deverá possuir um formulário de login e senha utilizando OAuth 2.0

- [ ] Deverá ser possível uma pessoa qualquer fazer o registro no sistema

- [X] Deverá possuir um cadastro de clientes que deverá ter no mínimo os seguintes campos:
- [X] Nome
- [X] CPF ou CNPJ
- [X] Endereço
- [X] Telefone

Regras desse cadastro:
- [X] Não pode haver CPF ou CNPJ duplicado
- [ ] Deverá ser possível registrar quantos endereços forem necessário tendo que definir apenas 1 como principal
- [ ] Deve permitir registrar quantos telefones forem necessários

## endpoints

```

# Listaclientes
GET  http://localhost:8080/clientes

# FindByiD
GET http://localhost:8080/clientes/{id_cliente}

# AddCliente
POST http://localhost:8080/clientes/

JSON body:

{
	"nome":"nome",
	"email": "teste@Teste.com",
	"telefone":"12345678"
}

# AlteraCliente
PUT http://localhost:8080/clientes/{id_cliente}

JSON body:

{
	"nome":"nome",
	"email": "teste@Teste.com",
	"telefone":"1245215213"
}

# Delete Cliente
DELETE http://localhost:8080/clientes/{id_cliente}
