# Logo and Favicon Setup Instructions

## Files to Replace

### 1. Logo Image
- **File Path**: `images/logo.png`
- **Replace with**: The full-size logo image you provided (with the circular design and "SEMANTICS SOLUTIONS" text)
- **Recommended Size**: 300x300 pixels or larger (will be automatically scaled)
- **Format**: PNG (supports transparency)

### 2. Favicon
- **File Path**: `favicon.ico`
- **Replace with**: The favicon version of your logo (circular icon only)
- **Recommended Size**: 32x32 pixels (standard favicon size)
- **Format**: ICO format preferred, but PNG also works

## Quick Setup Steps

1. **Save the Logo**:
   - Save the full logo image as `images/logo.png`
   - This will be used in the navigation header across all pages

2. **Save the Favicon**:
   - Save the circular icon (without text) as `favicon.ico` in the root directory
   - This will appear in browser tabs and bookmarks

3. **Test the Website**:
   - Open `index.html` in your browser
   - Check that the logo appears in the navigation
   - Check that the favicon appears in the browser tab

## Technical Details

- All HTML pages are already configured to use these files
- Logo has fallback to support.semanticssolutions.com if local file is missing
- Favicon is configured with proper MIME types for broad browser support
- Logo will automatically scale to 60px height with maintained aspect ratio

## Current Implementation

The logo is used in:
- ✅ Main navigation header (all pages)
- ✅ Apple touch icon for mobile devices
- ✅ Favicon for browser tabs

All pages are ready - just replace the placeholder files!
