# Desafio - Desenvolvedor Full Stack

Este repositório contém o código desenvolvido para a vaga de Desenvolvedor Fullstack no Laboratório Bridge. Foi solicitada a implementação de um web app capaz de realizar realizar o cálculo do fatorial de um dado número.

# Backend

Foi utilizado Java e Spring Boot para desenvolvimento do backend. O Maven também foi utilizado, sendo responsável pela compilação e execução do código em Java. Para rodar o servidor, acesse a pasta `backend` e execute o seguinte comando:

```
./mvnw spring-boot:run
```

O backend poderá ser acessado em http://localhost:8080.

### Exemplo de requisição à API

```
GET /factorial?number=3
```

### Exemplo de resposta da API

```
{
  "factorial": 6
}
```

# Frontend

Foi utilizado o React para implementação da interface de usuário. Algumas bibliotecas foram utilizadas para facilitar o desenvolvimento da aplicação.

- Axios - responsável pelas requisições HTTP ao servidor
- Bold - design system desenvolvido pelo Laboratório Bridge

Para rodar o cliente, acesse a pasta `frontend` e execute os seguintes comandos:

```
yarn install
yarn start
```

O frontend poderá ser acessado em http://localhost:3000.

# Screenshot

![](/screens/factorial.png)
