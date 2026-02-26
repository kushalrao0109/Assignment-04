# Assignment-04

# 🧺 Revitalize Laundry Services Website

Welcome to **Revitalize** – a modern, responsive laundry service booking website built using **HTML, Tailwind CSS, and JavaScript**.  
Users can browse services, add them to a cart, calculate totals, and book services with **email confirmation using EmailJS** 📧

---

## ✨ Features
✅ Modern responsive UI using Tailwind CSS  
✅ Service selection with Add / Remove functionality  
✅ Dynamic cart with total price calculation 💰  
✅ Booking form with validation  
✅ Email confirmation using EmailJS 📧  
✅ Smooth scrolling and animations  
✅ Mobile-friendly design 📱  
✅ Clean and modular code structure  

---

## 🖥️ Tech Stack
| Technology | Purpose |
|-----------|---------|
| 🌐 HTML5 | Structure |
| 🎨 Tailwind CSS | Styling & responsive design |
| ⚡ JavaScript (Vanilla) | Logic & interactivity |
| 📧 EmailJS | Sending booking confirmation emails |
| 🔤 Google Fonts | Typography |

---

## 📂 Project Structure
revitalize-laundry/
│
├── index.html # Main website file
├── style.css # Custom animations and styles
├── script.js # Cart logic and EmailJS integration
├── washing_machine.jpg
└── README.md


---

## 🚀 How It Works

### 1️⃣ Browse Services
Users can view available services such as:
- Dry Cleaning
- Wash & Fold
- Ironing
- Stain Removal
- Leather Care
- Wedding Dress Cleaning

Click **Add** ➕ to include in cart.

---

### 2️⃣ Manage Cart
Users can:
- Add services
- Remove services ❌
- View total amount automatically calculated 💰

---

### 3️⃣ Book Service
Users fill:
- 👤 Name  
- 📧 Email  
- 📱 Phone  

Click **Book Now**

Email confirmation will be sent via EmailJS.

---

## 📧 EmailJS Setup (IMPORTANT)

Follow these steps:

### Step 1: Create account
👉 https://www.emailjs.com

### Step 2: Create Email Service
Dashboard → Email Services → Add Service

Example ID:

service_abc123


---

### Step 3: Create Email Template
Example Template Variables:
to_name
to_email
from_name
user_email
user_phone
services_list
total_amount


Example template:


Hello,

New booking received!

Name: {{from_name}}
Email: {{user_email}}
Phone: {{user_phone}}

Services:
{{services_list}}

Total:
{{total_amount}}


Template ID example:

template_xyz456


---

### Step 4: Get Public Key
Dashboard → Integration → API Keys

Example:

user_abcd1234


---

### Step 5: Replace in code
In **index.html**

```js
emailjs.init("YOUR_PUBLIC_KEY");

In script.js

emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",templateParams)
▶️ How to Run Project
Option 1 — Simple

Just open:

index.html

in your browser 🌐

Option 2 — VS Code Live Server (Recommended)

Install extension:

Live Server

Right click → Open with Live Server

📱 Responsive Design

Works on:
💻 Desktop
📱 Mobile
📟 Tablet

🎯 Future Improvements
🔹 Online payment integration
🔹 User login system
🔹 Order tracking
🔹 Admin dashboard
🔹 Database integration

🧑‍💻 Author
Developed by Revitalize Team

📜 License
Free to use for learning and academic purposes.

⭐ If you like this project
Give it a star ⭐ and improve it!
