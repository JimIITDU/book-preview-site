// ============================================
// Golden Student Vocabulary - Enhanced E-Commerce System
// ============================================

// ============================================
// BOOK DATABASE WITH WEIGHTS
// ============================================
const BOOKS = {
    'class3': {
        id: 'class3',
        name: 'Golden Student Voc@bulary - Class 3',
        nameBn: 'তৃতীয় শ্রেণি',
        price: 500,
        weight: 200, // grams
        stock: 100,
        image: 'assets/covers/class3.png',
        pdfPreview: 'assets/pdfs/class3.pdf'
    },
    'class4': {
        id: 'class4',
        name: 'Golden Student Voc@bulary - Class 4',
        nameBn: 'চতুর্থ শ্রেণি',
        price: 500,
        weight: 220,
        stock: 100,
        image: 'assets/covers/class4.png',
        pdfPreview: 'assets/pdfs/class4.pdf'
    },
    'class5': {
        id: 'class5',
        name: 'Golden Student Voc@bulary - Class 5',
        nameBn: 'পঞ্চম শ্রেণি',
        price: 550,
        weight: 250,
        stock: 100,
        image: 'assets/covers/class5.png',
        pdfPreview: 'assets/pdfs/class5.pdf'
    },
    'class6': {
        id: 'class6',
        name: 'Golden Student Voc@bulary - Class 6',
        nameBn: 'ষষ্ঠ শ্রেণি',
        price: 600,
        weight: 280,
        stock: 100,
        image: 'assets/covers/class6.png',
        pdfPreview: 'assets/pdfs/class6.pdf'
    },
    'class7': {
        id: 'class7',
        name: 'Golden Student Voc@bulary - Class 7',
        nameBn: '৭ম শ্রেণি',
        price: 650,
        weight: 300,
        stock: 100,
        image: 'assets/covers/class7.png',
        pdfPreview: 'assets/pdfs/class7.pdf'
    }
};

// ============================================
// DELIVERY ZONES CONFIGURATION
// ============================================
const DELIVERY_ZONES = {
    'narsingdi': {
        name: 'Narsingdi District',
        nameBn: 'নরসিংদী জেলা',
        baseCharge: 60,
        perKgCharge: 30,
        baseWeight: 500,
        deliveryTime: '২৪ ঘন্টা'
    },
    'dhaka_city': {
        name: 'Dhaka City',
        nameBn: 'ঢাকা সিটি',
        baseCharge: 80,
        perKgCharge: 40,
        baseWeight: 500,
        deliveryTime: '২৪-৪৮ ঘন্টা'
    },
    'dhaka_suburban': {
        name: 'Dhaka Sub-urban',
        nameBn: 'ঢাকা উপশহর',
        baseCharge: 100,
        perKgCharge: 50,
        baseWeight: 500,
        deliveryTime: '৩-৫ দিন'
    },
    'other_district': {
        name: 'Other Districts',
        nameBn: 'অন্যান্য জেলা',
        baseCharge: 120,
        perKgCharge: 60,
        baseWeight: 500,
        deliveryTime: '৫-৭ দিন'
    }
};

// ============================================
// PAYMENT METHODS (All BD Mobile Banking)
// ============================================
const PAYMENT_METHODS = {
    'bkash': {
        id: 'bkash',
        name: 'bKash',
        icon: '📱',
        color: '#E2136E',
        number: '01687106627', // Your bKash number
        type: 'mobile_banking',
        fee: 0,
        feePercent: 0,
        instructions: 'Send Money করুন এই নাম্বারে',
        steps: [
            'bKash অ্যাপ খুলুন',
            'Send Money সিলেক্ট করুন',
            'নাম্বার দিন: 01687106627',
            'পরিমাণ দিন',
            'PIN দিয়ে কনফার্ম করুন',
            'Transaction ID সেভ করুন'
        ]
    },
    'nagad': {
        id: 'nagad',
        name: 'Nagad',
        icon: '💰',
        color: '#F26522',
        number: '01687106627',
        type: 'mobile_banking',
        fee: 0,
        feePercent: 0,
        instructions: 'Send Money করুন এই নাম্বারে'
    },
    'rocket': {
        id: 'rocket',
        name: 'Rocket',
        icon: '🚀',
        color: '#8B3FF0',
        number: '01687106627', // UPDATE THIS
        type: 'mobile_banking',
        fee: 0,
        feePercent: 0,
        instructions: 'Send Money করুন এই নাম্বারে'
    },
    // 'upay': {
    //     id: 'upay',
    //     name: 'Upay',
    //     icon: '💳',
    //     color: '#FF6B35',
    //     number: '01612-345678', // UPDATE THIS
    //     type: 'mobile_banking',
    //     fee: 0,
    //     feePercent: 0,
    //     instructions: 'Send Money করুন এই নাম্বারে'
    // },
    // 'tap': {
    //     id: 'tap',
    //     name: 'TAP',
    //     icon: '📲',
    //     color: '#00B8A9',
    //     number: '01512-345678', // UPDATE THIS
    //     type: 'mobile_banking',
    //     fee: 0,
    //     feePercent: 0,
    //     instructions: 'Send Money করুন এই নাম্বারে'
    // },
    'bank': {
        id: 'bank',
        name: 'Bank Transfer',
        icon: '🏦',
        color: '#2C3E50',
        type: 'bank',
        fee: 0,
        instructions: 'ব্যাংক একাউন্টে টাকা পাঠান',
        bankDetails: {
            bank: 'Dutch Bangla Bank',
            branch: 'Narsingdi Branch',
            accountName: 'Enamuzzaman Adil',
            accountNumber: '1234567890',
            routingNumber: '090XXXXXX'
        }
    },
    'cod': {
        id: 'cod',
        name: 'Cash on Delivery',
        icon: '🏠',
        color: '#28A745',
        type: 'cod',
        fee: 10,
        feePercent: 0,
        instructions: 'বই হাতে পেয়ে টাকা দিন',
        note: 'শুধুমাত্র নরসিংদী ও ঢাকা সিটিতে উপলব্ধ'
    }
};

// ============================================
// SHOPPING CART
// ============================================
let cart = JSON.parse(localStorage.getItem('goldenCart')) || [];

// Calculate delivery charge
function calculateDeliveryCharge(totalWeight, zone = 'narsingdi') {
    const zoneData = DELIVERY_ZONES[zone];
    if (!zoneData) return 60;
    
    let deliveryCharge = zoneData.baseCharge;
    
    if (totalWeight > zoneData.baseWeight) {
        const extraWeight = totalWeight - zoneData.baseWeight;
        const extraKg = Math.ceil(extraWeight / 1000);
        deliveryCharge += (extraKg * zoneData.perKgCharge);
    }
    
    return deliveryCharge;
}

// Calculate order total
function calculateOrderTotal(items, zone, paymentMethodId) {
    let subtotal = 0;
    let totalWeight = 0;
    
    items.forEach(item => {
        const book = BOOKS[item.bookId];
        if (book) {
            subtotal += book.price * item.quantity;
            totalWeight += book.weight * item.quantity;
        }
    });
    
    const deliveryCharge = calculateDeliveryCharge(totalWeight, zone);
    const paymentMethod = PAYMENT_METHODS[paymentMethodId];
    let paymentFee = paymentMethod?.fee || 0;
    
    // Add percentage fee if applicable
    if (paymentMethod?.feePercent) {
        paymentFee += Math.ceil((subtotal * paymentMethod.feePercent) / 100);
    }
    
    const total = subtotal + deliveryCharge + paymentFee;
    
    return {
        subtotal,
        totalWeight,
        deliveryCharge,
        paymentFee,
        total,
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0)
    };
}

// Add to cart
window.addToCart = function(bookId, quantity = 1) {
    const book = BOOKS[bookId];
    if (!book) {
        showNotification('বই পাওয়া যায়নি!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.bookId === bookId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ bookId, quantity });
    }
    
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`${book.nameBn} কার্টে যোগ হয়েছে! 🎉`, 'success');
};

// Update quantity
window.updateQuantity = function(bookId, change) {
    const item = cart.find(i => i.bookId === bookId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(bookId);
        return;
    }
    
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    updateCartUI();
};

// Remove from cart
window.removeFromCart = function(bookId) {
    cart = cart.filter(item => item.bookId !== bookId);
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    updateCartUI();
    showNotification('বই কার্ট থেকে সরানো হয়েছে', 'info');
};

// Update cart UI
function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
        cartCountEl.style.display = cartCount > 0 ? 'flex' : 'none';
    }
    
    // Update cart modal if open
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #999;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <p>কার্ট খালি</p>
                <p style="font-size: 0.9rem;">বই যোগ করতে "অর্ডার করুন" বাটনে ক্লিক করুন</p>
            </div>
        `;
        
        const checkoutBtn = document.querySelector('.btn-checkout');
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    let subtotal = 0;
    let html = '';
    
    cart.forEach(item => {
        const book = BOOKS[item.bookId];
        if (!book) return;
        
        const itemTotal = book.price * item.quantity;
        subtotal += itemTotal;
        
        html += `
            <div class="cart-item">
                <img src="${book.image}" class="cart-item-image" alt="${book.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${book.nameBn}</div>
                    <div class="cart-item-price">৳${book.price} × ${item.quantity} = ৳${itemTotal}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity('${book.id}', -1)">-</button>
                        <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${book.id}', 1)">+</button>
                        <button class="qty-btn remove-btn" onclick="removeFromCart('${book.id}')" title="মুছে ফেলুন">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="cart-subtotal">
            <span>সাবটোটাল:</span>
            <strong>৳${subtotal}</strong>
        </div>
        <p style="font-size: 0.85rem; color: #666; text-align: center; margin-top: 0.5rem;">
            ডেলিভারি চার্জ চেকআউটে যোগ হবে
        </p>
    `;
    
    cartItemsContainer.innerHTML = html;
}

// Open cart
window.openCart = function() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.add('active');
        updateCartUI();
    }
};

// Close cart
window.closeCart = function() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('active');
    }
};

// Proceed to checkout
window.proceedToCheckout = function() {
    if (cart.length === 0) {
        showNotification('কার্ট খালি! প্রথমে বই যোগ করুন।', 'warning');
        return;
    }
    
    closeCart();
    showCheckoutModal();
};

// Show checkout modal
function showCheckoutModal() {
    // Remove any existing checkout modal
    const existing = document.querySelector('.checkout-modal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.className = 'checkout-modal active';
    modal.innerHTML = `
        <div class="checkout-content">
            <button class="modal-close" onclick="this.closest('.checkout-modal').remove(); document.body.style.overflow='';">×</button>
            
            <h2>🛒 চেকআউট</h2>
            
            <form id="checkout-form" class="checkout-form">
                <!-- Customer Information -->
                <div class="checkout-section">
                    <h3>👤 আপনার তথ্য</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>নাম <span class="required">*</span></label>
                            <input type="text" id="customer-name" required placeholder="আপনার পুরো নাম">
                        </div>
                        <div class="form-group">
                            <label>ফোন নাম্বার <span class="required">*</span></label>
                            <input type="tel" id="customer-phone" required placeholder="01XXXXXXXXX" pattern="01[0-9]{9}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>ইমেইল (ঐচ্ছিক)</label>
                        <input type="email" id="customer-email" placeholder="example@email.com">
                    </div>
                </div>
                
                <!-- Delivery Information -->
                <div class="checkout-section">
                    <h3>🏠 ডেলিভারি তথ্য</h3>
                    <div class="form-group">
                        <label>এলাকা <span class="required">*</span></label>
                        <select id="delivery-zone" required onchange="updateOrderSummary()">
                            <option value="">এলাকা বেছে নিন</option>
                            ${Object.entries(DELIVERY_ZONES).map(([key, zone]) => `
                                <option value="${key}">${zone.nameBn} - ৳${zone.baseCharge}+ (${zone.deliveryTime})</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>সম্পূর্ণ ঠিকানা <span class="required">*</span></label>
                        <textarea id="customer-address" rows="3" required placeholder="বাসা/ফ্ল্যাট নং, রোড নং, এলাকা, থানা"></textarea>
                    </div>
                </div>
                
                <!-- Payment Method -->
                <div class="checkout-section">
                    <h3>💳 পেমেন্ট মেথড</h3>
                    <div class="payment-methods-grid">
                        ${Object.values(PAYMENT_METHODS).map(method => `
                            <label class="payment-option">
                                <input type="radio" name="payment" value="${method.id}" onchange="updateOrderSummary()">
                                <div class="payment-card" style="border-color: ${method.color}">
                                    <span class="payment-icon">${method.icon}</span>
                                    <span class="payment-name">${method.name}</span>
                                    ${method.fee > 0 ? `<span class="payment-fee">+৳${method.fee}</span>` : ''}
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Order Summary -->
                <div class="checkout-section">
                    <div class="order-summary-box">
                        <h3>📋 অর্ডার সামারি</h3>
                        <div id="order-summary-details">
                            <p style="text-align: center; color: #999;">এলাকা ও পেমেন্ট মেথড বেছে নিন</p>
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="btn-place-order">
                    <span>অর্ডার কনফার্ম করুন</span>
                    <span>→</span>
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Form submission
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        confirmOrder();
    });
    
    // Initial summary update
    updateOrderSummary();
}

// Update order summary in checkout
function updateOrderSummary() {
    const zone = document.getElementById('delivery-zone')?.value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
    const summaryEl = document.getElementById('order-summary-details');
    
    if (!summaryEl) return;
    
    if (!zone || !paymentMethod) {
        summaryEl.innerHTML = '<p style="text-align: center; color: #999;">এলাকা ও পেমেন্ট মেথড বেছে নিন</p>';
        return;
    }
    
    const totals = calculateOrderTotal(cart, zone, paymentMethod);
    
    let html = '<div class="summary-items">';
    
    // Cart items
    cart.forEach(item => {
        const book = BOOKS[item.bookId];
        html += `
            <div class="summary-row">
                <span>${book.nameBn} × ${item.quantity}</span>
                <span>৳${book.price * item.quantity}</span>
            </div>
        `;
    });
    
    html += '</div><div class="summary-totals">';
    
    // Totals
    html += `
        <div class="summary-row">
            <span>সাবটোটাল:</span>
            <strong>৳${totals.subtotal}</strong>
        </div>
        <div class="summary-row small">
            <span>ডেলিভারি চার্জ (${totals.totalWeight}g):</span>
            <strong>৳${totals.deliveryCharge}</strong>
        </div>
    `;
    
    if (totals.paymentFee > 0) {
        html += `
            <div class="summary-row small">
                <span>পেমেন্ট ফি:</span>
                <strong>৳${totals.paymentFee}</strong>
            </div>
        `;
    }
    
    html += `
        <div class="summary-row total">
            <span>সর্বমোট:</span>
            <strong>৳${totals.total}</strong>
        </div>
    `;
    
    html += '</div>';
    summaryEl.innerHTML = html;
}

// Confirm order
function confirmOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const email = document.getElementById('customer-email')?.value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const zone = document.getElementById('delivery-zone').value;
    const paymentMethodId = document.querySelector('input[name="payment"]:checked')?.value;
    
    if (!name || !phone || !address || !zone || !paymentMethodId) {
        showNotification('সকল আবশ্যক তথ্য পূরণ করুন!', 'error');
        return;
    }
    
    const totals = calculateOrderTotal(cart, zone, paymentMethodId);
    const orderId = 'GSV' + Date.now();
    
    // Create order object
    const order = {
        orderId,
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        customerAddress: address,
        deliveryZone: zone,
        deliveryZoneName: DELIVERY_ZONES[zone].nameBn,
        paymentMethod: paymentMethodId,
        paymentMethodName: PAYMENT_METHODS[paymentMethodId].name,
        items: cart.map(item => ({
            bookId: item.bookId,
            bookName: BOOKS[item.bookId].nameBn,
            price: BOOKS[item.bookId].price,
            weight: BOOKS[item.bookId].weight,
            quantity: item.quantity
        })),
        totals,
        orderDate: new Date().toISOString(),
        status: 'pending'
    };
    
    // Save order
    const orders = JSON.parse(localStorage.getItem('goldenOrders')) || [];
    orders.push(order);
    localStorage.setItem('goldenOrders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    localStorage.setItem('goldenCart', JSON.stringify(cart));
    updateCartUI();
    
    // Close checkout
    document.querySelector('.checkout-modal').remove();
    document.body.style.overflow = '';
    
    // Show confirmation
    showOrderConfirmation(order);
}

// Show order confirmation with payment instructions
function showOrderConfirmation(order) {
    const method = PAYMENT_METHODS[order.paymentMethod];
    
    const modal = document.createElement('div');
    modal.className = 'confirmation-modal active';
    modal.innerHTML = `
        <div class="confirmation-content">
            <div class="success-animation">
                <div class="success-checkmark">
                    <div class="check-icon">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                    </div>
                </div>
            </div>
            
            <h2>অর্ডার সফল হয়েছে! 🎉</h2>
            <p class="order-id">Order ID: <code>${order.orderId}</code></p>
            
            <div class="order-summary-card">
                <h3>📦 অর্ডার ডিটেইলস</h3>
                ${order.items.map(item => `
                    <div class="summary-item">
                        <span>${item.bookName} × ${item.quantity}</span>
                        <span>৳${item.price * item.quantity}</span>
                    </div>
                `).join('')}
                <div class="summary-divider"></div>
                <div class="summary-item">
                    <span>ডেলিভারি (${order.deliveryZoneName}):</span>
                    <span>৳${order.totals.deliveryCharge}</span>
                </div>
                ${order.totals.paymentFee > 0 ? `
                    <div class="summary-item">
                        <span>পেমেন্ট ফি:</span>
                        <span>৳${order.totals.paymentFee}</span>
                    </div>
                ` : ''}
                <div class="summary-divider"></div>
                <div class="summary-item total">
                    <strong>মোট পরিমাণ:</strong>
                    <strong class="total-amount">৳${order.totals.total}</strong>
                </div>
            </div>
            
            ${method.type !== 'cod' ? `
                <div class="payment-instructions-card">
                    <h3>💳 পেমেন্ট নির্দেশনা</h3>
                    <div class="payment-method-info" style="border-color: ${method.color}">
                        <div class="payment-method-header">
                            <span class="method-icon">${method.icon}</span>
                            <strong>${method.name}</strong>
                        </div>
                        ${method.type === 'bank' ? `
                            <div class="bank-details">
                                <p><strong>ব্যাংক:</strong> ${method.bankDetails.bank}</p>
                                <p><strong>শাখা:</strong> ${method.bankDetails.branch}</p>
                                <p><strong>একাউন্ট নাম:</strong> ${method.bankDetails.accountName}</p>
                                <p><strong>একাউন্ট নং:</strong> <code>${method.bankDetails.accountNumber}</code></p>
                                <p><strong>রাউটিং নং:</strong> ${method.bankDetails.routingNumber}</p>
                            </div>
                        ` : `
                            <p class="payment-number">নাম্বার: <code>${method.number}</code></p>
                            <p class="payment-instruction">${method.instructions}</p>
                            ${method.steps ? `
                                <div class="payment-steps">
                                    <strong>ধাপসমূহ:</strong>
                                    <ol>
                                        ${method.steps.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                </div>
                            ` : ''}
                        `}
                        <div class="amount-to-pay">
                            <span>পরিমাণ:</span>
                            <strong style="color: ${method.color}">৳${order.totals.total}</strong>
                        </div>
                    </div>
                    <p class="payment-note">⚠️ পেমেন্ট করার পর অবশ্যই Transaction ID আমাদের জানান</p>
                </div>
            ` : `
                <div class="cod-confirmation">
                    <div class="cod-icon">🏠</div>
                    <h3>Cash on Delivery</h3>
                    <p>আপনার অর্ডার কনফার্ম হয়েছে!</p>
                    <p class="delivery-time">ডেলিভারি সময়: ${DELIVERY_ZONES[order.deliveryZone].deliveryTime}</p>
                    <p class="cod-amount">পেমেন্ট: <strong>৳${order.totals.total}</strong></p>
                    <p class="cod-note">বই হাতে পেয়ে টাকা দিবেন</p>
                </div>
            `}
            
            <div class="action-buttons">
                ${method.type !== 'cod' ? `
                    <a href="https://wa.me/8801521432606?text=Order ID: ${order.orderId}%0A%0ATransaction ID: %0A%0A(পেমেন্ট করার পর Transaction ID লিখে পাঠান)" 
                       class="btn btn-whatsapp" target="_blank">
                        💬 Transaction ID পাঠান
                    </a>
                ` : ''}
                <a href="https://wa.me/8801521432606?text=Order ID: ${order.orderId} এর তথ্য জানতে চাই" 
                   class="btn btn-secondary" target="_blank">
                    📞 যোগাযোগ করুন
                </a>
                <button class="btn btn-primary" onclick="this.closest('.confirmation-modal').remove(); location.reload();">
                    হোমপেজে ফিরে যান
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartUI();
    
    // Update order buttons to add to cart
    document.querySelectorAll('[data-book-id]').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            addToCart(bookId);
        });
    });
});