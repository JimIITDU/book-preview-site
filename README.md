# Golden Student Voc@bulary Website

একটি সুন্দর ও আধুনিক ওয়েবসাইট যা বিভিন্ন ক্লাসের শব্দভাণ্ডার বই প্রদর্শন করে।

## 🌟 Features

- **সুন্দর ও আকর্ষণীয় ডিজাইন**: Golden থিম সহ এলিগ্যান্ট ডিজাইন
- **সম্পূর্ণ রেসপন্সিভ**: মোবাইল, ট্যাবলেট ও ডেস্কটপে পারফেক্ট
- **বই প্রিভিউ**: প্রতিটি বইয়ের জন্য "একটু পড়ে দেখুন" বাটন
- **মসৃণ অ্যানিমেশন**: স্ক্রল ও হোভার ইফেক্ট
- **বাংলা ও ইংরেজি সাপোর্ট**: দুই ভাষায় কন্টেন্ট

## 📁 Project Structure

```
adilVai/
│
├── index.html              # Main HTML file
├── preview.html            # Preview page for testing
│
├── css/
│   └── style.css          # All styling
│
├── js/
│   └── main.js            # JavaScript functionality
│
└── assets/
    ├── covers/            # Book cover images
    │   ├── book1.png     # Class 3
    │   ├── book2.png     # Class 4
    │   ├── book3.png     # Class 5
    │   └── book4.png     # Class 6
    │
    └── pdfs/              # PDF preview files (to be added)
        ├── class3.pdf
        ├── class4.pdf
        ├── class5.pdf
        └── class6.pdf
```

## 🚀 How to Use

### Method 1: GitHub Pages (Recommended)

1. **Upload to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Golden Student Vocabulary website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Your site will be live at: `https://yourusername.github.io/repository-name/`

### Method 2: Netlify (Easy Deployment)

1. **Drag and Drop:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire `adilVai` folder
   - Your site will be live instantly with a URL like: `https://random-name.netlify.app`

2. **Or Connect to GitHub:**
   - Push your code to GitHub (see Method 1, step 1)
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy!

### Method 3: Local Development

1. **Open in Browser:**
   - Simply open `index.html` in your browser
   - Or use VS Code Live Server extension

2. **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

3. **Using Node.js:**
   ```bash
   npx http-server
   ```

## 📚 Adding PDF Previews

To add PDF preview files:

1. Create PDF files for each class
2. Name them exactly as:
   - `class3.pdf`
   - `class4.pdf`
   - `class5.pdf`
   - `class6.pdf`

3. Place them in the `assets/pdfs/` folder

4. The "একটু পড়ে দেখুন" buttons will automatically open these PDFs

**Note:** If PDF files are not present, the website will show a friendly message asking users to contact for ordering.

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --color-primary: #D4AF37;        /* Golden color */
    --color-secondary: #C94136;      /* Red color */
    --color-accent: #2C7FB8;         /* Blue color */
    /* ... other colors */
}
```

### Changing Contact Information

Edit the contact section in `index.html`:

```html
<a href="tel:+8801XXXXXXXXX" class="contact-item">
    <!-- Replace with actual phone number -->
</a>
<a href="mailto:goldenvocabulary@email.com" class="contact-item">
    <!-- Replace with actual email -->
</a>
```

### Adding More Books

1. Add new book card in the books section of `index.html`
2. Follow the existing structure
3. Add the book cover image to `assets/covers/`
4. Add the corresponding PDF to `assets/pdfs/`

## 💳 Adding Payment System (Future)

The website has a placeholder for payment integration. To add payment:

1. **bKash/Nagad Integration:**
   - Get merchant account
   - Use their API documentation
   - Add payment button in the book cards

2. **Stripe/PayPal (International):**
   - Create account at Stripe or PayPal
   - Follow their integration guide
   - Add checkout buttons

3. **Contact Form Backend:**
   - Use services like Formspree, EmailJS, or Web3Forms
   - Or create your own backend with Node.js/PHP

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (Vanilla)**: No frameworks needed
- **Google Fonts**: Playfair Display & Hind Siliguri
- **SVG**: Custom icons

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Support

For any issues or questions:
- Email: goldenvocabulary@email.com
- Phone: +880 1XXX-XXXXXX

## 📄 License

All rights reserved © 2024 Golden Student Voc@bulary

---

**Made with ❤️ for students**

আপনার চেষ্টা, আমাদের সহযোগিতা 📚