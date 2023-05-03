# Gerenciador de estoque

O gerenciador de estoque é um sistema composto por uma sequência de funcionalidades com o objetivo de armazenar itens em um estoque. Suas funcionalidades são compostas por:

- Listar itens
- Adicionar item 
    - Nome
    - Marca
    - Quantidade
    - Preço
- Deletar item 


## Projeto

O projeto é composto por duas pastas raizes que representam o Back e o Front da aplicação.

### api

Para executar a api basta executar os comandos abaixo na raiz da pasta api: 

Instalar pacotes:
```
npm install
```

Executar api:
```
node src/index.js
```
#### [fastify](https://www.fastify.io/)
Para gerar o client HTML foi necessário a utilização da biblioteca fastify, a mesma disponibilizou um modelo facilitado na criação dos métodos. 

### app

Para executar o Frontend basta abrir o arquivo index.html no navegador.