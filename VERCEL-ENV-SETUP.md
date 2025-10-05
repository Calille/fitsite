# Vercel Environment Variables Setup

## 🔧 Required Environment Variables

To make the quiz work on Vercel, you need to add these environment variables in your Vercel project settings:

### 1. Go to Vercel Dashboard
- Navigate to your project: https://vercel.com/dashboard
- Click on your `fitsite` project
- Go to **Settings** → **Environment Variables**

### 2. Add Email Configuration

Add these 4 variables:

| Variable Name | Example Value | Description |
|--------------|---------------|-------------|
| `EMAIL_HOST` | `smtp.gmail.com` | Your SMTP server |
| `EMAIL_PORT` | `587` | SMTP port (usually 587 or 465) |
| `EMAIL_USER` | `your-email@gmail.com` | Your email address |
| `EMAIL_PASSWORD` | `your-app-password` | Gmail App Password (see below) |

### 3. Add Momence Configuration (Optional - currently disabled)

| Variable Name | Value |
|--------------|-------|
| `MOMENCE_API_KEY` | `q27n0m0XWP` |
| `MOMENCE_HOST_ID` | `55732` |
| `MOMENCE_SOURCE_ID` | `92546` |

---

## 📧 Getting a Gmail App Password

If you're using Gmail, you **cannot** use your regular Gmail password. You need to create an **App Password**:

### Steps:

1. Go to: https://myaccount.google.com/apppasswords
2. You may need to enable 2-Step Verification first
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Name it: "Fitsite Quiz"
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
8. **Paste this password in Vercel** as `EMAIL_PASSWORD` (without spaces)

---

## ✅ After Adding Variables

1. **Redeploy your app** in Vercel:
   - Go to **Deployments** tab
   - Click the **...** menu on latest deployment
   - Click **Redeploy**

2. **Test the quiz** again - it should now work!

---

## 🐛 Troubleshooting

### "Failed to execute 'json' on 'Response': Unexpected end of JSON input"
✅ **FIXED!** This error is now handled gracefully. If email isn't configured, you'll see a clear error message.

### Email Not Sending
- Check that all 4 email variables are set correctly in Vercel
- Make sure you're using an **App Password**, not your regular Gmail password
- Try redeploying after adding variables

### Still Having Issues?
Check the Vercel **Function Logs**:
1. Go to your Vercel project
2. Click **Deployments**
3. Click on the latest deployment
4. Click **Functions** tab
5. Look for `/api/sendEmail` logs

---

## 🔐 Security Note

Never commit your `.env.local` file to Git! It's already in `.gitignore` to keep your credentials safe.
