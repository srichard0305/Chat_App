# Chat App 

The Chat App is a real time messaging system that allows users to message any other user registered on the platform. The Chat App can allows users to sign up with their full name, a username, and password. 
When logged in you are greeted with a home page that has your list of contacts and previous conversation, as well as, a message section where you can read previous messages and send new ones. 
The goal of this application was to learn more about the MERN stack, specifically React conecpts like hooks, contexts, etc. Another goal was to learn more about TypeScript, this application was previously 
built entirely in JavaScript and my goal was to convert most of the project into TypeScript, which is still an on going process!

## Getting Started and Installing 

To get this app up and running on local machine simple clone the repo and open with our IDE of choice. I built this project in VSCode and would recommned to use the same. 
In the termninal and in the project directory simple type

```
npm run build
```

This will run the build script to install all modules needed to run the application. 
Then type

```
npm start
```

This will start the server, go into any browser and type 

```
localhost:5000
```

This will bring to the login page of the website, you can click the signup link to bring to the signup page for account registration.

## Technology 

The technology used in this application is of course the MERN stack, with most of the project written in TypeScript. There are numerous modules used to help with security and connection establishment. 
Mongoose was used to help with connection to the MongoDB database, as well as, creating schemas. The applcaition was built with the MVC architecture in mind, with the back end modularized into controllers, models, and routes. 
bcryptjs was used for hashing passwords and password verification. JWT was used to securely transfer information between parties as JSON objects. Socket.io was used bulit on top of the express server to allow for real time messaging 
and communication between users. 

## New Features

There are several features that I still would like to implement. The use of a contact list, currently any user can message any other user on the platform. In the future I would like to implement a conact list where users can send friend requests
that can be accepted or not. If accepted that user would be added to their contact list and they can message back and fourth. 


