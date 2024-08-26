# voting-pool

The goal of this project is to create a secure and robust voting poll web system with authentication, role-based access control, and a structured backend.

# 1 -Setup database

run `$ docker run --name some-postgres -e POSTGRES_PASSWORD=<your password> -e POSTGRES_USER=<your user> -e POSTGRES_DB=voting_pool -p 5432:5432 -d postgres`

# 2 - Create and fill in your db values in your .env

# 3 - Install API

run `npm install`

# 4 - Start the server

run `npm run dev`

# Run test coverage

run `npm run test`
