# Quiz Popup Setup Guide

## 🚀 Quick Start

The quiz popup plugin has been successfully installed! Follow these steps to complete the setup.

## 📦 Install Dependencies

First, install the required npm package:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## 🔐 Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration (for sendEmail API)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-app-specific-password

# Momence API Configuration
MOMENCE_API_KEY=your-momence-api-key-here
MOMENCE_HOST_ID=your-momence-host-id
MOMENCE_SOURCE_ID=your-momence-source-id
```

### Email Provider Setup Options:

#### Option 1: Gmail (Recommended for testing)
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password: https://support.google.com/accounts/answer/185833
3. Use the app password as `EMAIL_PASSWORD`

#### Option 2: SendGrid (Recommended for production)
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
```

#### Option 3: Other SMTP providers
Configure according to your provider's SMTP settings.

### Momence API Setup:
1. Log into your Momence dashboard
2. Navigate to Settings > API Keys
3. Generate a new API key
4. Copy the key to `MOMENCE_API_KEY`

**Note:** Consult Momence documentation for the correct API endpoint structure.

## 💻 Usage Examples

### Example 1: Add to Menopause Way Page

Add the quiz popup to your Menopause Way page:

```tsx
'use client';

import { useState } from 'react';
import QuizPopup from '@/components/QuizPopup';

export default function MenopauseWayPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div>
      {/* Your existing page content */}
      
      {/* CTA Button to open quiz */}
      <button
        onClick={() => setIsQuizOpen(true)}
        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-colors"
      >
        Take the Quiz
      </button>

      {/* Quiz Popup */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
```

### Example 2: Auto-popup After Delay

Show the quiz automatically after 30 seconds:

```tsx
'use client';

import { useState, useEffect } from 'react';
import QuizPopup from '@/components/QuizPopup';

export default function MenopauseWayPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    // Show quiz after 30 seconds
    const timer = setTimeout(() => {
      setIsQuizOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Your page content */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
```

### Example 3: Show on Exit Intent

Show quiz when user is about to leave:

```tsx
'use client';

import { useState, useEffect } from 'react';
import QuizPopup from '@/components/QuizPopup';

export default function MenopauseWayPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves from top of viewport
      if (e.clientY <= 0) {
        setIsQuizOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div>
      {/* Your page content */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
```

### Example 4: Show Once Per Session

Only show the quiz once per browser session:

```tsx
'use client';

import { useState, useEffect } from 'react';
import QuizPopup from '@/components/QuizPopup';

export default function MenopauseWayPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    // Check if quiz was already shown in this session
    const quizShown = sessionStorage.getItem('quiz-shown');
    
    if (!quizShown) {
      // Show after 10 seconds
      const timer = setTimeout(() => {
        setIsQuizOpen(true);
        sessionStorage.setItem('quiz-shown', 'true');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      {/* Your page content */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
```

## 🎨 Customization

### Change Quiz Questions

Edit the `questions` array in `/src/components/QuizPopup.tsx`:

```tsx
const questions = [
  {
    question: "Your custom question here?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3"
    ]
  },
  // ... more questions
];
```

### Change Email Template

Edit the HTML template in `/src/app/api/sendEmail/route.ts`.

### Change Colors

The quiz uses Tailwind's cyan color palette. To change:
- Replace `cyan-500` with your preferred color (e.g., `blue-600`, `purple-500`)
- Update gradient colors in the email template

## 🧪 Testing

### Test Email Sending

```bash
curl -X POST http://localhost:3000/api/sendEmail \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "email": "test@example.com",
    "q1": "Answer 1",
    "q2": "Answer 2",
    "q3": "Answer 3",
    "q4": "Answer 4"
  }'
```

### Test Momence Integration

```bash
curl -X POST http://localhost:3000/api/momence \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "email": "test@example.com",
    "q1": "Answer 1",
    "q2": "Answer 2",
    "q3": "Answer 3",
    "q4": "Answer 4"
  }'
```

## 📁 File Structure

```
src/
├── components/
│   └── QuizPopup.tsx          # Main quiz component
├── app/
│   └── api/
│       ├── sendEmail/
│       │   └── route.ts       # Email sending endpoint
│       └── momence/
│           └── route.ts       # Momence API integration
```

## 🔧 Troubleshooting

### Emails not sending
- Check EMAIL_* environment variables are set correctly
- Verify SMTP credentials with your provider
- Check server logs for specific error messages
- Test SMTP connection separately

### Momence integration failing
- Verify MOMENCE_API_KEY is correct
- Check Momence API documentation for correct endpoint structure
- Verify payload format matches Momence requirements
- Check API rate limits

### Quiz not appearing
- Ensure QuizPopup component is imported correctly
- Check browser console for errors
- Verify isOpen state is being set to true

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- Momence API Documentation (check your Momence dashboard)

## 🎉 Ready to Go!

Your quiz popup is now installed and ready to use. Follow the usage examples above to add it to your pages!
