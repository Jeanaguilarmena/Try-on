# 🧠 AI Try-On Platform

### Virtual Garment Fitting – End-to-End Full Stack Demo

> Developed by **Jean Aguilar Mena**

---

## 📌 Overview

AI Try-On Platform is a full-stack web application that simulates a virtual garment fitting experience.

This project demonstrates a complete end-to-end architecture including authentication, image management, backend-controlled database access, and AI-ready infrastructure.

⚠️ **Important:**  
The AI garment application is currently mocked. The system returns a predefined image instead of calling a real AI model. However, the architecture is fully prepared for seamless integration with an external AI service (e.g., Nano Banana or similar image generation APIs) without requiring structural refactoring.

---

## 🚀 Core Features

### 🔐 Authentication

- Firebase Authentication
- Secure token verification using Firebase Admin SDK (backend)
- Protected REST API endpoints
- No client-side Firestore usage

---

### 👤 User Profile System

Each user has:

- Customizable profile (name & description)
- Editable profile page
- Personal image library
- Generated try-on history

---

### 🖼 Image Management

#### 1️⃣ Saved Images (Model Images)

- Uploaded from user device
- Stored locally on the backend filesystem
- Organized per user
- Reusable for future try-on generations

#### 2️⃣ Generated Images

- Mock AI-generated try-on previews
- Can be saved with structured metadata:
  - Brand
  - Description
  - Product URL
  - Creation date
- Stored in Firestore (Admin SDK)
- Displayed in user dashboard

---

### 🛍 Product Metadata System

Each generated image can store:

- Brand name
- Product description
- External store link
- Date

This allows:

- Revisiting styled outfits
- Direct product navigation
- Structured digital wardrobe concept

---

## 🔄 End-to-End Flow

1. User logs in.
2. Uploads a model image or selects from saved images.
3. Selects a garment (mock simulation).
4. Backend generates try-on result (mock response).
5. User can save the result.
6. Metadata is stored securely in Firestore (Admin SDK).
7. User can revisit and open the product link anytime.

---

## 🏗 Architecture

### 🖥 Frontend

- React
- Material UI (MUI)
- React Query
- Context API (Auth + Theme)
- Dark / Light mode support
- Apple-inspired glass UI design

---

### ⚙️ Backend

- Express.js
- REST API architecture
- Firebase Admin SDK
- Token validation middleware
- Image upload handling with Multer

---

### 🗄 Database

- Firestore (Admin SDK only)
- Server-side controlled data access
- No client SDK usage
- Fully backend-managed queries

---

### 💾 Storage

- Local server filesystem storage
- Structured image organization
- Easily replaceable with:
  - Cloud Storage
  - S3
  - CDN

---

## 🤖 AI Integration Strategy

The system is built with AI modularity in mind.

To integrate a real AI model:

1. Replace the mock generation service.
2. Send image buffers to the AI API.
3. Receive generated image URL.
4. Return structured response.

No frontend changes required.

---

## 🔒 Security Design

- Firebase ID tokens validated server-side
- Admin SDK ensures backend authority
- Protected try-on routes
- No direct database access from client

---

## 📂 Project Structure (Conceptual)

    frontend
    components
    pages
    context
    api

    backend
    routes
    services
    middleware
    config

    public/uploads

---

## 🛠 Installation

### Install Dependencies

#### Backend

```bash
Install dependencies
npm install

Start backend
npm start

Start frontend
npm run dev
```
