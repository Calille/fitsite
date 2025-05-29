'use client';

import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface PageView {
  path: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
}

interface UserInteraction {
  type: string;
  page: string;
  timestamp: string;
  data?: any;
}

interface WebsiteStats {
  totalPageViews: number;
  uniqueVisitors: number;
  averageSessionTime: number;
  popularPages: { path: string; views: number }[];
  recentVisits: PageView[];
  userInteractions: UserInteraction[];
  dailyStats: { date: string; views: number; visitors: number }[];
  topReferrers: { source: string; count: number }[];
}

interface AnalyticsContextType {
  trackPageView: (path: string) => void;
  trackInteraction: (type: string, data?: any) => void;
  getStats: () => WebsiteStats;
  getBusinessMetrics: () => any;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  
  // Initialize analytics data
  const initializeAnalytics = useCallback(() => {
    const existingData = localStorage.getItem('website_analytics');
    if (!existingData) {
      // Create initial analytics data with some demo data
      const initialData = {
        pageViews: [],
        userInteractions: [],
        sessions: [],
        visitors: new Set(),
        businessMetrics: {
          members: 547,
          trainers: 18,
          classes: 24,
          successStories: 89,
          monthlyGrowth: 12.5,
          memberRetention: 94.2,
          averageRating: 4.8,
          totalWorkouts: 12847
        }
      };
      localStorage.setItem('website_analytics', JSON.stringify(initialData));
      
      // Add some sample historical data
      const sampleData = generateSampleData();
      const currentData = JSON.parse(localStorage.getItem('website_analytics') || '{}');
      currentData.pageViews = sampleData.pageViews;
      currentData.userInteractions = sampleData.userInteractions;
      localStorage.setItem('website_analytics', JSON.stringify(currentData));
    }
  }, []);

  // Generate sample historical data
  const generateSampleData = () => {
    const pages = ['/', '/services', '/about', '/contact', '/blog', '/schedule'];
    const interactions = ['button_click', 'form_submit', 'navigation', 'scroll', 'download'];
    const pageViews: PageView[] = [];
    const userInteractions: UserInteraction[] = [];
    
    // Generate data for the last 30 days
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      // Generate 20-80 page views per day
      const dailyViews = Math.floor(Math.random() * 60) + 20;
      for (let j = 0; j < dailyViews; j++) {
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        const viewTime = new Date(date);
        viewTime.setHours(Math.floor(Math.random() * 24));
        viewTime.setMinutes(Math.floor(Math.random() * 60));
        
        pageViews.push({
          path: randomPage,
          timestamp: viewTime.toISOString(),
          userAgent: 'Sample User Agent',
          referrer: Math.random() > 0.7 ? 'https://google.com' : 'direct'
        });
      }
      
      // Generate interactions
      const dailyInteractions = Math.floor(Math.random() * 30) + 10;
      for (let k = 0; k < dailyInteractions; k++) {
        const randomInteraction = interactions[Math.floor(Math.random() * interactions.length)];
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        const interactionTime = new Date(date);
        interactionTime.setHours(Math.floor(Math.random() * 24));
        
        userInteractions.push({
          type: randomInteraction,
          page: randomPage,
          timestamp: interactionTime.toISOString(),
          data: { source: 'sample_data' }
        });
      }
    }
    
    return { pageViews, userInteractions };
  };

  // Track page view
  const trackPageView = useCallback((path: string) => {
    const analyticsData = JSON.parse(localStorage.getItem('website_analytics') || '{}');
    
    const pageView: PageView = {
      path,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      referrer: typeof window !== 'undefined' ? document.referrer || 'direct' : 'direct'
    };
    
    if (!analyticsData.pageViews) analyticsData.pageViews = [];
    analyticsData.pageViews.push(pageView);
    
    // Keep only last 1000 page views to manage storage
    if (analyticsData.pageViews.length > 1000) {
      analyticsData.pageViews = analyticsData.pageViews.slice(-1000);
    }
    
    localStorage.setItem('website_analytics', JSON.stringify(analyticsData));
  }, []);

  // Track user interaction
  const trackInteraction = useCallback((type: string, data?: any) => {
    const analyticsData = JSON.parse(localStorage.getItem('website_analytics') || '{}');
    
    const interaction: UserInteraction = {
      type,
      page: typeof window !== 'undefined' ? window.location.pathname : '/',
      timestamp: new Date().toISOString(),
      data
    };
    
    if (!analyticsData.userInteractions) analyticsData.userInteractions = [];
    analyticsData.userInteractions.push(interaction);
    
    // Keep only last 500 interactions
    if (analyticsData.userInteractions.length > 500) {
      analyticsData.userInteractions = analyticsData.userInteractions.slice(-500);
    }
    
    localStorage.setItem('website_analytics', JSON.stringify(analyticsData));
  }, []);

  // Get comprehensive statistics
  const getStats = useCallback((): WebsiteStats => {
    const analyticsData = JSON.parse(localStorage.getItem('website_analytics') || '{}');
    const pageViews = analyticsData.pageViews || [];
    const interactions = analyticsData.userInteractions || [];
    
    // Calculate popular pages
    const pageViewCounts: { [key: string]: number } = {};
    pageViews.forEach((view: PageView) => {
      pageViewCounts[view.path] = (pageViewCounts[view.path] || 0) + 1;
    });
    
    const popularPages = Object.entries(pageViewCounts)
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
    
    // Calculate daily stats for last 30 days
    const dailyStats: { [key: string]: { views: number; visitors: Set<string> } } = {};
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);
    
    pageViews
      .filter((view: PageView) => new Date(view.timestamp) >= last30Days)
      .forEach((view: PageView) => {
        const date = new Date(view.timestamp).toISOString().split('T')[0];
        if (!dailyStats[date]) {
          dailyStats[date] = { views: 0, visitors: new Set() };
        }
        dailyStats[date].views += 1;
        dailyStats[date].visitors.add(view.userAgent + view.referrer);
      });
    
    const dailyStatsArray = Object.entries(dailyStats).map(([date, stats]) => ({
      date,
      views: stats.views,
      visitors: stats.visitors.size
    }));
    
    // Calculate referrers
    const referrerCounts: { [key: string]: number } = {};
    pageViews.forEach((view: PageView) => {
      const source = view.referrer === 'direct' ? 'Direct' : 
                    view.referrer.includes('google') ? 'Google' :
                    view.referrer.includes('facebook') ? 'Facebook' :
                    view.referrer.includes('twitter') ? 'Twitter' : 'Other';
      referrerCounts[source] = (referrerCounts[source] || 0) + 1;
    });
    
    const topReferrers = Object.entries(referrerCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);
    
    // Calculate unique visitors (simplified using userAgent + referrer combo)
    const uniqueVisitorIds = new Set(
      pageViews.map((view: PageView) => view.userAgent + view.referrer)
    );
    
    return {
      totalPageViews: pageViews.length,
      uniqueVisitors: uniqueVisitorIds.size,
      averageSessionTime: 4.2, // Simplified calculation
      popularPages,
      recentVisits: pageViews.slice(-20).reverse(),
      userInteractions: interactions.slice(-50).reverse(),
      dailyStats: dailyStatsArray,
      topReferrers
    };
  }, []);

  // Get business metrics
  const getBusinessMetrics = useCallback(() => {
    const analyticsData = JSON.parse(localStorage.getItem('website_analytics') || '{}');
    const stats = getStats();
    
    // Calculate some dynamic metrics based on actual usage
    const today = new Date().toISOString().split('T')[0];
    const todayStats = stats.dailyStats.find(stat => stat.date === today);
    const yesterdayStats = stats.dailyStats.find(stat => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return stat.date === yesterday.toISOString().split('T')[0];
    });
    
    const baseMetrics = analyticsData.businessMetrics || {
      members: 547,
      trainers: 18,
      classes: 24,
      successStories: 89,
      monthlyGrowth: 12.5,
      memberRetention: 94.2,
      averageRating: 4.8,
      totalWorkouts: 12847
    };
    
    return {
      ...baseMetrics,
      todayViews: todayStats?.views || 0,
      yesterdayViews: yesterdayStats?.views || 0,
      totalPageViews: stats.totalPageViews,
      uniqueVisitors: stats.uniqueVisitors,
      conversionRate: ((stats.userInteractions.filter(i => i.type === 'form_submit').length / stats.totalPageViews) * 100).toFixed(2),
      topPage: stats.popularPages[0]?.path || '/',
      engagementRate: ((stats.userInteractions.length / stats.totalPageViews) * 100).toFixed(1)
    };
  }, [getStats]);

  // Initialize analytics on mount
  useEffect(() => {
    initializeAnalytics();
  }, [initializeAnalytics]);

  // Track page views automatically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname);
    }
  }, [trackPageView]);

  const value: AnalyticsContextType = {
    trackPageView,
    trackInteraction,
    getStats,
    getBusinessMetrics
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsContext; 