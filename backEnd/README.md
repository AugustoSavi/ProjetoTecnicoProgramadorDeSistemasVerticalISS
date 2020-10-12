# CursoSpringREST

### Porque Rest
- Separação entre cliente e servidor
- Escabilidade
- Independencia de linguagem
- Mercado

### Por que Spring?
- Canivete suiço para desenvolvedores Java
- Simplicidade
- Maturidade
- Modularidade
- Evolução constante
- Open Source
- Comunidade grande e forte
- Popularidade
- Empregabilidade


- [X] Aula 1

- [X] Aula 2

- [] Aula 3

- [] Aula 4

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

```