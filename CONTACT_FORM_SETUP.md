# Contact Form Setup Instructions

## 🚀 Your website is live! 
**URL**: https://vickyparihar.github.io/semanticssolutions-website/

## ❌ Current Issue
The contact form shows a success message but doesn't actually send emails because static websites (GitHub Pages) can't process server-side code.

## ✅ Solution: Formspree Integration

### Step 1: Create Formspree Account
1. Go to **https://formspree.io**
2. Sign up for a free account (allows 50 submissions per month)
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. **Form Name**: `Semantics Solutions Contact Form`
3. **Email**: `info@semanticssolutions.com` (where you want to receive emails)
4. Click "Create Form"

### Step 3: Get Your Form ID
After creating the form, you'll see a form endpoint like:
```
https://formspree.io/f/YOUR_FORM_ID
```
**Copy the YOUR_FORM_ID part** (it looks like: `xpznvqko` or similar)

### Step 4: Update Your Website
1. Open `pages/contact.html` in your code editor
2. Find this line (around line 132):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   <form action="https://formspree.io/f/xpznvqko" method="POST" id="contactForm">
   ```

### Step 5: Deploy Updated Code
```bash
git add .
git commit -m "Update: Connect contact form to Formspree"
git push
```

### Step 6: Test Your Contact Form
1. Wait 2-3 minutes for GitHub Pages to update
2. Go to your website: https://vickyparihar.github.io/semanticssolutions-website/pages/contact.html
3. Fill out and submit the contact form
4. Check your email at `info@semanticssolutions.com`

## 🎯 What Will Happen

### Before Fix:
- ❌ Form shows success message
- ❌ No email is actually sent
- ❌ You don't receive inquiries

### After Fix:
- ✅ Form submits to Formspree
- ✅ You receive emails at info@semanticssolutions.com
- ✅ Customer gets confirmation
- ✅ All form data is properly captured

## 📧 Email Format You'll Receive

When someone submits your contact form, you'll receive an email like:

```
From: noreply@formspree.io
To: info@semanticssolutions.com
Subject: New submission from Contact Form

Name: John Doe
Email: john@example.com
Phone: +91 98765 43210
Company: ABC Technologies
Service: Hardware Solutions
Budget: ₹1,00,000 - ₹5,00,000
Timeline: Soon (Within 1 month)
Message: Hi, I need 10 computers for my office. Please provide a quote.
Newsletter: Yes
```

## ⚙️ Formspree Features (Free Plan)

- ✅ **50 submissions/month** (perfect for getting started)
- ✅ **Spam filtering** built-in
- ✅ **Email notifications** to your inbox
- ✅ **Form validation** and error handling
- ✅ **Mobile responsive** forms
- ✅ **No coding required** on server-side

## 🔧 Advanced Configuration (Optional)

### Custom Thank You Page
In your Formspree form settings, you can set a custom thank you page:
- **Redirect URL**: `https://vickyparihar.github.io/semanticssolutions-website/pages/contact.html?success=true`

### Auto-Reply to Customers
Set up an auto-reply email that gets sent to customers when they submit the form.

### Webhook Integration
Connect to other services like Slack, Discord, or your CRM.

## 🚨 Important Notes

1. **Free Plan Limits**: 50 submissions per month
2. **Upgrade Options**: Paid plans available for higher volume
3. **Spam Protection**: Formspree has built-in spam filtering
4. **Data Security**: All data is transmitted securely over HTTPS

## 🔄 Maintenance

### Monitoring Submissions
- Check your Formspree dashboard regularly
- Monitor your email for new inquiries
- Respond promptly to maintain good customer service

### If You Hit the Limit
- Upgrade to paid plan ($10/month for 1000 submissions)
- Or use alternative services like Netlify Forms, EmailJS

## ✅ Success Checklist

- [ ] Created Formspree account
- [ ] Created new form pointing to info@semanticssolutions.com
- [ ] Copied form ID
- [ ] Updated contact.html with correct form ID
- [ ] Pushed changes to GitHub
- [ ] Tested contact form
- [ ] Received test email successfully

## 🆘 Troubleshooting

### Form Not Sending Emails
1. Check if form ID is correct
2. Verify email address in Formspree dashboard
3. Check spam folder
4. Test with different email

### Website Not Updating
1. Wait 5-10 minutes for GitHub Pages to deploy
2. Clear browser cache
3. Check GitHub repository for latest changes

---

**Once set up, your contact form will work perfectly and you'll receive all customer inquiries directly in your inbox!** 📧
