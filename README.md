This project includes APIs for credit card accounts and the UI to create and list all accounts.

Tech Stack Used:
Node, Express, React,
DB - MongoDB & redis cache
Unit tests - Jest
Schema validation - Joi

Pre-requisite to run the project:
1. Node (use latest version)
2. Mongo
3. Redis
4. Git

Steps to run the project:
1. git clone the repository using - git clone https://github.com/shrutikayawale/credit-card.git
2. do `npm i`
3. Go to cd server and do `npm i`
4. Go to client and do `npm i`
5. Connect mongodb and start redis server (redis-cli)
5. Run the project using npm start

To test the backend APIs:
1. endpoint - http://localhost:3001/v1/accounts 
   method - GET

2. endpoint - http://localhost:3001/v1/accounts
   method - POST
   payload: {
    "name" : "shruti",
    "limit": 1000,
    "cardNumber": "79927398713" 
   }

* To check data in redis, use below commands:
1. KEYS *
2. GET accounts