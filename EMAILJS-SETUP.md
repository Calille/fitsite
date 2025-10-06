# 📧 EmailJS Setup Guide

## 🎯 **What This Does:**
- **Quiz on `/menopause-way` page** will send emails via EmailJS (client-side)
- **Contact form** remains as simulation (no real emails)
- **Works on static sites** like cPanel hosting

## 🚀 **Setup Steps:**

### 1. **Create EmailJS Account**
1. Go to: https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### 2. **Add Email Service**
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**

### 3. **Create Email Templates**
Create **2 templates** in EmailJS dashboard:

#### **Template 1: Quiz Results**
- **Template ID**: `quiz_results` (or any name you prefer)
- **Subject**: `Your Fat-Loss Blocker Results + 3-Step Fix`
- **Content**: 
```
Hi {{first_name}},

Thank you for completing the quiz! Here are your results:

Sleep & Recovery: {{q1}}
Protein Intake: {{q2}}
Strength Training: {{q3}}
Energy Balance: {{q4}}
Stress Management: {{q5}}
Daily Movement: {{q6}}
Nutrition Consistency: {{q7}}

Based on your responses, you're an excellent fit for our 8-Week Transformation Programme.

Warm regards,
The Menopause Way Team
```

#### **Template 2: Contact Form** (Optional - for future use)
- **Template ID**: `contact_form`
- **Subject**: `New Contact Form Submission`
- **Content**: 
```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}
```

### 4. **Get Your Credentials**
From EmailJS dashboard, copy:
- **Service ID**: `service_xxxxxxx`
- **Public Key**: `your_public_key_here`
- **Template IDs**: `template_xxxxxxx`

### 5. **Update Configuration**
Open `src/lib/emailjs.ts` and replace:

```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Your service ID
const EMAILJS_TEMPLATE_ID_QUIZ = 'template_xxxxxxx'; // Quiz template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Your public key
```

### 6. **Test the Setup**
1. Run: `npm run dev`
2. Go to: `http://localhost:3000/menopause-way`
3. Wait 5 seconds for quiz popup
4. Complete the quiz
5. Check your email!

## ✅ **What Works After Setup:**
- ✅ Quiz emails sent to user + CC to will@coachwill.co.uk
- ✅ Works on static sites (cPanel, Netlify, Vercel)
- ✅ No server-side code needed
- ✅ Free tier: 200 emails/month

## 🔧 **Troubleshooting:**
- **"EmailJS not defined"**: Check if public key is correct
- **"Template not found"**: Verify template ID matches exactly
- **"Service not found"**: Check service ID is correct
- **No emails received**: Check spam folder, verify email service setup

## 📝 **Next Steps:**
1. Set up EmailJS account and templates
2. Update `src/lib/emailjs.ts` with your credentials
3. Test the quiz functionality
4. Deploy to cPanel - emails will work!
