## SIMPLE-REAL-TIME-CHAT-APP-WITH-MERN

Thanks for visiting my GitHub account!

## Source Code (Download)

[Click Here]()

## Required Software (Download)

- VS Code, Download ->https://code.visualstudio.com/download
- Node, Download-> https://nodejs.org/en/download
- MongoDB Shell(msi) , Download-> https://www.mongodb.com/try/download/shell
- MongoDB community (msi), download->(https://www.mongodb.com/try/download/community)
- Postman (Optional), Download-> https://www.postman.com/downloads/

**Or Online Database (MongoDB Atlas)**

- Register -> https://www.mongodb.com/cloud/atlas/register

## ========== Environment Setup ==========

1. Install Node.js
2. To verify installation into command form by node -v
3. For initialization npm write the query in the command window as npm init -y
4. Setup the opening file into the package.json and change the file with main:'server.js'
5. To create a server using the express package then write a query into the command window as npm install express.
   Write code in the server file for initialization
   const express = require("express");
   const app = express();
   app.listen(3000, () => {
   console.log("Server is running at http://localhost:3000");
   });

6. Install the nodemon package for automatically running the server as- npm i --save-dev nodemon (For Developing purpose)
7. setup the package.json file in the scripts key, write

```js
 "scripts": {
 "start": "node ./resources/backend/server.js",
 "dev": "nodemon ./resources/backend/server.js",
 "test": "echo \"Error: no test specified\" && exit 1"
 },
```

\*\* Run both server with one command,

1. Run the command in the server directory

```bash
 npm i concurrently
```

2. Setup the package.json file as->

```js
"scripts": {
    "server": "nodemon app.js",
    "client": "npm start --prefix ../client",
    "client-fix": "npm audit fix --force --prefix ./client",
    "dev": "concurrently \" npm run server \" \" npm run client \""

  },
```

8. use the Morgan package for automatic restart. Hence install the morgan package as npm install --save-dev morgan (Development purpose)
   Write code in the server file for initialization
   const morgan = require("morgan");
   app.use(morgan("dev")); --> Middlewire.
9. Install Postman software for API testing by the URL endpoint.
10. Install Mongobd + MongobdCompass and Mongoshell (For Database)

## ========== Connect MongoDB Database ==========

1. Install Mondodb + Mongodb Compass and Mongodb Shell download from the google.
2. Set up Environment Variable in drive:c/program file
3. Create a directory in the base path of the c drive named data. Inside the data directory create another folder db.
4. Write the command in the CMD window as Mongod. And write the other command in the other CMD window as mongosh.
5. Then Check the version as mongod --version and mongosh --version.
6. Install mongoose package as npm i mongoose
7. Create an atlas account. In the atlas account create a cluster that have a user(as atlas admin) and network access with any access IP address.
8. Connect the database using URL from the atlas cluster or local Mongodb compass using the mongoose package as mongoose. connect('mongodb://localhost:27017/database-name);

# Following tools are used to develop the application

## Frontend Tools

- React Js
- socket.io-client

## Backend Tools

- Programming languages : JavaScript
- Node Js
- Frameworks : Express Js
- Databases : MongoDB
- Socket.io

## How to run this project

## Backend install

### Run this command in root folder

```js
cd server
npm install --force

```

## Frontend install

### Run this command in root folder

```js
cd client
npm install --force

```

## Run project

Step-1: Run this command in server folder

    ```js
    npm run dev
    ```

**If application doesn't run**

Step-2:

1. Again run this command in client folder

   ```js
    npm audit fix --force
   ```

2. And run this command in server folder

   ```js
   npm audit fix --force
   ```

## Again Run project

**Run this command in server folder**

```js
 npm run dev
```

## How to create the react template?

- clone to your local machine
- npm install
- npm start
- Or, create and run react app with npx

```js
// create react app command
npx create-react-app appName

// If any error occurs
npm install npm -g

// run react app command
cd appName
npm start
```

## Template Includes

- React-js
- Node-js
- Express-js
- MongoDB
- Socket
- axios

## Project Overview


|                                                                                                        |                                                                                                        |
| :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                                Sign-in                                                 |                                                Sign-Up                                                 |
| ![singin](https://github.com/learnwithfair/simple-chat-app-with-mern/blob/main/screenshot/sign-in.png) | ![signup](https://github.com/learnwithfair/simple-chat-app-with-mern/blob/main/screenshot/sign-up.png) |

|                                                                                                             |
| :---------------------------------------------------------------------------------------------------------: |
|                                                  Dashboard                                                  |
| ![dashboard](https://github.com/learnwithfair/simple-chat-app-with-mern/blob/main/screenshot/dashboard.png) |

## Necessary Code

```bash
const express = require("express"); // Create Express server
const morgan = require("morgan"); // For automatically run server
const cookieParser = require("cookie-parser"); // For set Cookie
const createError = require("http-errors"); // For create HTTP Error
const xssClean = require("xss-clean"); // For  Secure API
const bodyParser = require("body-parser"); // For Get/ Set data into body
const cors = require("cors"); // To set access for client-side URL
```

/_
|--------------------------------------------------------------------------
| Initialize Middleware
|--------------------------------------------------------------------------
_/

```bash
app.use(cookieParser()); // For set Cookie
app.use(morgan("dev")); // For automatically run server
app.use(xssClean()); // For  Secure api
app.use(bodyParser.json()); // For Set, Read data into the body and display JSON Format Text
app.use(bodyParser.urlencoded({ extended: true })); // Get HTML Form Data
app.use(setRefreshToken); // For set Refresh Token [Automatically call this middleware for all route]
// To get access to Client side URL
app.use(cors(
 {
   origin: BASE_URL, // Frontend Base URL
   credentials: true
 }
));
app.use(express.static("public")); // To Display Server site image
```

/_
|--------------------------------------------------------------------------
| Socket IO
|--------------------------------------------------------------------------
_/

```bash
const io = require("socket.io")(8080, {
 cors: {
   origin: BASE_URL
 },
});
io.on("connection", (socket) => {
 console.log("User connected", socket.id);

 setInterval(() => {
   io.emit("refresh", {});
 }, 500)

 // socket.on("disconnect", function () {
 //   console.log("Disconnect");

 // })

});
```

## Follow Me

<img src ="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" height="15px" width="15px"/> [Facebook](http://facebook.com/learnwithfair), <img src ="https://image.similarpng.com/very-thumbnail/2021/10/Youtube-icon-design-on-transparent-background-PNG.png" height="20px" width="20px"/> [Youtube](http://youtube.com/@learnwithfair), <img src ="https://i.pinimg.com/originals/fa/ea/02/faea02f412415becfb4939d2b6431c28.jpg" height="15px" width="15px"/> [Instagram](http://instagram.com/learnwithfair)

