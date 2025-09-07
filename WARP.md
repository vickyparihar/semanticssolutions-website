# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website for Semantics Solutions IT Company, built with vanilla HTML5, CSS3, and JavaScript. The site provides comprehensive information about IT and security services including hardware solutions, security systems, software services, and AMC (Annual Maintenance Contract) services.

## Common Development Commands

### Local Development
```bash
# Serve the website locally using Python
python -m http.server 8000
# or with Python 3 explicitly
python3 -m http.server 8000

# Alternative with Node.js (if http-server is installed)
npx http-server . -p 8000

# Open in browser
start http://localhost:8000  # Windows
open http://localhost:8000   # macOS
```

### File Validation and Testing
```bash
# Validate HTML files
npx html-validate *.html pages/*.html

# Check for broken links (if using a link checker)
npx broken-link-checker http://localhost:8000

# Lint CSS files
npx stylelint css/*.css

# Lint JavaScript files  
npx eslint js/*.js
```

### Deployment
```bash
# Copy files to web server (example with rsync)
rsync -avz --delete . user@server:/var/www/html/

# Or using FTP/SFTP clients for file transfer
```

## Architecture and Code Structure

### File Organization
The project follows a clean, semantic structure:

- **`index.html`** - Homepage with service overview and hero section
- **`pages/`** - All internal pages (about, contact, service pages)
- **`css/style.css`** - Single comprehensive stylesheet with responsive design
- **`js/script.js`** - Interactive functionality and form validation
- **`images/`** - Image assets directory (currently empty, ready for content)

### CSS Architecture
The stylesheet is organized in logical sections:
1. **Reset and Base Styles** - Consistent cross-browser styling
2. **Header and Navigation** - Fixed navbar with dropdown menus
3. **Hero Section** - Gradient background with call-to-action
4. **Service Cards** - Reusable card components for services
5. **Forms** - Contact form styling with validation states
6. **Responsive Design** - Mobile-first approach with breakpoints

### JavaScript Functionality
The main script provides:
- **Mobile Navigation** - Hamburger menu toggle functionality
- **Smooth Scrolling** - Enhanced navigation experience
- **Form Validation** - Client-side validation with visual feedback
- **Scroll Effects** - Navbar transparency and back-to-top button
- **Animation Observer** - Intersection Observer for card animations
- **Lazy Loading** - Image optimization for performance

### Component Pattern
The site uses a consistent card-based layout pattern:
- **Service Cards** - Standardized service presentation
- **Feature Cards** - Company highlights and values
- **Contact Items** - Consistent contact information display

## Key Development Guidelines

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`)
- Maintain consistent navigation structure across all pages
- Include proper meta tags and accessibility attributes
- Use Font Awesome icons consistently (`fas` prefix for solid icons)

### CSS Patterns
- Follow the established color scheme:
  - Primary Blue: `#3498db`
  - Primary Red: `#e74c3c` 
  - Dark Blue: `#2c3e50`
  - Light Gray: `#f8f9fa`
- Use CSS Grid and Flexbox for layouts
- Maintain responsive breakpoints for mobile/tablet/desktop
- Apply consistent hover effects and transitions

### JavaScript Patterns
- Use `document.addEventListener('DOMContentLoaded', ...)` for initialization
- Implement defensive programming with null checks
- Use modern APIs like `IntersectionObserver` for performance
- Follow the established form validation pattern for new forms

### Page Structure Pattern
All pages follow this consistent structure:
1. **Header with Navigation** - Fixed navbar with logo and menu
2. **Page Header Section** - Title, subtitle, and breadcrumb navigation
3. **Content Sections** - Main page content in logical sections
4. **Footer** - Contact information and company details (when present)

### Content Management
- Company contact information is defined in multiple locations - update consistently:
  - Phone: `+91 90223 34441`
  - Email: `info@semanticssolutions.com` and `support@semanticssolutions.com`
  - Address: `1st Floor, Ved Bunglow, 2, Swami Vivekananda Rd, opp. Sony Mony Electronics, Borivali West, Mumbai, Maharashtra 400092`
  - Business Hours: `Monday-Saturday: 10:30 AM - 7:30 PM, Sunday: Closed`
- Service descriptions should be updated across corresponding pages and index.html
- Maintain consistency in service categorization (Hardware, Security, Software, AMC)
- AMC services page directs users to contact for custom plans rather than displaying fixed pricing
- Security services exclude alarm systems and perimeter security as per company requirements

## Testing and Quality Assurance

### Browser Testing
Test across major browsers:
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (legacy support)

### Responsive Testing
- Mobile: 320px-768px
- Tablet: 768px-1024px  
- Desktop: 1024px+

### Performance Considerations
- Images should be optimized for web delivery
- CSS and JavaScript are already minified for production
- Use lazy loading for images with `data-src` attributes
- Font Awesome is loaded from CDN for caching benefits

## Key Features

### Logo Integration
- Company logo is integrated into the navigation header across all pages
- Logo image should be placed in the `images/` directory as `logo.png`
- CSS styling supports responsive logo display alongside company name

### Support Integration
- "Get Support" button on homepage redirects to `https://support.semanticssolutions.com`
- Contact forms are configured to send inquiries to `info@semanticssolutions.com`
- Support contact information is consistently displayed across pages

### AMC Services
- AMC page uses a contact-first approach instead of fixed pricing plans
- Custom AMC solutions are emphasized with direct contact options
- Phone number links are clickable for immediate contact

## Future Enhancement Areas

Based on the README.md, potential areas for development:
- Blog section integration
- Client testimonials system
- Product gallery with specifications
- Online quotation system
- Live chat integration
- Google Maps integration for office location
- SEO improvements with structured data markup
