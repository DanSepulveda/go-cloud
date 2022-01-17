# GoCloud

Full Stack technical challenge developed using React for frontend and Nodejs with Express for backend.

<div style="display: inline-block">
    <img src="https://i.ibb.co/3BVqgVy/login.png" alt="login page" width="47%"/>
    <img src="https://i.ibb.co/cvtBZNB/dashboard.png" alt="dashboard page" width="47%"/>
</div>

## Introduction

This file tries to explain some aspects about the operation of the app. It is divided in 3 sections: Installation (for running locally), Frontend and Backend.

### Demo

You can see a demo of this project on the following link: [GoCloud App](http://ec2-18-206-228-172.compute-1.amazonaws.com/)

## Installation

If you want to run this project on your machine, just follow these steps:

- Create a folder and execute `git clone https://github.com/DanSepulveda/go-cloud.git`
- Access to `backend folder` and execute `npm install` and `npm start`
- Server start running on `port 4000`
- Access to `frontend folder` and execute `npm install` and `npm start`
- Go to `http://localhost:3000` on web browser.

## FRONTEND

This project has been created using `npx create-react-app`

### Technology Stack
- [React](https://reactjs.org/) - JavaScript Library
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Formik](https://formik.org/) - Form library
- [Yup](https://github.com/jquense/yup)

Using Formik with Yup allow to validate information before making a request so you ensure that sent data has the correct schema.

## BACKEND

### Content

### Endpoints

- `/signup`
    - **POST**: used to create a user in Cognito Pool. It requires an object in the request body `{name: string, email: string, password: string}`
- `/confirm-registratio`
    - **POST**: after signup an email with a code is sent. You need to confirm account. Send an object in the request body `{email: string, code: string}`
- `/login`
    - **POST**: used to access app using Cognito verification. It requires an object in the request body `{email: string, password: string}`

### Technology Stack
- [Nodejs](https://nodejs.org/en/) - JavaScript Runtime
- [Express](https://expressjs.com/) - Nodejs Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [DynamoDB](https://docs.aws.amazon.com/dynamodb/) - NoSQL Database Service from AWS
- [UUID](https://www.npmjs.com/package/uuid) - In this project is used to create unique id for dynamodb items
- [Dynamo Data Types](https://www.npmjs.com/package/dynamodb-data-types) - Used for writing Items easier
- [Cognito Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) - For user authentication
- [Cognito Identity](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html) - To generate credentials to access DynamoDB

---

Desarrollado por [Daniel Sepúlveda](https://github.com/DanSepulveda/)