### [Food Blog](http://localhost:3000/)
# MERN Stack Recipe Management Application
Built with the MERN stack (MongoDB, Express, React and NodeJS).  

## Update
I am excited to present a full-stack food blogging platform with recipe uploads, image handling, and secure authentication. Stay tuned for more features!

Shubham Kumar  
----

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  * [Troubleshooting](#troubleshooting)
  * [Author](#author)
  * [License](#license)

## Introduction
This is a personal project I've built using the MERN stack (MongoDB, Express, React & Nodejs), designed to share and manage recipes online. Users can sign up, post their recipes with images, mark their favorites, and manage them via a clean, responsive dashboard. Jump right into the [Live App](http://localhost:3000/) or run it locally by cloning the [Source code](https://github.com/shubhamkumar/food-blog). I'm actively working on this, so your feedback is always welcome!



## Key Features
- User authentication using JWT
- Add, edit, delete recipes with images
- Upload images via Multer
- Mark/unmark recipes as favorites
- View all recipes and user dashboard
- Clean responsive UI and user experience

## Technologies used
This project was created using the following technologies.

#### Client

- React JS
- React Router DOM
- Axios
- CSS
- Cloudinary (for image storage)

#### Server

- Express
- Mongoose
- JWT (For authentication)
- Multer (for image uploads)
- bcryptjs

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
To run this project locally:

- Clone the repository
- Open the project in your code editor
- Open two terminals: one for client and one for server

In the first terminal (Frontend):

$ cd frontend $ npm install $ npm run dev

In the second terminal (Backend):

$ cd backend $ npm install $ touch .env

Add the following in .env:

MONGODB_URI = your_mongo_db_uri JWT_SECRET = your_jwt_secret PORT = 5000

Then run:

$ node server.js

## Troubleshooting
If image uploads or authentication aren't working:
- Double check your .env variables
- Ensure MongoDB URI is active and correct
- Use tools like Postman to test backend routes independently

## Author


- Github: [@shubhamkumar](https://github.com/Shubham1893)
- LinkedIn: [@shubham-kumar](https://www.linkedin.com/in/shubham-kumar-a2b542254/)
- Email: [@shubham](shubhamkeshri1892@gmail.com)

## License

- This project is [MIT](https://opensource.org/licenses/MIT) licensed
