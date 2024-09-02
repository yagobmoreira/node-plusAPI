<h1 align="center">
  Plus API
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yagobmoreira/node-plusAPI">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/yagobmoreira/node-plusAPI" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yagobmoreira/node-plusAPI">
</p>


## Descrição

Este repositório contém uma API backend em desenvolvimento, utilizando Node.js e NestJS, para testes do sistema TCL+.

## Configuração do Projeto

### Pré-requisitos

- Node.js
- NPM
- Banco de dados MySQL

### Variáveis de Ambiente

Crie um arquivo `.env.development.local` na raiz do projeto, de acordo com o exemplo [.env.example](/.env.example)

### Banco de dados

Você pode configurar o banco de dados MySQL localmente ou utilizar o Docker.

#### Usando Docker Compose

Na raíz do projeto, execute o comando:

```bash
docker-compose up -d
```

### Instalação

Instale as dependências do projeto:

```bash
npm install
```

Gere o Cliente Prisma:

```bash
npx prisma generate
```

### Executando o Projeto

#### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

>Nota: O servidor Back-end estará executando na porta 9090.


### Documentação

Após o servidor back-end estar rodando, é possível acessar a documentação da api, através da rota `/api` na aplicação. Caso tenha utilizado a porta padrão, `9090`, o endereço será: `http://localhost:9090/api`

## 🛠 Tecnologias

As seguintes libs foram usadas na construção do projeto:

### Backend
- **[NestJs](https://docs.nestjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Express](https://expressjs.com/)**
- **[Prisma](https://www.prisma.io/)**
- **[Docker](https://www.docker.com/)**


