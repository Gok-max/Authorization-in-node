User Authentication and Authorization with Bearer Token
This project is a Node.js-based application that implements user authentication and authorization using Bearer tokens. The application follows the Model-View-Controller (MVC) pattern and utilizes Express.js, Mongoose (MongoDB), and JWT for token-based authentication.

Project Overview
This application provides a secure user registration and login system using JWT (JSON Web Tokens) for token-based authentication. The user data is stored in a MongoDB database, and the application follows the MVC architecture for better separation of concerns. The application also includes a protected route for fetching user information, accessible only with a valid JWT.

Tech Stack
Node.js: JavaScript runtime used for server-side development.
Express.js: Web framework for Node.js to build RESTful APIs.
Mongoose: MongoDB ODM for modeling application data.
JWT (jsonwebtoken): Used to generate and verify Bearer tokens for secure authentication.
Postman: For API testing and documentation.
Features
User Registration: Users can register with username, email, password, and role.
Password Hashing: User passwords are hashed using bcrypt before saving them to the database.
User Login: Users can log in with their email and password. A JWT is returned upon successful login.
JWT Authentication: JWTs are used to authenticate requests. A middleware function verifies the token and attaches user information to the request object.
Protected Routes: A protected route for fetching user information, accessible only by providing a valid JWT.
API Documentation: Postman collection for testing and sample API requests.
API Documentation
For detailed API documentation, including request/response examples, you can refer to the full Postman documentation:

https://documenter.getpostman.com/view/39168825/2sAY4sjjZz
