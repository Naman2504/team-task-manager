Team Task Manager

A full-stack Project & Task Management System with role-based access control, built for efficient team collaboration, task tracking, and project organization.

Features
🔐 Authentication & Security
Secure Signup / Login
JWT-based authentication
Role-based access control (Admin / Member)

🏗️ Project Management
Create & manage projects
Assign team members to projects
Track project progress

📌 Task Management
Create, assign, and update tasks
Task status tracking:
🟡 To Do
🔵 In Progress
🟢 Completed
Deadline management

📊 Dashboard
Overview of all tasks
Project progress tracking
Overdue task highlights



👥 User Roles
👑 Admin
Create & manage projects
Assign tasks to users
View all team activity
Manage users & workload

👤 Member
View assigned projects
Update task status
Track personal progress

🏗️ System Architecture
Frontend (React)
     ↓
REST APIs (Spring Boot)
     ↓
PostgreSQL Database
     ↓
JWT Authentication Layer

🗄️ Database Design

Core Entities:

User
Role
Project
Task

Relationships:

One User → Many Tasks
One Project → Many Tasks
Role-based permissions control access


⚙️ Local Setup
📦 Clone Repository
git clone https://github.com/Naman2504/team-task-manager.git
cd team-task-manager

🖥️ Backend Setup (Spring Boot
cd backend

Configure Database
spring.datasource.url=jdbc:postgresql://localhost:5432/taskmanager
spring.datasource.username=postgres
spring.datasource.password=1234

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=xdxxryytydtukdryxtzrxgcfgzezerdtyctytyseryz

Run Server
mvn spring-boot:run

Backend runs at:
http://localhost:8081

💻 Frontend Setup (React)
cd frontend
npm install
npm start

🔌 API Overview
Auth
POST /api/auth/register
POST /api/auth/login
Projects
GET /api/projects
POST /api/projects
PUT /api/projects/{id}
DELETE /api/projects/{id}
Tasks
GET /api/tasks
POST /api/tasks
PUT /api/tasks/{id}
DELETE /api/tasks/{id}


🚀 Deployment
Backend
Hosted on Railway
PostgreSQL integrated via Railway plugin
Environment variables configured securely
Frontend
Deployed on Vercel / Netlify
📈 Future Enhancements
🔔 Real-time notifications (WebSockets)
📊 Advanced analytics dashboard
📁 File attachments in tasks
📅 Calendar view for deadlines
🧠 AI-based task prioritization
👨‍💻 Author

Naman Bansal

GitHub: (https://github.com/Naman2504)
LinkedIn: (https://www.linkedin.com/in/namanbansal25/)
📜 License

This project is licensed under the MIT License.
