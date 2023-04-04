# WELCOME TO FLIGHT SERVICE

## Project Setup

- clone the project
- Execute `npm install`
- create `.env` and add
  - `PORT=3000`
- Inside `src/config` create `config.json` and paste following piece of code

```
{
 "development": {
   "username": <your db login name>,
   "password": <database password>,
   "database": <your database name>,
   "host": "127.0.0.1",
   "dialect": "mysql"
 }

}



```

- Once you have added your db go to src folder and execute `npx sequelize db:create`
