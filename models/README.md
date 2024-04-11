# Concerts Nostalgia API &nbsp;🎸

### Introduction

API designed and developed to enhance the functionality of "Concerts Nostalgia", a web application dedicated to preserving memories of concerts attended. By seamlessly integrating with the platform, this API empowers Concerts Nostalgia to deliver dynamic content and interactive features.

<!-- ### Project Support Features

- Users can signup and login to their accounts
- Public (non-authenticated) users can access all causes on the platform
- Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created. -->

### Installation Guide

- Clone this repository.
- Run npm install to install all dependencies
- Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage

- Run **npm run dev** to start the application.
- Connect to the API using Postman or Insomnia on local port **4000**.

### API Endpoints

| HTTP Verbs | Endpoints            | Action                                     |
| ---------- | -------------------- | ------------------------------------------ |
| **GET**    | /concerts/           | _To retrieve all concerts on the platform_ |
| **GET**    | /concerts/:id        | _To retrieve details of a single concert_  |
| **POST**   | /concerts/add        | _To create a new concert_                  |
| **PUT**    | /concerts/edit/:id   | _To edit the details of a single concert_  |
| **DELETE** | /concerts/causes/:id | _To delete a single concert_               |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Authors

- [Tulio Minini](https://tuliominini.com/)
