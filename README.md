#  CampusBuzz

> A modern web application that helps universities centralize, manage, and promote campus events through a seamless and intuitive experience.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![.NET](https://img.shields.io/badge/.NET%208-512BD4?style=flat&logo=dotnet&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=flat&logo=microsoftsqlserver&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Entity Framework Core](https://img.shields.io/badge/Entity%20Framework%20Core-512BD4?style=flat)
![xUnit](https://img.shields.io/badge/xUnit-5C2D91?style=flat)

---

##  Overview

CampusBuzz is a full-stack web application that streamlines the way universities manage and share campus events. Rather than relying on scattered communication channels such as posters or messaging groups, CampusBuzz provides a centralized platform where students can discover upcoming events and administrators can efficiently manage event listings.

The application is built with Angular and a .NET Web API, uses SQL Server for persistent data storage, and leverages Docker to provide a consistent and portable database environment for development.

---

##  Features

-  Browse all upcoming campus events
-  Create new event listings
-  Edit existing events
-  Delete events
-  Persistent SQL Server database
-  RESTful API integration
-  Unit testing with xUnit
-  Responsive user interface

---

##  Tech Stack

| Frontend | Backend | Database | Testing |
|-----------|----------|----------|---------|
| Angular | .NET 8 Web API | SQL Server | xUnit |
| TypeScript | Entity Framework Core | | |

---

##  Architecture

```text
Angular Frontend
        │
        ▼
REST API (.NET 8)
        │
        ▼
Entity Framework Core
        │
        ▼
SQL Server
```

---

##  Screenshots




##  Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/CampusBuzz.git
```

### Backend

```bash
cd Backend
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd Frontend
npm install
ng serve
```

Visit:

```
http://localhost:4200
```

---

## Project Structure

```
CampusBuzz
│
├── Frontend
│   ├── Angular Components
│   ├── Services
│   ├── Models
│   └── Routing
│
├── Backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Services
│   
|
│___Unit Tests
|
└── README.md
```

---

## Testing

The backend includes unit tests covering:

- Retrieve all events
- Retrieve an event by ID

The tests verify:

-  Successful HTTP responses
-  Correct API behaviour
-  Non-null returned objects

---

## Skills Demonstrated

- Full-Stack Development
- REST API Design
- Angular Routing
- CRUD Operations
- Entity Framework Core
- SQL Server Integration
- Responsive UI Design
- Unit Testing
- Clean Code Principles


---

##  Author

**Lerato Sibanda**

I'm passionate about building scalable web applications and continuously expanding my skills in modern software development.

- LinkedIn: www.linkedin.com/in/lerato-sibanda-247730387

---
