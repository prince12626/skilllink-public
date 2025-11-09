# **SkillLink**

## **Problem Statement**

People struggle to find skilled, affordable workers for everyday services like plumbing and electrical repairs. Even when found, service costs are often inflated compared to local freelancers.

---

## **Solution**

SkillLink is a web app that connects **local freelancers** directly with **customers** seeking daily life services.
Freelancers can list their services, set prices, define time slots, and manage bookings via a dashboard.
Customers can browse, view, and hire nearby freelancers seamlessly.

---

## **Competition**

* Urban Company
* HouseJoy
* TaskRabbit

---

## **USP**

* Focused on **local freelancers**
* **Affordable pricing**
* **Empowers freelancers directly**

---

## **Integrations**

* **MongoDB Atlas** – Cloud database
* **Auth0** – Authentication
* **Gemini** – AI integration

---

## **Technical Overview**

### **Backend**

**Stack:** Node.js, Express.js, MongoDB, Auth0

**Endpoints:**

```
GET    /services          → Fetch all services
GET    /services/:id      → Get service by ID
POST   /services          → Add new service (Freelancer only)
PUT    /services/:id      → Update service (Freelancer only)
DELETE /services/:id      → Delete service (Freelancer only)

POST   /auth/register     → Register new user/freelancer
POST   /auth/login        → Login user/freelancer
GET    /freelancer/dashboard → View own listed services
```

### **Directory Structure**

```
SkillLink/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── freelancer.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── service.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── service.controller.js
│   └── middleware/
│       └── auth.middleware.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ServiceCard.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Dashboard.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## **Future Scope**

* AI-based matching system
* Real-time chat between freelancers and customers
* Integrated booking and payments
* Subscriptions/Memberships, Digital Currency and many more engagement factors.

---
