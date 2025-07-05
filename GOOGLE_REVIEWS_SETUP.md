# Google Reviews Setup Instructions

Your website now automatically fetches and displays Google Reviews! Here's how to set it up:

## 🔧 Quick Setup

### Step 1: Get Your Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Places API" 
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### Step 2: Find Your Google Place ID

You have a direct review link: https://g.page/r/Ccotkqk7ORnPEAE/review

To get your Place ID for the API:
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id-finder)
2. Search for "TP Health and Fitness" or use your business address
3. Copy the Place ID (starts with "ChIJ...")

**Alternative**: You can also extract it from your Google Business Manager or use the URL above to find your listing.

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Places API Configuration
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
```

### Step 4: Restart Your Development Server

```bash
npm run dev
```

## 📋 Important Notes

### API Limitations
- **Free Tier**: 17,000 requests per month
- **Review Limit**: Only shows 5 most recent reviews (Google limitation)
- **Cost**: $0.017 per request after free tier

### Fallback Behavior
- If API is not configured, shows placeholder reviews
- If API fails, shows cached fallback reviews
- No errors will break your site

### Security
- API key is safe to use in client-side code (it's read-only)
- Restrict your API key to your domain in Google Cloud Console

## 🛠️ Advanced Configuration

### Restrict API Key (Recommended)
1. Go to Google Cloud Console → Credentials
2. Click on your API key
3. Under "Website restrictions", add your domain
4. Save changes

### Monitor Usage
- Check usage in Google Cloud Console
- Set up billing alerts
- Monitor for unusual activity

## 🔍 Troubleshooting

### Reviews Not Loading?
1. Check browser console for errors
2. Verify API key is correct
3. Ensure Places API is enabled
4. Check if Place ID is correct

### API Quota Exceeded?
1. Check usage in Google Cloud Console
2. Consider upgrading to paid plan
3. Implement caching (coming soon)

### Wrong Reviews Showing?
1. Double-check your Place ID
2. Ensure it matches your Google Business listing

## 🎯 What's Included

- ✅ Automatic review fetching
- ✅ Real-time Google ratings
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ Analytics tracking
- ✅ Fallback content

## 📞 Need Help?

If you need assistance with setup, the reviews should work automatically once you add your API credentials. The system is designed to fail gracefully and show fallback content if there are any issues. 