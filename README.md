# projetoTelzir

This project was generated with [ReactJS](https://pt-br.reactjs.org/), [NodeJS](https://nodejs.org/en/), [mysql] and [docker](https://www.docker.com/).

## Run with Docker

Run `docker-compose build`

Run `docker-compose up -d`

Navigate to `http://localhost:3000/`

## Run Local
On `.\server\app\config\db.config.js`, update the database infos.

### Start Server

Run `cd .\server\`

Run `npm install`

Run `npm start`

### Start Client

Run `cd .\client\`

Run `npm install`

Run `npm start`

Navigate to `http://localhost:3000/`

## To seed database 

Run `cd .\server\`

Run `yarn sequelize seed:all`


## Descricçao

Na pagina inicial é possivel calcular o preço das chamadas.

Para adicionar mais cidades, planos ou alterar os preços das chamadas é possivel criar um novo usuário, ou fazer o login com:

usuario: admin@telzir.com
senha: 123456
