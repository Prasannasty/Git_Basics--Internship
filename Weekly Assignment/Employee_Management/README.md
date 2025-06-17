#  Employee Management System

A simple full-stack web application to manage employees. You can add, view, edit, and delete employee records easily.


## 📽 Demo Video

🎬 [Click here to watch the demo](demo/Employee%20Management.mp4)


##  Tech Stack

- **Frontend:** React (with TypeScript), React Router DOM, React Toastify, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)

---

## 📁 Folder Structure
Employee_Management/
|--- frontend/
|    |--- public/
|    |--- src/
|    |    |--- components/
|    |       |--- EmployeeForm.tsx 
             |--- EmployeeTable.tsx
     |--- App.tsx
     |--- index.tsx
 |--- backend/
 |    |--- models/
 |    |--- routes/
 |    |--- server.ts
 |--- package.json
 |--- README.md


 ### .env file
 PORT=5000
MONGO_URI=mongodb://localhost:27017/employee_db

###  Running the App
**Backend**:
cd backend
npm run dev

**Frontend**:
cd frontend
npm install
npm start

**URL**:
Frontend: http://localhost:3000
Backend: http://localhost:5000

## API ENDPOINTS:
| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/employees`     | Fetch all employees |
| POST   | `/employees`     | Add new employee    |
| PUT    | `/employees/:id` | Update an employee  |
| DELETE | `/employees/:id` | Delete an employee  |
