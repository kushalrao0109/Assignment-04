# Assignment-04
🧺 Revitalize – Expert Laundry Service Website

🚀 A modern, responsive Laundry Service Booking Web Application built using HTML, Tailwind CSS, and JavaScript with dynamic cart functionality and EmailJS integration.

📌 Project Overview

Revitalize is a fully responsive laundry service website that allows users to:

✔️ Browse available services
✔️ Add/Remove services from cart
✔️ View total amount dynamically
✔️ Submit booking details
✔️ Send booking data via EmailJS

The project demonstrates frontend development skills, DOM manipulation, state management, and third-party API integration.

🎯 Features

✨ Modern UI using Tailwind CSS
🛒 Dynamic Cart System
💰 Real-time Total Calculation
📩 EmailJS Integration (Booking Confirmation)
📱 Fully Responsive Design
🎨 Smooth Scroll & Floating Animation
🧾 Interactive Booking Form
⚡ Clean Code Structure

🛠️ Tech Stack
Technology	Purpose
🏗️ HTML5	Structure
🎨 Tailwind CSS	Styling
🧠 JavaScript (ES6)	Logic & DOM Manipulation
📧 EmailJS	Email Sending Service
🌐 Google Fonts (Inter)	Typography
📂 Project Structure
📁 Revitalize
│
├── index.html        # Main HTML File
├── style.css         # Custom Animations
├── script.js         # Core Logic & Cart System
├── washing_machine.jpg  # Hero Image
└── README.md         # Project Documentation
🧠 How the System Works
🛍️ Service Rendering

Services are stored in a JavaScript array.

Dynamically injected into DOM using .map().

🛒 Cart Management

Uses a global cart[] array.

Add → Push to array

Remove → Splice from array

Total → Calculated using reduce()

📩 Booking Submission

User fills form.

Validates cart is not empty.

Prepares template parameters.

Sends data using EmailJS (or simulated success).

Clears cart and resets UI.

🚀 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/revitalize-laundry.git
2️⃣ Open Project

Just open:

index.html

in your browser.

📧 Enable EmailJS (Optional Production Setup)

To activate real email sending:

Go to 👉 https://www.emailjs.com

Create:

Service ID

Template ID

Public Key

Replace inside HTML:

emailjs.init('YOUR_PUBLIC_KEY');

And inside script:

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
🎨 UI Highlights

Sticky Navbar

Floating Hero Image Animation

Responsive Grid Layout

Dynamic Add/Remove Buttons

Clean Cart Table Layout

Smooth Scrolling

🔥 Sample Services Included

Dry Cleaning – ₹200

Wash & Fold – ₹100

Ironing – ₹30

Stain Removal – ₹150

Leather Care – ₹500

Wedding Dress Cleaning – ₹1500

📸 Preview

🖼️ Modern Hero Section
🛒 Interactive Booking System
📩 Clean Checkout UI
🎯 Professional Footer

💡 Future Enhancements

🔐 User Authentication (Login/Signup)

💳 Online Payment Integration (Razorpay/Stripe)

📦 Order Tracking System

📊 Admin Dashboard

🗃️ Database Integration (MongoDB / Firebase)

🧾 Order History

🏆 Learning Outcomes

This project demonstrates:

DOM Manipulation

State Management

Event Handling

Array Methods (map, reduce, find, splice)

API Integration

Responsive Web Design

👨‍💻 Author

Kushal Rao
💼 Software Developer
🚀 Passionate about AI + Full Stack Development

⭐ If You Like This Project

Give it a ⭐ on GitHub
Fork it 🍴
Improve it 🚀

🎉 Thank You for Visiting Revitalize!

Clean Clothes. Clean Code. Clean UI. 🧼✨
