// Service Data
const services = [
    { id: 1, name: 'Dry Cleaning', price: 200 },
    { id: 2, name: 'Wash & Fold', price: 100 },
    { id: 3, name: 'Ironing', price: 30 },
    { id: 4, name: 'Stain Removal', price: 150 },
    { id: 5, name: 'Leather Care', price: 500 },
    { id: 6, name: 'Wedding Dress', price: 1500 }
];

// State
let cart = [];

// DOM Elements
const serviceListEl = document.getElementById('service-list');
const cartItemsEl = document.getElementById('cart-items');
const totalAmountEl = document.getElementById('total-amount');
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

// Initialize
function init() {
    renderServices();
}

// Render Services List
function renderServices() {
    serviceListEl.innerHTML = services.map(service => {
        const inCart = cart.some(item => item.id === service.id);
        // show only one button that toggles based on presence in cart
        return `
        <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
            <div>
                <h4 class="font-bold text-gray-800">${service.name}</h4>
                <p class="text-gray-500">₹${service.price}</p>
            </div>
            <div class="space-x-2">
                ${inCart
                    ? `<button onclick="removeFromCart(${service.id})" class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">Remove</button>`
                    : `<button onclick="addToCart(${service.id})" class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition">Add</button>`
                }
            </div>
        </div>
    `;
    }).join('');
}

// Add Item to Cart
window.addToCart = function(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (service && !cart.some(item => item.id === serviceId)) {
        cart.push(service);
        renderCart();
        renderServices(); // update buttons
    }
};

// Remove Item from Cart
window.removeFromCart = function(serviceId) {
    const index = cart.findIndex(item => item.id === serviceId);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
        renderServices(); // update buttons
    }
};

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <tr>
                <td colspan="4" class="py-4 text-center text-gray-500">No items added yet.</td>
            </tr>
        `;
    } else {
        cartItemsEl.innerHTML = cart.map((item, index) => `
            <tr class="border-b last:border-0 border-gray-100">
                <td class="py-2 text-gray-500">${index + 1}</td>
                <td class="py-2 font-medium">${item.name}</td>
                <td class="py-2 text-right">₹${item.price}</td>
                <td class="py-2 text-right">
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">
                        &times;
                    </button> // This removes one instance, logic matches requirements to have add/remove buttons.
                </td>
            </tr>
        `).join('');
    }
    updateTotal();
}

// Update Total Amount
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmountEl.textContent = `₹${total}`;
}

// Handle Form Submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert('Please add at least one service to your cart.');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
        // If you want the email to be sent directly to the user who filled the form,
        // set `to_email` dynamically to the `email` variable and configure your
        // EmailJS template to use that field as the recipient address.
        // Note: EmailJS free plan may restrict sending to arbitrary addresses;
        // you may need to set a fixed destination (e.g. your admin inbox) and
        // use `user_email` in the template body for confirmation messages.
        to_name: 'Admin', // primary recipient name (business owner or placeholder)
        to_email: email, // using the address provided by the user
        from_name: name,
        user_email: email,           // included in template variables
        user_phone: phone,
        services_list: cart.map(item => `${item.name} (₹${item.price})`).join(', '),
        total_amount: `₹${total}`,
    };

    // Send email using EmailJS
    // make sure you've created a service (e.g. 'service_xxx') and template (e.g. 'template_yyy')
    // in your EmailJS dashboard and replaced the placeholders below.
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            formMessage.textContent = 'Thank you for booking the service! A confirmation email has been sent to your address.';
            formMessage.classList.remove('hidden');
            bookingForm.reset();
            cart = [];
            renderCart();
            renderServices();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('There was an error sending your confirmation email. Please try again or contact support.');
        });
});

// Run Init
init();
