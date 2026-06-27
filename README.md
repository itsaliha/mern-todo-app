# MERN To-Do Application

A full-stack task management application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application enables users to efficiently create, update, complete, and delete tasks through a clean and responsive interface.

---

## Features

* Create new tasks
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Responsive user interface
* RESTful API for task management
* Persistent data storage using MongoDB

---

## Tech Stack

### Frontend

* React.js
* CSS3
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* npm

---

## Project Structure

```text
TODOLIST
├── Server
│   ├── Models
│   ├── package.json
│   └── index.js
│
└── todolist
    ├── src
    ├── public
    ├── package.json
    └── ...
```


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/itsaliha/mern-todo-app.git
```

### 2. Navigate to the project

```bash
cd mern-todo-app
```

### 3. Install dependencies

Frontend

```bash
cd todolist
npm install
```

Backend

```bash
cd ../Server
npm install
```

### 4. Configure MongoDB

Create a `.env` file inside the `Server` folder and add your MongoDB connection string.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the backend

```bash
npm start
```

### 6. Start the frontend

```bash
cd ../todolist
npm run dev
```

---

## Future Improvements

* User authentication
* Task categories
* Due dates and reminders
* Drag-and-drop task organization
* Search and filtering

---

## Author

**Aliha Qaiser**


