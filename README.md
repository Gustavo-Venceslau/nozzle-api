# Nozzle API

A platform designed to connect autonomous workers with short-term jobs (**bicos**), focusing on usability, performance, and future support for workers’ rights. This repository documents the **API and system design** following best practices for modern backend services.

---

## 📌 Overview

The **Bico Platform** allows users to:

- Register and authenticate accounts
- Create and manage personal profiles
- Create, manage, and participate in **bicos** (short-term jobs)
- Send and manage proposals for open bicos
- View only their own created and worked bicos

The system is built with scalability, performance, and clean architecture in mind, targeting mobile-first users.

---

## 🧩 Core Concepts

- **User**: An authenticated account that owns data and actions.
- **Profile**: Personal and professional information linked to a user.
- **Bico**: A short-term job created by a user.
- **Proposal**: An offer made by a user to participate in an open bico.

---

## ✅ Functional Requirements

- An authenticated **user** can create, edit, and delete **bicos** they own.
- An authenticated user can edit or delete their own account.
- Users can register and log in.
- An authenticated user can fetch only the bicos they created or worked on.
- An authenticated user can submit a **proposal** to participate in an open bico.
- The owner of a bico can accept or reject one or more proposals while the bico is open.
- The bico owner can view all proposals related to their bico.
- An authenticated user can edit or delete their **profile**.
- A user must be able to create a profile during registration.

---

## ⚙️ Non-Functional Requirements

- High performance and scalability
- Authentication and authorization using **RBAC (Role-Based Access Control)**
- Minimalist, clear, and intuitive UI
- Backend:
  - **Node.js**
  - **TypeScript**
  - **Fastify**
- Frontend (Mobile):
  - **React Native**
  - **Expo**
- Deployment:
  - Docker containers
  - AWS infrastructure
- Database:
  - To be defined during development
  - Likely **PostgreSQL** or **MongoDB**

---

## 🔐 Authentication & Authorization

- All protected endpoints require authentication.
- Authorization is enforced via RBAC.
- Users can only access or modify resources they own.

---

## 🌐 API Endpoints

### User

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/user/:id` | Get user details |
| GET | `/user/:id/bicos` | Get bicos created or worked on by the user |
| POST | `/user` | Create a new user |
| UPDATE | `/user/:id` | Update user data |
| DELETE | `/user/:id` | Delete user account |

---

### Profile

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/profile` | Get authenticated user profile |
| POST | `/profile` | Create user profile |
| UPDATE | `/profile` | Update user profile |

---

### Bico

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/bico/:id` | Get a bico by ID |
| GET | `/bicos?filters…` | List bicos with optional filters |
| POST | `/bico` | Create a new bico |
| UPDATE | `/bico/:id` | Update an existing bico |
| DELETE | `/bico/:id` | Delete a bico |

---

## 🧠 Possible Future Features

- Simple AI-based recommendation system for:
  - Matching workers to bicos
  - Suggesting bicos to users
- Platform-first approach focused on **guaranteeing labor rights** for autonomous workers
- Custom-built recommendation algorithms for:
  - Worker-to-job matching
  - Job discovery personalization

---

## 🚀 Deployment Strategy

- Dockerized services
- Cloud deployment on AWS
- Designed to support horizontal scaling

---

## 📈 Performance & Quality

- Fastify chosen for high throughput and low overhead
- TypeScript for type safety and maintainability
- Clean separation of concerns for long-term scalability

---

## 📄 License

This project is under development. License details will be defined in future iterations.

---

## 🤝 Contribution

Contributions, ideas, and discussions are welcome once the repository is open for collaboration.

---

**Bico Platform** — Connecting people to work, with fairness and efficiency.
