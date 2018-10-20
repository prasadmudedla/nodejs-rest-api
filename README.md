This repository creates 2 RESTful web services using nodejs to demonsrate contract testing using pactjs. The "accounts" service acts as the consumer and the "users" service is a producer.

The "account" service is called with necessary parameters which in turns calls the "users" service to fetch the resources from the database which in this case is a cloud hosted MongoDB instance.

How to use the repo?
- clone the repo
- execute the command - npm install (run npm --version to verify whether npm is installed)
- execute the command - npm start

The server now runs at http://localhost:3000

How to get all accounts from database?
- Send a GET request with no parameter e.g. http://localhost:3000/accounts/

How to get an account by its ID?
- Send a GET request with id as the parameter e.g. http://localhost:3000/accounts/2

How to create a new account?
- Send a POST request with the JSON object in the body
    e.g. url - http://localhost:3000/accounts/
        body - {"id": "1000", "name": "lorem epsum", "email": "lorem.epsum@dolor.com"}