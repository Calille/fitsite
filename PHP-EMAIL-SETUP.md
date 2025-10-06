# 📧 PHP Email Setup Guide

## 🎯 **What This Does:**
- **Generates personalized emails** based on quiz answers
- **Uses your existing SMTP credentials** (no new accounts needed)
- **Works on cPanel hosting** (static sites)
- **Dynamic content** that changes based on user responses

## 🚀 **Setup Steps:**

### 1. **Download PHPMailer**
You need PHPMailer for reliable email delivery. Choose one option:

#### **Option A: Manual Download (Recommended)**
1. Go to: https://github.com/PHPMailer/PHPMailer/releases
2. Download the latest ZIP file
3. Extract to your project root
4. Rename folder to `PHPMailer`

#### **Option B: Use the Download Script**
1. Upload `download-phpmailer.php` to your cPanel
2. Run it once: `php download-phpmailer.php`
3. Delete the script after use

### 2. **Upload Files to cPanel**
Upload these files to your cPanel `public_html` directory:
- `send-quiz-email.php`
- `PHPMailer/` folder (with all PHPMailer files)

### 3. **Test the Setup**
1. Go to your website: `https://yoursite.com/menopause-way`
2. Wait 5 seconds for quiz popup
3. Complete the quiz with your email
4. Check your inbox for personalized results!

## 🎨 **How It Works:**

### **Dynamic Email Generation:**
The PHP file analyzes each quiz answer and generates personalized advice:

#### **Sleep Quality (Q1):**
- **"Poor sleep"** → "Your sleep quality is significantly impacting your hormones. Focus on: 1) Consistent 10pm bedtime, 2) Cool bedroom (18-20°C), 3) No screens 1 hour before bed."
- **"Good sleep"** → "Excellent! Your sleep foundation is solid. Keep prioritizing 7-9 hours nightly."

#### **Protein Intake (Q2):**
- **"Low protein"** → "Increasing protein to 1.6g per kg bodyweight will boost your metabolism by 15-30%. Add protein to every meal: eggs, Greek yogurt, chicken, fish."
- **"Adequate protein"** → "Great protein intake! Focus on timing: 30g within 1 hour of waking, and 20-30g every 3-4 hours."

#### **Strength Training (Q3):**
- **"Never/rarely"** → "Strength training is ESSENTIAL for women 40+. Start with 2x per week, 30 minutes. Focus on squats, deadlifts, push-ups, rows."
- **"Regular training"** → "Excellent! Keep progressing with heavier weights or more reps. Add 1-2 more sessions if possible."

### **Priority System:**
- 🔴 **CRITICAL** - Must address immediately
- 🟠 **HIGH** - Important for results
- 🟢 **MAINTAIN** - Keep doing what you're doing
- 🔵 **OPTIMIZE** - Fine-tune for better results

## 📧 **Email Features:**

### **Personalized Content:**
- ✅ **Custom advice** based on each answer
- ✅ **Priority levels** for each area
- ✅ **Impact statements** showing potential results
- ✅ **Professional HTML design** with your branding
- ✅ **Quiz answers included** for reference

### **Email Delivery:**
- ✅ **Uses your existing SMTP** (smtp.livemail.co.uk)
- ✅ **Reliable delivery** to inbox (not spam)
- ✅ **CC to will@coachwill.co.uk** for lead tracking
- ✅ **Professional sender** (The Menopause Way)

## 🔧 **File Structure:**
```
public_html/
├── send-quiz-email.php          # Main PHP file
├── PHPMailer/                   # PHPMailer library
│   ├── PHPMailer.php
│   ├── SMTP.php
│   └── Exception.php
└── your-website-files/
```

## ✅ **What Happens When Someone Takes the Quiz:**

1. **User completes quiz** on menopause-way page
2. **Form submits to PHP file** with all answers
3. **PHP analyzes answers** and generates personalized advice
4. **Email created** with dynamic content based on responses
5. **Email sent** to user + CC to will@coachwill.co.uk
6. **User receives** personalized results with actionable advice

## 🚨 **Troubleshooting:**

### **"PHPMailer not found"**
- Make sure PHPMailer folder is uploaded correctly
- Check file permissions (755 for folders, 644 for files)

### **"Email not sending"**
- Verify SMTP credentials in the PHP file
- Check cPanel email settings
- Test with a simple email first

### **"Quiz not submitting"**
- Make sure `send-quiz-email.php` is in the root directory
- Check browser console for errors
- Verify form data is being sent correctly

## 🎯 **Benefits Over EmailJS:**

- ✅ **No monthly limits** (EmailJS: 200/month)
- ✅ **Full control** over email content
- ✅ **Dynamic personalization** based on answers
- ✅ **Uses your existing email** setup
- ✅ **Professional delivery** through your domain
- ✅ **Works on static sites** (cPanel hosting)

## 📝 **Next Steps:**
1. Download and upload PHPMailer
2. Upload `send-quiz-email.php` to cPanel
3. Test the quiz functionality
4. Enjoy personalized email results! 🎉
