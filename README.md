# Assignment-04

# Revitalize Laundry Services Web App

A modern **Laundry Service Booking Web Application** built using **HTML, Tailwind CSS, and JavaScript**.
The application allows users to explore laundry services, add services to a cart, book appointments, and receive confirmation emails using **EmailJS**.

---

# 📌 Project Overview

Revitalize is a responsive web application designed to simplify laundry service booking.
Users can browse available laundry services, add them to a cart, view total cost, and submit booking details. After booking, the system sends a confirmation email using EmailJS.

This project demonstrates practical implementation of:

* DOM Manipulation
* Dynamic UI Rendering
* Cart Management Logic
* Email Integration
* Responsive UI with Tailwind CSS

---

# 🚀 Features

### 1. Responsive Navigation Bar

* Sticky navigation bar
* Smooth scrolling between sections
* Mobile responsive layout

### 2. Hero Section

* Attractive landing section
* Call-to-action button for booking
* Animated washing machine illustration

### 3. Services Section

* Displays available laundry services
* Dynamically generated using JavaScript
* Services include:

  * Dry Cleaning
  * Wash & Fold
  * Ironing
  * Stain Removal
  * Leather Care
  * Wedding Dress Cleaning

### 4. Cart System

Users can:

* Add services to cart
* Remove services from cart
* View selected services
* See total cost dynamically updated

### 5. Booking Form

Users must enter:

* Full Name
* Email Address
* Phone Number

Validation ensures the cart is not empty before booking.

### 6. Email Confirmation (EmailJS)

When the user submits the form:

* Booking details are sent using EmailJS
* Includes:

  * Customer name
  * Email
  * Phone
  * Selected services
  * Total amount

### 7. Newsletter Subscription

Users can subscribe to receive updates via email.

### 8. Informational Sections

Includes:

* Why Choose Us
* Service Achievements
* Contact Information
* Social Media Links

---

# 🛠 Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| HTML5        | Structure of the website      |
| Tailwind CSS | Styling and responsive design |
| JavaScript   | Dynamic functionality         |
| EmailJS      | Sending confirmation emails   |
| Google Fonts | Typography                    |

---

# 📂 Project Structure

```
revitalize-laundry-app
│
├── index.html        # Main HTML page
├── style.css         # Custom styles and animations
├── script.js         # Application logic and EmailJS integration
├── washing_machine.jpg  # Hero section illustration
└── README.md         # Project documentation
```

---

# ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/revitalize-laundry-app.git
```

### 2. Navigate to Project Folder

```bash
cd revitalize-laundry-app
```

### 3. Open in Browser

Simply open:

```
index.html
```

or use **Live Server in VS Code**.

---

# 📧 EmailJS Configuration

To enable email confirmation:

### Step 1: Create EmailJS Account

Visit

https://www.emailjs.com/

### Step 2: Create a Service

Create an email service (Gmail or Outlook).

### Step 3: Create an Email Template

Include these template variables:

```
to_name
to_email
from_name
user_email
user_phone
services_list
total_amount
```

### Step 4: Update `script.js`

Replace the values with your own:

```javascript
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

---

# 🧠 How the Application Works

1. Services are stored in a **JavaScript array**.
2. Services are dynamically rendered on page load.
3. When a user clicks **Add**, the service is added to the cart array.
4. Cart updates dynamically and recalculates total price.
5. When booking form is submitted:

   * Form validation checks cart items.
   * Booking data is sent to EmailJS.
   * Confirmation message is shown.

---

# 📱 Responsive Design

The UI is fully responsive using **Tailwind CSS grid and flex utilities**.

Supports:

* Desktop
* Tablet
* Mobile devices

---

# ✨ Future Improvements

Possible enhancements:

* User login system
* Payment gateway integration
* Order tracking system
* Admin dashboard
* Database integration (Firebase / MongoDB)
* Service quantity selection
* Real pickup scheduling

---

# 👨‍💻 Author

Developed as part of a **Web Development Assignment Project**.

Author: **Kushal Rao**

---

# 📜 License

This project is open-source and available for educational purposes.

---
