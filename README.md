# WELCOME TO FLIGHTS SERVICE

## PROJECT SETUP

- CLONE THE PROJECT ON YOUR LOCAL
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and ad dthe following enviornment varaible
- `PORT 3000`
- Inside the `src/config` folder create a new file `cofig.json` and then add the following piece of json

```
{
    "development": {
    "username": <YOUR_DB_NAME>,
    "password": "<YOUR_DB_PASSWORD>",
    "database": "FLIGTS_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}
```

- Once you've added your db config as listed above, go to the src folder form your terimal and excute `npx sequelize db:create` and then execute

`npx sequelize db:create`

## DB DESIGN
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airport but one airport belongs to the city 
  - One airport can have many flights, but a flight belongs to one airport 


 Seuqelize like query
like is a operator that is used to find the data that matches the pattern you specify. It is used with the WHERE clause of the SELECT statement.



## Tables 

### City --> id,name,createdAt,updatedAt
### Airport --> id,name,cityId,createdAt,updatedAt

  RELATIONSHIP:
  Citay has many airports and one airport belongs to one city(one to many)