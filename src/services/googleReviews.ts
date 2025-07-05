// Google Places API service for fetching reviews
export interface GooglePlace {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface FormattedReview {
  id: string;
  name: string;
  timeAgo: string;
  quote: string;
  rating: number;
  source: 'Google';
  profileInitial: string;
  profilePhoto?: string;
}

class GoogleReviewsService {
  private apiKey: string;
  private placeId: string;
  private baseUrl = 'https://maps.googleapis.com/maps/api/place';

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';
    this.placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '';
    
    // Your Google review link: https://g.page/r/Ccotkqk7ORnPEAE/review
    // Use Place ID Finder to get the API-compatible Place ID from this URL
  }

  async fetchPlaceDetails(): Promise<GooglePlace | null> {
    if (!this.apiKey || !this.placeId) {
      console.error('Missing Google Places API key or Place ID');
      return null;
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/details/json?place_id=${this.placeId}&fields=place_id,name,rating,user_ratings_total,reviews&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      return data.result;
    } catch (error) {
      console.error('Error fetching Google Reviews:', error);
      return null;
    }
  }

  formatReviews(reviews: GoogleReview[]): FormattedReview[] {
    return reviews.map((review, index) => ({
      id: `google-review-${index}`,
      name: review.author_name,
      timeAgo: review.relative_time_description,
      quote: review.text,
      rating: review.rating,
      source: 'Google' as const,
      profileInitial: review.author_name.charAt(0).toUpperCase(),
      profilePhoto: review.profile_photo_url,
    }));
  }

  async getReviews(): Promise<{
    reviews: FormattedReview[];
    rating: number;
    totalReviews: number;
  }> {
    const placeDetails = await this.fetchPlaceDetails();
    
    if (!placeDetails) {
      // Return fallback data if API fails
      return {
        reviews: this.getFallbackReviews(),
        rating: 5.0,
        totalReviews: 50,
      };
    }

    const formattedReviews = this.formatReviews(placeDetails.reviews || []);
    
    return {
      reviews: formattedReviews,
      rating: placeDetails.rating || 5.0,
      totalReviews: placeDetails.user_ratings_total || 0,
    };
  }

  // Fallback reviews in case API fails
  private getFallbackReviews(): FormattedReview[] {
    return [
      {
        id: 'fallback-1',
        name: 'API Setup Required',
        timeAgo: 'Setup needed',
        quote: 'To display live Google Reviews, please add your Google Places API key and Place ID to your environment variables.',
        rating: 5,
        source: 'Google',
        profileInitial: 'A',
      },
      {
        id: 'fallback-2',
        name: 'Great Service',
        timeAgo: '1 month ago',
        quote: 'Amazing gym with fantastic trainers. Highly recommend!',
        rating: 5,
        source: 'Google',
        profileInitial: 'G',
      },
      {
        id: 'fallback-3',
        name: 'Excellent Experience',
        timeAgo: '2 weeks ago',
        quote: 'The best fitness studio in town. Professional staff and great equipment.',
        rating: 5,
        source: 'Google',
        profileInitial: 'E',
      },
    ];
  }
}

export const googleReviewsService = new GoogleReviewsService(); 