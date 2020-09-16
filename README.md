# Desafio - Desenvolvedor Full Stack

Este repositório contém o código desenvolvido para a vaga de Desenvolvedor Fullstack no Laboratório Bridge. Foi solicitada a implementação de um web app capaz de realizar realizar o cálculo do fatorial de um dado número.

# Backend

Foi utilizado Java e Spring Boot para desenvolvimento do backend. O Maven também foi utilizado, sendo responsável pela compilação e execução do código em Java. Para rodar o servidor, acesse a pasta `backend` e execute o seguinte comando:

```
./mvnw spring-boot:run
```

### Requisição à API

```
GET /factorial?number=3
```

### Resposta da API

```
{
  "factorial": 6
}
```

# Frontend

Foi utilizado o React para implementação da interface de usuário.

- Axios - responsável pelas requisições HTTP ao servidor
- Bold - design system desenvolvido pelo Laboratório Bridge

Para rodar o cliente, acesse a pasta `frontend` e execute o seguinte comando:

```
yarn
yarn start
```

# Screenshot

![](/screens/factorial.png)
