First Node/Nest project, this is a draft for all tests


## Doc links : 
### NEST : https://docs.nestjs.com/
### ORM : https://sequelize.org/docs/v6/other-topics/query-interface/
### sequelize-typescript : https://www.npmjs.com/package/sequelize-typescript
### class-validator : https://github.com/typestack/class-validator  (not sufficient for XSS or SQL injection)


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## Sequelize

```bash
# execute migrations
$ npx sequelize-cli db:migrate
# Create migration file template 
$ npx sequelize-cli migration:generate --name create-todos
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
