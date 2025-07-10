# 🔗 URL Shortener

A backend web application that allows users to shorten long URLs into clean, concise links. Built with **Node.js**, **Express.js**, and **MongoDB**, this project also supports user registration, authentication, and URL redirection.

Part 2: Features
## 🚀 Features

- ✂️ Shortens long URLs into unique short codes
- 🔐 User registration and login system
- 🛡️ Authentication using JWT tokens
- 🌐 Redirects short URLs to the original URLs
- 🧩 Modular MVC folder structure

Part 3: Tech Stack
## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + Mongoose
- **JWT** (for authentication)
- **Postman** (for API testing)

Part 4: Folder Structure
## 📂 Folder Structure

```
urlShortner/
├── controllers/
│   ├── url.js
│   └── user.js
├── middleware/
│   └── auth.js
├── models/
│   ├── url.js
│   └── user.js
├── connect.js
├── index.js
├── package.json
└── README.md
```


Part 5: How to Run Locally
## ⚙️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Ishitaa4/urlShortner.git
cd urlShortner
```

### 2.Install Dependencies
npm install

### 3.Connect to MongoDB

- You're using a local MongoDB instance via MongoDB Compass.
- Create a `.env` file in your root directory and add the following:
MONGO_URI=mongodb://127.0.0.1:27017/urlShortner


### 🔹 **Part 6: API Endpoints**

## 🔄 API Endpoints

| Method | Endpoint       | Description                 |
|--------|----------------|-----------------------------|
| POST   | `/register`     | Register a new user         |
| POST   | `/login`        | User login                  |
| POST   | `/shorten`      | Shorten a long URL          |
| GET    | `/:shortId`     | Redirect to original URL    |

> 🧪 Test all APIs using Postman or Insomnia


