# 🧠 ThinkBoard — MERN Stack Notes App

A full-stack notes application built with the MERN stack. Capture your ideas, organize your thoughts, and manage your notes with a clean and responsive UI.

🌐 **Live Demo:** [https://mern-thinkboard-mwsg.onrender.com](https://mern-thinkboard-mwsg.onrender.com)

📂 **GitHub:** [https://github.com/gagan191104/mern-thinkboard](https://github.com/gagan191104/mern-thinkboard)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

---

## 📖 About the Project

ThinkBoard is a full-stack MERN note-taking application where users can create, update, and delete notes instantly. It features a beautiful UI, smooth notifications, and production-grade rate limiting — making it a real-world ready application.

---

## ✨ Features

- 📝 **Create Notes** — Add notes with a title and content
- ✏️ **Edit Notes** — Update existing notes instantly
- 🗑️ **Delete Notes** — Remove notes you no longer need
- 🔥 **Toast Notifications** — Smooth feedback using React Hot Toast
- 🚦 **Rate Limiting** — Production-grade rate limiting with Upstash Redis
- 📱 **Responsive Design** — Works beautifully on all screen sizes
- 🎨 **Modern UI** — Styled with Tailwind CSS and DaisyUI

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS, DaisyUI, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose, MongoDB Atlas |
| **Rate Limiting** | Upstash Redis |
| **Notifications** | React Hot Toast |
| **Deployment** | Render (full stack) |

---

## 📁 Project Structure

```
mern-thinkboard/
├── backend/
│   └── src/
│       ├── config/
│       │   ├── db.js           # MongoDB connection
│       │   └── upstash.js      # Redis rate limiter config
│       ├── controllers/
│       │   └── notesController.js  # CRUD logic
│       ├── middleware/
│       │   └── rateLimiter.js  # Rate limit middleware
│       ├── models/
│       │   └── Note.js         # Note model (title + content)
│       ├── routes/
│       │   └── notesRoutes.js  # /api/notes REST routes
│       └── server.js           # Entry point
│   └── package.json
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── NoteCard.jsx
│       │   ├── NotesNotFound.jsx
│       │   └── RateLimitedUI.jsx
│       ├── lib/
│       │   ├── axios.js        # Base URL (dev/prod auto switch)
│       │   └── utils.js        # Helper functions
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── CreatePage.jsx
│       │   └── NoteDetailPage.jsx
│       └── main.jsx
│   ├── index.html
│   └── package.json
│
├── .github/workflows/          # CI/CD workflows
├── .gitignore
├── package.json                # Root package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/gagan191104/mern-thinkboard.git
cd mern-thinkboard
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3. **Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables:**

Create a `.env` file inside the `backend/` folder:
```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
NODE_ENV=development
```

5. **Run the backend:**
```bash
cd backend
npm run dev
```

6. **Run the frontend (in a new terminal):**
```bash
cd frontend
npm run dev
```

7. **Open in browser:**
```
http://localhost:5173
```

---

## 🔐 Environment Variables

### `backend/.env`

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token |
| `PORT` | Server port (default: 5001) |
| `NODE_ENV` | Environment (`development` or `production`) |

> 💡 Get your free Upstash Redis credentials at [upstash.com](https://upstash.com)

---

## 📜 Available Scripts

### Backend (`backend/`)

| Script | Description |
|---|---|
| `npm run dev` | Start server with nodemon (development) |
| `npm start` | Start server with node (production) |

### Frontend (`frontend/`)

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Root

| Script | Description |
|---|---|
| `npm run build` | Build frontend for production |
| `npm start` | Start backend server |

---

## 🔌 API Endpoints

### Notes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check if API is running |

> ⚠️ Rate limiting is applied — 100 requests per 60 seconds globally via Upstash Redis.

---

## ☁️ Deployment

This project is deployed as a **single service on Render** where the Express backend serves the React frontend build.

### Steps to Deploy on Render:

1. Push code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect your GitHub repository
4. Use these settings:

| Setting | Value |
|---|---|
| **Root Directory** | *(leave blank)* |
| **Build Command** | `npm run build && cd backend && npm install` |
| **Start Command** | `cd backend && node src/server.js` |

5. Add all environment variables from `backend/.env`
6. Click **Deploy**

### Auto-Deploy

Every `git push` to the `main` branch automatically triggers a new deployment on Render.

---

## 👨‍💻 Author

**Gagan CV**
- GitHub: [@gagan191104](https://github.com/gagan191104)
- Live Project: [mern-thinkboard-mwsg.onrender.com](https://mern-thinkboard-mwsg.onrender.com)

---

## 📄 License

This project is licensed under the MIT License.
