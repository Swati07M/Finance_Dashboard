# 💰 Finance Dashboard 

A scalable backend system built using **Node.js, Express, and MongoDB** to manage financial records with **role-based access control (RBAC)** and **dashboard analytics**.

---

## 🚀 Project Overview

This backend simulates a real-world **finance dashboard system** where users can:

* Manage financial transactions (income & expenses)
* Access data based on their role (Admin, Analyst, Viewer)
* View dashboard analytics like total income, expenses, and trends

---

## 🧱 Tech Stack

* ⚙️ Node.js
* 🚀 Express.js
* 🗄️ MongoDB + Mongoose
* 🔐 JWT Authentication
* 🔒 bcrypt (Password Hashing)

---

## 👤 User Roles & Permissions

| Role       | Permissions                          |
| ---------- | ------------------------------------ |
| 👁️ Viewer | View dashboard only                  |
| 📊 Analyst | View records + analytics             |
| 🛠️ Admin  | Full access (CRUD + user management) |

---

## 🔐 Authentication

* JWT-based authentication
* Secure login system
* Token required for protected routes

---

## 💰 Financial Records Features

Each record includes:

* Amount
* Type (`income` / `expense`)
* Category (e.g., salary, rent)
* Date
* Note/Description

### ✅ Supported Operations

* Create record
* View records
* Update record
* Delete record
* Filter by type/category
* Pagination support

---

## 📊 Dashboard APIs

* Total Income
* Total Expenses
* Net Balance
* Category-wise totals
* Monthly trends
* Recent transactions

---

## 👨‍💼 Admin Features

* View all users
* Update user roles
* Active/Inctive users
* Delete users

---

## 🛡️ Access Control (RBAC)

* Middleware-based role validation
* Secure API access per role
* Prevent unauthorized actions

---

## ⚠️ Validation & Error Handling

* Required field validation
* Proper HTTP status codes
* Clear error messages
* Safe API responses

---

## 📁 Project Structure

```
src/
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
└── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Swati07M/Finance_Dashboard.git
<<<<<<< HEAD
cd Finance_Dashboard\Backend
=======
cd Finance_Dashboard-Backend


### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
npm run dev
```

---

## 🧪 API Testing

Use tools like **Postman** to test APIs:
📮 Postman API Collection

## 🔗 API Endpoints Overview

### 🔐 Auth APIs
Method	Endpoint	Description
POST-	/api/auth/register	`Register new user`
POST-	/api/auth/login	    `Login user`

### 💰 Record APIs
Method	Endpoint	Description
POST-	/api/records	`Create record`
GET-	/api/records	`Get all records`
PUT-	/api/records/:id	`Update record`
DELETE-	/api/records/:id	`Delete record`

### 📊 Dashboard API
Method	Endpoint	Description
GET-	/api/dashboard	`Get dashboard summary`

### 👤 User APIs (Admin)
Method	Endpoint	Description
GET-	/api/users	`Get all users`
PUT-	/api/users/:id/role	`Update role`
PATCH-	/api/users/:id/status	`Toggle active/inactive`
DELETE-	/api/users/:id	`Delete user`


## 🔑 Authorization

After login, add token in Postman headers:
Authorization: Bearer YOUR_TOKEN

Use Postman Environment Variables:

{{base_url}} = http://localhost:5000/api
{{token}} = your JWT token

### 🔑 Steps:

1. Register user
2. Login → Get token
3. Add token in headers:
```
Authorization: Bearer YOUR_TOKEN
```
---

## 🎯 Key Highlights

* 🔐 Secure authentication system
* 🛡️ Role-based access control
* 📊 Real-time financial analytics
* ⚡ Clean and scalable architecture
* 🧪 Easy API testing with Postman

---

## 🚀 Future Enhancements

* Frontend dashboard (React)
* API documentation 
* Unit & integration testing
* Real-time updates

---

## 💡 Conclusion

This project demonstrates **real-world backend development practices** including authentication, authorization, data aggregation, and scalable API design.

---

## 👩‍💻 Author

**Swati Mahajan**
Github Profile- `https://github.com/Swati07M`
linkedIn- `https://www.linkedin.com/in/swati-mahajan-0170b423a/`

---

⭐ If you like this project, give it a star!
