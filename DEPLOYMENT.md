🚀 Quick Deployment Guide
Option 1: Netlify (Easiest - Recommended)
Method A: Drag & Drop

Go to https://app.netlify.com/drop
Drag the entire project folder onto the page
Done! Your site is live with a URL like: https://random-name.netlify.app
You can customize the URL in Netlify settings

Method B: GitHub + Netlify

Upload to GitHub (see instructions below)
Go to https://netlify.com
Sign up/Login
Click "New site from Git"
Connect your GitHub repository
Click "Deploy site"
Done!

Advantages:

✅ Instant deployment
✅ Free SSL certificate
✅ Free hosting
✅ Custom domain support
✅ Automatic deployments on Git push


Option 2: GitHub Pages
Step 1: Push to GitHub
bashcd your-project-folder
git init
git add .
git commit -m "Initial commit: Golden Student Vocabulary website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
Step 2: Enable GitHub Pages

Go to your repository on GitHub
Click "Settings"
Scroll to "Pages" section
Under "Source", select "main" branch
Click "Save"
Wait 1-2 minutes
Your site will be live at: https://yourusername.github.io/your-repo-name/

Advantages:

✅ Free hosting
✅ Free SSL certificate
✅ Version control built-in
✅ Good for portfolios


Option 3: Vercel

Go to https://vercel.com
Sign up/Login with GitHub
Click "New Project"
Import your GitHub repository
Click "Deploy"
Done!

Advantages:

✅ Very fast deployment
✅ Great performance
✅ Free SSL certificate
✅ Easy custom domain setup


Option 4: Other Hosting Services
Traditional Web Hosting (cPanel, etc.)

Upload all files via FTP/File Manager
Make sure index.html is in the root directory
Done!

Services you can use:

Firebase Hosting - Free, fast, great for static sites
Surge.sh - Super simple command-line deployment
Render - Free hosting with automatic deployments
Cloudflare Pages - Fast CDN, free hosting


📝 Before Deploying Checklist

 Update contact information in index.html
 Replace phone number: Search for +8801XXXXXXXXX
 Replace email: Search for goldenvocabulary@email.com
 Add your PDF preview files to assets/pdfs/ folder
 Test the website locally first
 Check all images are loading properly
 Test on mobile device


🔧 Local Testing
Method 1: Direct Open
Simply double-click index.html or preview.html
Method 2: VS Code Live Server

Install "Live Server" extension in VS Code
Right-click on index.html
Select "Open with Live Server"

Method 3: Python Server
bashpython -m http.server 8000
Then visit: http://localhost:8000
Method 4: Node.js
bashnpx http-server

🌐 Custom Domain Setup
After deploying, you can add your own domain:
For Netlify:

Go to Site Settings → Domain Management
Click "Add custom domain"
Follow the instructions to update your DNS

For GitHub Pages:

Go to Settings → Pages
Add your custom domain
Update your DNS settings:

Add CNAME record pointing to: yourusername.github.io



For Vercel:

Go to Project Settings → Domains
Add your domain
Follow DNS setup instructions


🆘 Troubleshooting
Images not showing?

Check file paths are correct
Ensure images are in assets/covers/ folder
File names should match exactly: book1.png, book2.png, etc.

PDF preview not working?

Make sure PDF files are in assets/pdfs/ folder
File names must be exactly: class3.pdf, class4.pdf, etc.
Check file size (keep under 5MB for better loading)

Website looks broken?

Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
Check if all CSS and JS files are loaded
Open browser console (F12) to see any errors

Mobile view issues?

The site is responsive and should work on all devices
Test using browser dev tools (F12 → Toggle device toolbar)


📱 Testing Checklist
Before going live, test:

 Homepage loads properly
 All book images display correctly
 "একটু পড়ে দেখুন" buttons work
 Contact links work (phone & email)
 Responsive on mobile, tablet, desktop
 All animations work smoothly
 No console errors (F12)


🎉 You're Ready!
Choose your preferred deployment method above and launch your beautiful website!
Need help? Check the main README.md file for more detailed information.

Good luck with your deployment! 📚✨