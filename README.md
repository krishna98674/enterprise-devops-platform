# Enterprise DevOps Platform

## Project Overview

This project demonstrates a complete CI/CD workflow for a Dockerized Node.js application using Jenkins Freestyle jobs.

Whenever code is pushed to GitHub, Jenkins automatically detects the changes, builds a new Docker image, deploys the updated application using Docker Compose, and makes it available for testing.

This project was built to practice real-world DevOps concepts such as Continuous Integration (CI), Continuous Deployment (CD), containerization, version control, and deployment automation.

---

## Technologies Used

* Ubuntu Linux
* Git
* GitHub
* Node.js
* Express.js
* MySQL
* Docker
* Docker Compose
* Jenkins (Freestyle Job)

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
    ▼
Jenkins Freestyle Job
    │
    ▼
Docker Build
    │
    ▼
Docker Compose
    │
    ├── Node.js Application
    └── MySQL Database
```

---

## Features

* Dockerized Node.js REST API
* MySQL database integration
* Automatic Docker image build
* Automatic deployment using Docker Compose
* Automatic Jenkins build after Git push
* Employee REST API
* Version API for deployment verification

---

## API Endpoints

| Method | Endpoint         | Description                        |
| ------ | ---------------- | ---------------------------------- |
| GET    | `/employees`     | Get all employees                  |
| POST   | `/employees`     | Add a new employee                 |
| DELETE | `/employees/:id` | Delete an employee                 |
| GET    | `/version`       | Check deployed application version |

---

## How to Run

1. Clone the repository.
2. Start Docker.
3. Run:

```bash
docker compose up -d --build
```

4. Open:

```
http://localhost:5000/version
```

---

## CI/CD Workflow

1. Modify the application.
2. Commit the changes.
3. Push the code to GitHub.
4. Jenkins detects the new commit.
5. Jenkins builds a new Docker image.
6. Docker Compose deploys the latest version.
7. Verify the deployment using the `/version` endpoint.

---

## Future Improvements

* Jenkins Freestyle
* Nginx Reverse Proxy
* Prometheus Monitoring
* Grafana Dashboards
* Cloud Deployment
* Java Spring Boot Service
* PHP Service
