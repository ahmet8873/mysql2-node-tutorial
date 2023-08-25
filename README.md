# Tutorial Project README

This repository contains the code for a tutorial project that demonstrates the creation of a simple web application for managing notes using Node.js, Express, and MySQL. The project showcases various concepts, including API routing, database interactions, and environment configuration.

## Project Overview

The project consists of an Express.js application that provides a RESTful API for managing notes. The application interacts with a MySQL database to store and retrieve note data. The project includes the following key files:

- `app.js`: This file contains the main application logic. It sets up the Express server, defines API routes for retrieving all notes, retrieving a single note by ID, and creating a new note.

- `database.js`: This file handles the database interactions using the `mysql2` library. It provides functions to retrieve all notes, retrieve a single note by ID, and create a new note.

- `schema.sql`: This SQL file defines the database schema, including the creation of the `notes` table with appropriate columns.

- `package.json`: This file contains project metadata, dependencies, and scripts to run the application.

## Technologies Used

The project demonstrates the use of the following technologies:

- **Node.js**: A JavaScript runtime that allows executing JavaScript code on the server side.

- **Express.js**: A web application framework for Node.js that simplifies the creation of APIs and handling of HTTP requests.

- **MySQL**: A popular relational database management system used to store and retrieve data.

- **dotenv**: A module used for loading environment variables from a `.env` file to provide sensitive configuration data securely.

- **mysql2**: A MySQL library for Node.js that provides a promise-based API for database interactions.

- **nodemon**: A development utility that monitors changes in files and automatically restarts the server during development.

## How to Run the Project

Follow these steps to run the project on your local machine:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Create a `.env` file in the project root and add your MySQL database configuration variables (e.g., `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`).
4. Execute the `schema.sql` file in your MySQL database to create the necessary schema and sample data.
5. Start the server using the command `npm run dev`.

Once the server is running, you can interact with the API endpoints using tools like `curl`, Postman, or a web browser.

## What I Learned

Throughout the development of this tutorial project, I have gained hands-on experience in:

- Setting up a Node.js environment and creating an Express.js application.
- Defining and handling API routes for different HTTP methods (GET and POST).
- Interacting with a MySQL database using the `mysql2` library and executing SQL queries.
- Using the `dotenv` module to securely manage sensitive configuration data.
- Creating a basic database schema and inserting sample data.
- Leveraging development tools like `nodemon` to streamline the development workflow.

By completing this project, I have taken significant steps towards understanding the fundamentals of building web applications, managing databases, and structuring APIs using popular technologies in the JavaScript ecosystem. This foundation will be valuable as I continue my journey in software development and IT.
