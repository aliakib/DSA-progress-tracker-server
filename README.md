### DSA Progress Tracker – Backend

A Node.js + Express API for authentication, DSA topics, and user progress tracking.

✨ Features

JWT authentication

Protected APIs

Topic & problem management

User-specific progress tracking

Redis caching for read-heavy endpoints

Clean controller–service architecture

Centralized error handling & logging

🛠 Tech Stack

Node.js + Express

MongoDB + Mongoose

Redis (cache-aside pattern)

JWT

Joi validation

Winston logger

🧠 Design Decisions

Progress status is derived, not stored redundantly

Redis used only for caching topics

User auth validated via backend (/auth/me)

Clean separation of concerns

▶️ Run Backend
npm install
npm run dev

🌱 Seed Data
npm run seed

🌐 Env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
REDIS_URL=redis://localhost:6379