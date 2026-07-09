# Enterprise DevOps Platform

## Project Overview

This project demonstrates a complete CI/CD pipeline for a Dockerized Node.js and MySQL application using Jenkins, Docker, and GitHub.

Whenever code is pushed to GitHub, Jenkins automatically detects the changes, builds a new Docker image, and deploys the latest version of the application using Docker Compose.

The project was created to practice real-world DevOps concepts such as Continuous Integration (CI), Continuous Deployment (CD), containerization, and automated deployments.

---

## Technologies Used

- Ubuntu Linux
- Git
- GitHub
- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose
- Jenkins (Freestyle Job)

---

## Project Structure

```text
enterprise-devops-platform
│
├── applications
│   └── node-service
│       ├── src
│       │   ├── public
│       │   ├── routes
│       │   ├── db.js
│       │   └── server.js
│       ├── Dockerfile
│       ├── package.json
│       └── package-lock.json
│
├── docker-compose.yml
└── README.md
```

---

## Project Architecture

```text
Developer
    │
 git push
    │
    ▼
GitHub Repository
    │
 GitHub Webhook
    ▼
Jenkins Freestyle Job
    │
Build Docker Image
    ▼
Docker Compose
    │
 ├── Node.js Application
 └── MySQL Database
```

---

## Features

- Dockerized Node.js application
- Express.js REST API
- MySQL database integration
- CRUD Operations (Create, Read, Update, Delete)
- Automatic Docker image build
- Automatic deployment using Docker Compose
- Automatic Jenkins build after Git push
- Employee Management System
- Version API for deployment verification

---

## REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| POST | `/employees` | Add a new employee |
| PUT | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |
| GET | `/version` | Check deployed application version |

---

## How to Run

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Go to the Project Directory

```bash
cd enterprise-devops-platform
```

### 3. Build and Start the Containers

```bash
docker compose up -d --build
```

### 4. Open the Application

```
http://localhost:5000
```

### 5. Check Application Version

```
http://localhost:5000/version
```

---

## CI/CD Workflow

```text
Developer

      │
      ▼

Git Push

      │
      ▼

GitHub Repository

      │
      ▼

GitHub Webhook

      │
      ▼

Jenkins Freestyle Job

      │
      ▼

Build Docker Image

      │
      ▼

Docker Compose Deployment

      │
      ▼

Updated Application Running
```

---

## Sample API Response

### GET `/version`

```json
{
  "application": "Enterprise DevOps Platform",
  "version": "2.0",
  "deployedBy": "Jenkins",
  "deployedAt": "2026-07-03T14:30:00.000Z",
  "author": "Krishna"
}
```

---

## Future Improvements

- Jenkins Pipeline
- Nginx Reverse Proxy
- Prometheus Monitoring
- Grafana Dashboards
- Kubernetes Deployment
- Cloud Deployment (AWS/Azure/GCP)
- Java Spring Boot Service
- PHP Microservice

---

## Author

**Krishna Parajuli**

DevOps Practice Project using Docker, Jenkins, Node.js, Express.js, and MySQL.
