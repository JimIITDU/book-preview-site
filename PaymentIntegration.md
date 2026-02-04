# 💳 Payment Integration Guide

## Payment Options for Bangladesh

Since you're in Bangladesh (Dhaka), here are the best payment solutions:

---

## Option 1: bKash Payment Gateway (Best for Bangladesh) ⭐ RECOMMENDED

### Step 1: Get bKash Merchant Account
1. Visit: https://www.bkash.com/business
2. Apply for Merchant Account
3. Get approved (usually takes 3-5 business days)
4. Receive API credentials

### Step 2: Integration Methods

#### A. Simple bKash Checkout (No Backend Needed)
```html
<!-- Add this button to each book card -->
<button class="btn btn-payment" onclick="initiatebKashPayment('Class 3 Book', 500)">
    <svg class="btn-icon" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
    </svg>
    ৳500 - এখনই কিনুন
</button>
```

#### B. JavaScript Function (Add to main.js)
```javascript
// bKash Payment Integration
function initiatebKashPayment(bookName, amount) {
    // Your bKash merchant credentials
    const merchantInvoiceNumber = 'INV' + Date.now();
    
    // bKash checkout URL (you'll get this from bKash)
    const bkashURL = 'https://checkout.bkash.com/v1.2.0-beta/checkout/create';
    
    // Payment details
    const paymentData = {
        amount: amount,
        currency: 'BDT',
        intent: 'sale',
        merchantInvoiceNumber: merchantInvoiceNumber,
        productName: bookName,
        productCategory: 'Books',
        productProfile: 'general'
    };
    
    // Show loading
    showPaymentModal('বইটি কার্টে যোগ করা হচ্ছে...');
    
    // For now, show contact info (until you get bKash approval)
    setTimeout(() => {
        showContactForPayment(bookName, amount);
    }, 1000);
}

function showContactForPayment(bookName, amount) {
    const modal = document.createElement('div');
    modal.className = 'payment-modal';
    modal.innerHTML = `
        <div class="payment-modal-content">
            <button class="modal-close" onclick="this.closest('.payment-modal').remove()">×</button>
            <div class="payment-icon">💳</div>
            <h3>অর্ডার কনফার্ম করুন</h3>
            <div class="order-details">
                <p><strong>বই:</strong> ${bookName}</p>
                <p><strong>মূল্য:</strong> ৳${amount}</p>
            </div>
            <div class="payment-methods">
                <h4>পেমেন্ট মেথড:</h4>
                <button class="payment-method-btn bkash" onclick="selectPaymentMethod('bKash')">
                    <span class="method-icon">📱</span>
                    bKash
                </button>
                <button class="payment-method-btn nagad" onclick="selectPaymentMethod('Nagad')">
                    <span class="method-icon">💰</span>
                    Nagad
                </button>
                <button class="payment-method-btn rocket" onclick="selectPaymentMethod('Rocket')">
                    <span class="method-icon">🚀</span>
                    Rocket
                </button>
            </div>
            <div class="contact-for-payment">
                <p>অর্ডার কনফার্ম করতে যোগাযোগ করুন:</p>
                <a href="tel:+8801XXXXXXXXX" class="contact-btn">
                    📞 কল করুন
                </a>
                <a href="https://wa.me/8801XXXXXXXXX?text=আমি ${bookName} কিনতে চাই" class="contact-btn whatsapp">
                    📱 WhatsApp
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function selectPaymentMethod(method) {
    alert(`${method} পেমেন্ট প্রসেস শীঘ্রই যুক্ত হবে। এখনের জন্য অনুগ্রহ করে কল করুন।`);
}

function showPaymentModal(message) {
    // Simple loading modal
    const loader = document.createElement('div');
    loader.className = 'payment-loader';
    loader.innerHTML = `<div class="loader-content">${message}</div>`;
    document.body.appendChild(loader);
}
```

---

## Option 2: Nagad Payment Gateway

### Integration Steps:
1. Visit: https://nagad.com.bd/merchant/
2. Register as Merchant
3. Get API credentials
4. Similar integration to bKash

---

## Option 3: SSL Commerz (Multi-Payment Gateway) ⭐ ALSO RECOMMENDED

### Why SSL Commerz?
- Accepts: bKash, Nagad, Rocket, Cards, Mobile Banking
- Single integration for all payment methods
- Trusted by major Bangladeshi e-commerce sites

### Quick Setup:
```javascript
// Add to your HTML head
<script src="https://sandbox.sslcommerz.com/embed.min.js"></script>

// Payment button
<button onclick="sslCommerzPayment('Class 3 Book', 500)">
    ৳500 - এখনই কিনুন
</button>

// JavaScript function
function sslCommerzPayment(productName, amount) {
    const obj = {
        product_name: productName,
        product_profile: 'general',
        product_category: 'Books',
        total_amount: amount,
        currency: 'BDT',
        success_url: 'https://yoursite.com/payment-success',
        fail_url: 'https://yoursite.com/payment-failed',
        cancel_url: 'https://yoursite.com/payment-cancelled'
    };
    
    // This will open SSL Commerz payment window
    window.sslczPayment(obj);
}
```

**Get Started:**
1. Visit: https://www.sslcommerz.com/
2. Sign up for Sandbox (testing)
3. Get Store ID and Store Password
4. Start testing

---

## Option 4: Simple Manual Payment System (Start Here) ✨

This is what you can implement RIGHT NOW while waiting for merchant approvals:

### Update HTML (Add to each book card):

```html
<div class="book-actions">
    <button class="btn btn-primary preview-btn" data-pdf="class3.pdf">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
        </svg>
        একটু পড়ে দেখুন
    </button>
    
    <!-- NEW: Order Button -->
    <button class="btn btn-order" onclick="orderBook('Class 3', 500)">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </svg>
        ৳500 - অর্ডার করুন
    </button>
</div>
```

### Add CSS for new button:

```css
.btn-order {
    background: linear-gradient(135deg, #C94136 0%, #A02E24 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(201, 65, 54, 0.3);
}

.btn-order:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 65, 54, 0.4);
}
```

### Add JavaScript function:

```javascript
function orderBook(className, price) {
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="order-modal-content">
            <button class="modal-close" onclick="this.closest('.order-modal').remove()">×</button>
            <div class="order-icon">🛒</div>
            <h3>অর্ডার কনফার্ম করুন</h3>
            
            <div class="order-summary">
                <h4>অর্ডার ডিটেইলস:</h4>
                <div class="order-item">
                    <span>বই:</span>
                    <strong>Golden Student Voc@bulary - ${className}</strong>
                </div>
                <div class="order-item">
                    <span>মূল্য:</span>
                    <strong>৳${price}</strong>
                </div>
            </div>
            
            <div class="payment-options">
                <h4>পেমেন্ট অপশন:</h4>
                
                <div class="payment-method">
                    <div class="method-header">
                        <img src="data:image/svg+xml,..." alt="bKash" width="80">
                        <span>bKash</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01XXX-XXXXXX</strong></p>
                        <p>অর্ডার করতে এই নাম্বারে টাকা পাঠান, তারপর SMS করুন</p>
                    </div>
                </div>
                
                <div class="payment-method">
                    <div class="method-header">
                        <span>💰</span>
                        <span>Nagad</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01XXX-XXXXXX</strong></p>
                    </div>
                </div>
                
                <div class="payment-method">
                    <div class="method-header">
                        <span>🚀</span>
                        <span>Rocket</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01XXX-XXXXXX</strong></p>
                    </div>
                </div>
            </div>
            
            <div class="order-instructions">
                <h4>অর্ডার প্রসেস:</h4>
                <ol>
                    <li>উপরের যেকোনো নাম্বারে ৳${price} পাঠান</li>
                    <li>Transaction ID সেভ করুন</li>
                    <li>নিচের বাটনে ক্লিক করে SMS/WhatsApp করুন</li>
                    <li>আপনার ঠিকানা ও Transaction ID শেয়ার করুন</li>
                    <li>২৪ ঘন্টার মধ্যে ডেলিভারি পাবেন!</li>
                </ol>
            </div>
            
            <div class="order-actions">
                <a href="sms:+8801XXXXXXXXX?body=আমি ${className} এর বই অর্ডার করতে চাই। Transaction ID: " class="btn btn-sms">
                    📱 SMS পাঠান
                </a>
                <a href="https://wa.me/8801XXXXXXXXX?text=আমি ${className} এর বই অর্ডার করতে চাই।%0A%0ATransaction ID: %0Aঠিকানা: " class="btn btn-whatsapp">
                    💬 WhatsApp করুন
                </a>
                <a href="tel:+8801XXXXXXXXX" class="btn btn-call">
                    📞 কল করুন
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}
```

---

## Option 5: International Payments (Stripe/PayPal)

If you want international customers:

### Stripe Setup:
```html
<!-- Add Stripe script -->
<script src="https://js.stripe.com/v3/"></script>

<button onclick="stripePayment(500)">Pay with Card</button>

<script>
const stripe = Stripe('your_publishable_key');

function stripePayment(amount) {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount: amount})
    })
    .then(res => res.json())
    .then(session => {
        return stripe.redirectToCheckout({sessionId: session.id});
    });
}
</script>
```

**Note:** Requires backend server (Node.js/PHP)

---

## 📋 Implementation Roadmap

### Phase 1: NOW (Manual System)
- ✅ Add order buttons
- ✅ Show payment numbers (bKash/Nagad/Rocket)
- ✅ WhatsApp/SMS integration
- ✅ Manual order confirmation

### Phase 2: After Merchant Approval (1-2 months)
- Get bKash/Nagad/SSL Commerz merchant account
- Integrate automated payment gateway
- Add automatic order confirmation
- Email notifications

### Phase 3: Advanced (3-6 months)
- Full e-commerce backend
- User accounts
- Order tracking
- Digital delivery of PDFs

---

## 🎯 Recommended Start: Manual + WhatsApp

**For immediate launch, use this combination:**

1. **Order Button** on each book
2. **Payment Instructions Modal** with bKash/Nagad numbers
3. **WhatsApp Direct Link** for order confirmation
4. **SMS Option** as backup

This lets you:
- ✅ Start selling immediately
- ✅ No technical backend needed
- ✅ Low cost to setup
- ✅ Easy to manage
- ✅ Build customer base while setting up automated system

---

## 💡 Pro Tips

1. **Keep Transaction Records**: Use Google Sheets to track orders manually
2. **Auto-Confirmation**: Set up WhatsApp Business for auto-replies
3. **Payment Proof**: Ask customers to screenshot transaction ID
4. **Quick Delivery**: Partner with local courier (Pathao, Redx)
5. **Build Trust**: Start with Cash on Delivery (COD) option

---

## 📞 Need Help?

Create a simple Google Form for orders:
- Customer Name
- Phone Number
- Book Class
- Payment Method
- Transaction ID
- Delivery Address

Link: https://forms.google.com

---

Would you like me to create the complete updated code with any of these payment methods?