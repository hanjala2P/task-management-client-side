# MERN Backend / Task Management Project

A robust and scalable backend application built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **MongoDB**.

## 🚀 Features

* **TypeScript Support:** Written in strict TypeScript for enhanced type safety.
* **Prisma ORM:** Modern database management with MongoDB Atlas, complete with custom query-logging extensions.
* **Modular Architecture:** Clean separation of concerns featuring modules, routes, controllers, services, interfaces, and utilities.
* **Global Error Handling & Async Wrapper:** Clean, concise controller logic utilizing `catchAsync` and structured error types like `TErrorSources`.
* **Standardized API Responses:** Consistent JSON response formatting via a custom `sendResponse` utility.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript
* **Database:** MongoDB (via Prisma ORM)

---

## 📂 Project Structure

```text
src/
├── app.ts
├── server.ts
├── interface/
│   └── error.ts
├── routes/
│   └── routes.ts
├── utils/
│   ├── catchAsync.ts
│   ├── sendResponse.ts
│   └── prisma.ts
└── modules/
    └── user/
        ├── user.route.ts
        ├── user.controller.ts
        └── user.service.ts
