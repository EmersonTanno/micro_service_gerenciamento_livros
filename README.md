Projeto desenvolvido com NestJS

---

## ✅ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/EmersonTanno/micro_service_gerenciamento_livros.git

# Acesse a pasta do projeto
cd micro_service_gerenciamento_livros

# Instale as dependências
npm install
```

## ▶️ Execução

```bash
# Executar em modo de desenvolvimento
npm run start:dev

# Executar em produção
npm run start
```

## 📚 Rotas da API

### ➕ Criar Livro
POST `/books` </br>
Body:
``` json
{
    "title": "Lord of The Rings",
    "author": "JRR Tolkien"
}
```
Resposta:
`201 Created`

### 📄 Listar todos os livros
GET `/books` </br>
Resposta:
`200 OK`
``` json
[
  {
      "_id": "683b0fa0aba194239d910dc1",
      "title": "Lord of The Rings",
      "author": "JRR Tolkien",
      "status": "reservado",
      "__v": 0
  },
  ...
]
```

### 🔍 Buscar livro por ID
GET `/books/:id` </br>
Resposta:
`200 OK`
``` json
{
    "_id": "683b0fa0aba194239d910dc1",
    "title": "Lord of The Rings",
    "author": "JRR Tolkien",
    "status": "reservado",
    "__v": 0
}
```

### ✏️ Atualizar livro
PUT `/books/:id` </br>
Body:
``` json
{
    "title": "LOTR",
    "author": "J.R.R.Tolkien",
    "status": "reservado"
}
```
Resposta:
`200 OK`
``` json
{
    "_id": "683b0fa0aba194239d910dc1",
    "title": "LOTR",
    "author": "J.R.R.Tolkien",
    "status": "reservado",
    "__v": 0
}
```

### ✏️ Atualizar status do livro
PATCH `/books/:id/status` </br>
Resposta:
`200 OK`
``` json
{
    "_id": "683b0fa0aba194239d910dc1",
    "title": "LOTR",
    "author": "J.R.R.Tolkien",
    "status": "reservado",
    "__v": 0
}
```
