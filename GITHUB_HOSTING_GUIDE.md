# GitHub Hosting Guide for Semantics Solutions Website

## Prerequisites

### 1. Install Git (if not already installed)
- Download Git from: https://git-scm.com/download/windows
- Install with default settings
- Restart your terminal/command prompt after installation

### 2. GitHub Account
- Create a free GitHub account at: https://github.com
- Verify your email address

## Step-by-Step Hosting Instructions

### Step 1: Initialize Git Repository
Open Command Prompt or PowerShell in your project directory and run:

```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 2: Create .gitignore File
(This file is already created - see .gitignore in your project)

### Step 3: Add All Files to Git
```bash
git add .
git commit -m "Initial commit: Semantics Solutions website"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Repository name: `semanticssolutions-website`
5. Description: `Official website for Semantics Solutions - IT & Security Systems`
6. Make it **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

### Step 5: Connect Local Repository to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/semanticssolutions-website.git
git push -u origin main
```

### Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab (top of the repository)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 7: Access Your Live Website
- Your website will be available at: `https://YOUR_USERNAME.github.io/semanticssolutions-website`
- It may take 5-10 minutes to deploy initially
- GitHub will show you the URL in the Pages settings

## Alternative: Custom Domain Setup (Optional)

### If you have a custom domain (e.g., semanticssolutions.com):

1. **In your domain registrar** (where you bought the domain):
   - Create a CNAME record pointing to: `YOUR_USERNAME.github.io`
   - Or create A records pointing to GitHub's IP addresses

2. **In GitHub Pages settings**:
   - Enter your custom domain in the "Custom domain" field
   - Enable "Enforce HTTPS"

## File Structure Summary

Your repository will contain:
```
semanticssolutions-website/
├── index.html                 # Homepage
├── favicon.ico               # Website icon
├── css/
│   └── style.css            # Styles
├── js/
│   └── script.js            # JavaScript functionality
├── images/
│   └── logo.png             # Company logo
├── pages/
│   ├── about.html           # About page
│   ├── amc.html             # AMC services
│   ├── contact.html         # Contact page
│   ├── hardware.html        # Hardware solutions
│   ├── security.html        # Security systems
│   └── software.html        # Software services
├── WARP.md                  # Development guide
├── README.md                # Project documentation
└── .gitignore               # Git ignore rules
```

## Updating Your Website

After making changes to your website:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

Changes will automatically deploy to your live website within a few minutes.

## Troubleshooting

### Common Issues:
1. **Git not recognized**: Install Git and restart terminal
2. **Repository exists**: Use a different repository name
3. **Pages not working**: Ensure repository is public and main branch is selected
4. **Website not updating**: Check GitHub Actions tab for deployment status

### Getting Help:
- GitHub Pages Documentation: https://pages.github.com/
- Git Documentation: https://git-scm.com/doc
- Contact support if you encounter issues

## Next Steps After Hosting

1. **Test your live website** thoroughly
2. **Share the URL** with your team and customers
3. **Set up a custom domain** if desired
4. **Monitor website performance** using browser dev tools
5. **Regular updates** as your business grows

---

**Your website will be live at**: `https://YOUR_USERNAME.github.io/semanticssolutions-website`

Remember to replace `YOUR_USERNAME` with your actual GitHub username!
