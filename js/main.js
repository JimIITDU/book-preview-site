// ============================================
// Golden Student Vocabulary - Main JavaScript
// ============================================

// ============================================
// Book Order System (Global Function)
// ============================================
window.orderBook = function(classNameBn, classNameEn, price) {
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="order-modal-content">
            <button class="modal-close" onclick="this.closest('.order-modal').remove(); document.body.style.overflow = '';">×</button>
            <div class="order-icon">🛒</div>
            <h3>অর্ডার কনফার্ম করুন</h3>
            
            <div class="order-summary">
                <h4>অর্ডার ডিটেইলস:</h4>
                <div class="order-item">
                    <span>বই:</span>
                    <strong>Golden Student Voc@bulary - ${classNameBn}</strong>
                </div>
                <div class="order-item">
                    <span>মূল্য:</span>
                    <strong>৳${price}</strong>
                </div>
            </div>
            
            <div class="payment-options">
                <h4>💰 পেমেন্ট অপশন:</h4>
                
                <div class="payment-method">
                    <div class="method-header">
                        <span>📱</span>
                        <span>bKash</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01521432606</strong></p>
                        <p style="font-size: 0.85rem; font-style: italic;">এই নাম্বারে Send Money করুন</p>
                    </div>
                </div>
                
                <div class="payment-method">
                    <div class="method-header">
                        <span>💰</span>
                        <span>Nagad</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01521432606</strong></p>
                        <p style="font-size: 0.85rem; font-style: italic;">এই নাম্বারে Send Money করুন</p>
                    </div>
                </div>
                
                <div class="payment-method">
                    <div class="method-header">
                        <span>🚀</span>
                        <span>Rocket</span>
                    </div>
                    <div class="method-details">
                        <p>পার্সোনাল: <strong>01521432606</strong></p>
                        <p style="font-size: 0.85rem; font-style: italic;">এই নাম্বারে Send Money করুন</p>
                    </div>
                </div>

                <div class="payment-method" style="border-color: #28a745;">
                    <div class="method-header">
                        <span>🏠</span>
                        <span>Cash on Delivery</span>
                    </div>
                    <div class="method-details">
                        <p>ঢাকার ভিতরে হোম ডেলিভারি (চার্জ +৬০ টাকা)</p>
                        <p style="font-size: 0.85rem; font-style: italic;">বই হাতে পেয়ে টাকা দিন</p>
                    </div>
                </div>
            </div>
            
            <div class="order-instructions">
                <h4>📝 অর্ডার প্রসেস:</h4>
                <ol>
                    <li>উপরের যেকোনো পেমেন্ট মেথড বেছে নিন</li>
                    <li>bKash/Nagad/Rocket এ টাকা পাঠালে Transaction ID সেভ করুন</li>
                    <li>নিচের বাটনে ক্লিক করে আমাদের জানান</li>
                    <li>আপনার নাম, ঠিকানা ও Transaction ID (যদি থাকে) শেয়ার করুন</li>
                    <li>২৪-৪৮ ঘন্টার মধ্যে ডেলিভারি পাবেন! 🚚</li>
                </ol>
            </div>
            
            <div class="order-actions">
                <a href="https://wa.me/8801521432606?text=আসসালামু আলাইকুম!%0A%0Aআমি Golden Student Voc@bulary এর ${classNameBn} (${classNameEn}) বইটি অর্ডার করতে চাই।%0A%0Aমূল্য: ৳${price}%0A%0ATransaction ID: %0Aনাম: %0Aঠিকানা: %0Aফোন: " 
                   class="btn-whatsapp" 
                   target="_blank">
                    💬 WhatsApp এ অর্ডার করুন
                </a>
                <a href="sms:+8801521432606?body=আমি ${classNameEn} এর বই অর্ডার করতে চাই। নাম: আপনার নাম | ঠিকানা: | Transaction ID (যদি পেমেন্ট করে থাকেন): " 
                   class="btn-sms">
                    📱 SMS পাঠান
                </a>
                <a href="tel:+8801521432606" 
                   class="btn-call">
                    📞 সরাসরি কল করুন
                </a>
            </div>
            
            <div style="text-align: center; margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #f0f0f0;">
                <p style="color: #666; font-size: 0.9rem; margin: 0;">
                    <strong>অথবা</strong> নিচের ইমেইল এ অর্ডার পাঠান:
                </p>
                <a href="mailto:goldenvocabulary@email.com?subject=Book Order - ${classNameEn}&body=আমি ${classNameBn} (${classNameEn}) বইটি অর্ডার করতে চাই।%0A%0Aনাম:%0Aফোন:%0Aঠিকানা:%0ATransaction ID (যদি থাকে):" 
                   style="color: #D4AF37; text-decoration: none; font-weight: 600; font-size: 1rem;">
                    📧 goldenvocabulary@email.com
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    });
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
};

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // ============================================
    // Scroll Animations
    // ============================================
    const observeElements = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for fade-in animation
        const sections = document.querySelectorAll('.about-section, .features-section, .contact-section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    };

    // ============================================
    // Book Preview Button Handlers
    // ============================================
    const handlePreviewButtons = () => {
        const previewButtons = document.querySelectorAll('.preview-btn');
        
        previewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pdfFile = this.getAttribute('data-pdf');
                const bookCard = this.closest('.book-card');
                const bookClass = bookCard.querySelector('.book-class').textContent;
                
                // Add button loading state
                this.classList.add('loading');
                const originalText = this.innerHTML;
                this.innerHTML = '<span>লোড হচ্ছে...</span>';
                
                // Simulate loading (remove this in production)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = originalText;
                    
                    // Check if PDF exists
                    openPdfPreview(pdfFile, bookClass);
                }, 500);
            });
        });
    };

    // ============================================
    // PDF Preview Modal/Window Handler
    // ============================================
    const openPdfPreview = (pdfFile, bookClass) => {
        // For now, this will attempt to open the PDF
        // You'll need to add your PDF files to the assets/pdfs/ folder
        const pdfPath = `assets/pdfs/${pdfFile}`;
        
        // Check if file exists by attempting to fetch
        fetch(pdfPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // PDF exists, open in new window
                    window.open(pdfPath, '_blank');
                } else {
                    // PDF doesn't exist yet
                    showPdfNotAvailableMessage(bookClass);
                }
            })
            .catch(() => {
                // Error or PDF doesn't exist
                showPdfNotAvailableMessage(bookClass);
            });
    };

    // ============================================
    // Show "PDF Not Available" Message
    // ============================================
    const showPdfNotAvailableMessage = (bookClass) => {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'pdf-modal';
        modal.innerHTML = `
            <div class="pdf-modal-content">
                <div class="pdf-modal-icon">📚</div>
                <h3>প্রিভিউ শীঘ্রই আসছে</h3>
                <p>${bookClass} এর প্রিভিউ ফাইল শীঘ্রই যুক্ত করা হবে।</p>
                <p class="pdf-modal-note">বই অর্ডার করতে নিচের যোগাযোগ নম্বরে কল করুন।</p>
                <button class="btn btn-primary close-modal">ঠিক আছে</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add styles for modal
        addModalStyles();
        
        // Animate modal in
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Close modal handler
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            }
        });
    };

    // ============================================
    // Add Modal Styles Dynamically
    // ============================================
    const addModalStyles = () => {
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                .pdf-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    backdrop-filter: blur(5px);
                }
                
                .pdf-modal.active {
                    opacity: 1;
                }
                
                .pdf-modal-content {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 16px;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                }
                
                .pdf-modal.active .pdf-modal-content {
                    transform: scale(1);
                }
                
                .pdf-modal-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }
                
                .pdf-modal-content h3 {
                    color: #D4AF37;
                    margin-bottom: 1rem;
                    font-size: 1.8rem;
                }
                
                .pdf-modal-content p {
                    color: #5A5A5A;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                
                .pdf-modal-note {
                    font-size: 0.9rem;
                    font-style: italic;
                    color: #8A8A8A;
                }
                
                .close-modal {
                    margin-top: 1rem;
                }
            `;
            document.head.appendChild(style);
        }
    };

    // ============================================
    // Header Scroll Effect
    // ============================================
    const handleScrollEffect = () => {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add class to body when scrolled
            if (currentScroll > 100) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    };

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const parallaxEffect = () => {
        const hero = document.querySelector('.hero');
        
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                
                if (scrolled < heroHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                    hero.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
                }
            });
        }
    };

    // ============================================
    // Book Card Hover Effect Enhancement
    // ============================================
    const enhanceBookCards = () => {
        const bookCards = document.querySelectorAll('.book-card');
        
        bookCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.setProperty('--hover-scale', '1.02');
            });
            
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.querySelector('.book-cover').style.transform = 
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.book-cover').style.transform = '';
            });
        });
    };

    // ============================================
    // Contact Form Validation (for future use)
    // ============================================
    const setupContactForm = () => {
        // Placeholder for when you add a contact form
        const contactForm = document.querySelector('#contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Add form submission logic here
                console.log('Form submitted');
            });
        }
    };

    // ============================================
    // Copy to Clipboard for Contact Info
    // ============================================
    const setupCopyToClipboard = () => {
        const contactItems = document.querySelectorAll('.contact-item');
        
        contactItems.forEach(item => {
            // Create copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '📋';
            copyBtn.setAttribute('aria-label', 'Copy to clipboard');
            copyBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.5rem;
                opacity: 0.6;
                transition: opacity 0.3s;
            `;
            
            copyBtn.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
            });
            
            copyBtn.addEventListener('mouseleave', function() {
                this.style.opacity = '0.6';
            });
            
            copyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const text = item.querySelector('span').textContent;
                
                navigator.clipboard.writeText(text).then(() => {
                    this.innerHTML = '✓';
                    setTimeout(() => {
                        this.innerHTML = '📋';
                    }, 2000);
                });
            });
            
            item.appendChild(copyBtn);
        });
    };

    // ============================================
    // Initialize All Functions
    // ============================================
    const init = () => {
        smoothScroll();
        observeElements();
        handlePreviewButtons();
        handleScrollEffect();
        parallaxEffect();
        enhanceBookCards();
        setupContactForm();
        setupCopyToClipboard();
        
        console.log('Golden Student Vocabulary website initialized successfully! 📚');
    };

    // Run initialization
    init();

    // ============================================
    // Loading Screen (Optional)
    // ============================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// ============================================
// Utility Functions
// ============================================

// Format phone number
const formatPhoneNumber = (phone) => {
    return phone.replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3');
};

// Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber,
        scrollToTop
    };
}