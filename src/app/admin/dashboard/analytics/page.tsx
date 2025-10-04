'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { 
  FaArrowLeft,
  FaEye,
  FaUsers,
  FaMousePointer,
  FaChartLine,
  FaCalendarAlt,
  FaGlobe,
  FaClock,
  FaDownload,
  FaFilter,
  FaArrowUp,
  FaArrowDown,
  FaChartBar
} from 'react-icons/fa';
import Link from 'next/link';

export default function AnalyticsPage() {
  const { user } = useAuth();
  const { getStats, getBusinessMetrics, trackInteraction } = useAnalytics();
  const [stats, setStats] = useState<any>(null);
  const [businessMetrics, setBusinessMetrics] = useState<any>(null);
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('pageViews');

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Get percentage change
  const getPercentageChange = (current: number, previous: number) => {
    if (previous === 0) return '0';
    return ((current - previous) / previous * 100).toFixed(1);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short'
    });
  };

  // Load analytics data
  useEffect(() => {
    const websiteStats = getStats();
    const businessData = getBusinessMetrics();
    setStats(websiteStats);
    setBusinessMetrics(businessData);
  }, [getStats, getBusinessMetrics]);

  // Track page view
  useEffect(() => {
    trackInteraction('analytics_page_view');
  }, [trackInteraction]);

  if (!stats || !businessMetrics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#56b5bd]"></div>
      </div>
    );
  }

  const timeRangeOptions = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: 'all', label: 'All time' }
  ];

  const metricOptions = [
    { value: 'pageViews', label: 'Page Views', icon: FaEye },
    { value: 'visitors', label: 'Unique Visitors', icon: FaUsers },
    { value: 'interactions', label: 'User Interactions', icon: FaMousePointer },
    { value: 'sessions', label: 'Sessions', icon: FaClock }
  ];

  // Calculate daily growth
  const recentStats = stats.dailyStats.slice(-7);
  const todayViews = recentStats[recentStats.length - 1]?.views || 0;
  const yesterdayViews = recentStats[recentStats.length - 2]?.views || 0;
  const dailyGrowth = getPercentageChange(todayViews, yesterdayViews);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                href="/admin/dashboard"
                className="flex items-center text-gray-600 hover:text-[#56b5bd] mr-4"
              >
                <FaArrowLeft className="mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Website Analytics</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Logged in as {user?.name || 'Admin'}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics Overview</h2>
            <p className="text-gray-600">Comprehensive website performance metrics and insights</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400" />
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
              >
                {timeRangeOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <button className="flex items-center px-4 py-2 bg-[#56b5bd] text-white rounded-md hover:bg-[#45a4ac] transition-colors">
              <FaDownload className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Page Views</p>
                <p className="text-3xl font-bold text-gray-900">{formatNumber(stats.totalPageViews)}</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="text-green-500 text-sm mr-1" />
                  <span className="text-green-500 text-sm font-medium">+12.5%</span>
                  <span className="text-gray-500 text-sm ml-1">vs last period</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <FaEye className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-3xl font-bold text-gray-900">{formatNumber(stats.uniqueVisitors)}</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="text-green-500 text-sm mr-1" />
                  <span className="text-green-500 text-sm font-medium">+8.3%</span>
                  <span className="text-gray-500 text-sm ml-1">vs last period</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <FaUsers className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Session Time</p>
                <p className="text-3xl font-bold text-gray-900">{stats.averageSessionTime}min</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="text-green-500 text-sm mr-1" />
                  <span className="text-green-500 text-sm font-medium">+5.2%</span>
                  <span className="text-gray-500 text-sm ml-1">vs last period</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <FaClock className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                <p className="text-3xl font-bold text-gray-900">24.7%</p>
                <div className="flex items-center mt-1">
                  <FaArrowDown className="text-green-500 text-sm mr-1" />
                  <span className="text-green-500 text-sm font-medium">-2.1%</span>
                  <span className="text-gray-500 text-sm ml-1">vs last period</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <FaChartLine className="text-orange-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Page Views Chart */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Page Views Trend</h3>
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                >
                  {metricOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6">
              {/* Simple bar chart representation */}
              <div className="space-y-3">
                {stats.dailyStats.slice(-7).map((day: any, index: number) => {
                  const maxViews = Math.max(...stats.dailyStats.slice(-7).map((d: any) => d.views));
                  const barWidth = (day.views / maxViews) * 100;
                  
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-16 text-sm text-gray-600 text-right mr-4">
                        {formatDate(day.date)}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                        <div
                          className="bg-[#56b5bd] h-4 rounded-full transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        ></div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-800">
                          {formatNumber(day.views)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Top Pages Performance */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartBar className="mr-2 text-[#56b5bd]" />
                Page Performance
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.popularPages.slice(0, 10).map((page: any, index: number) => {
                  const maxViews = stats.popularPages[0]?.views || 1;
                  const barWidth = (page.views / maxViews) * 100;
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-[#56b5bd] text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                            {index + 1}
                          </div>
                          <span className="font-medium text-gray-900 text-sm">
                            {page.path === '/' ? 'Homepage' : page.path}
                          </span>
                        </div>
                        <span className="text-gray-600 font-semibold text-sm">
                          {formatNumber(page.views)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources & User Behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaGlobe className="mr-2 text-[#56b5bd]" />
                Traffic Sources
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stats.topReferrers.map((referrer: any, index: number) => {
                  const percentage = ((referrer.count / stats.totalPageViews) * 100).toFixed(1);
                  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'];
                  
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-full mr-3`}></div>
                        <span className="font-medium text-gray-900 text-sm">{referrer.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-600 font-semibold text-sm">
                          {formatNumber(referrer.count)}
                        </div>
                        <div className="text-gray-400 text-xs">{percentage}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* User Interactions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaMousePointer className="mr-2 text-[#56b5bd]" />
                User Interactions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {['button_click', 'form_submit', 'navigation', 'scroll', 'download'].map((interaction, index) => {
                  const count = stats.userInteractions.filter((i: any) => i.type === interaction).length;
                  const maxCount = Math.max(...['button_click', 'form_submit', 'navigation', 'scroll', 'download'].map(
                    type => stats.userInteractions.filter((i: any) => i.type === type).length
                  ));
                  const barWidth = count > 0 ? (count / maxCount) * 100 : 5;
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 text-sm capitalize">
                          {interaction.replace('_', ' ')}
                        </span>
                        <span className="text-gray-600 font-semibold text-sm">
                          {formatNumber(count)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#56b5bd] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartLine className="mr-2 text-[#56b5bd]" />
                Real-time Activity
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#56b5bd] mb-1">
                    {formatNumber(businessMetrics.todayViews)}
                  </div>
                  <div className="text-sm text-gray-600">Views Today</div>
                  <div className="flex items-center justify-center mt-1">
                    {parseFloat(dailyGrowth) > 0 ? (
                      <FaArrowUp className="text-green-500 text-xs mr-1" />
                    ) : (
                      <FaArrowDown className="text-red-500 text-xs mr-1" />
                    )}
                    <span className={`text-xs ${parseFloat(dailyGrowth) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {Math.abs(parseFloat(dailyGrowth))}% from yesterday
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Recent Visits</h4>
                  <div className="space-y-2">
                    {stats.recentVisits.slice(0, 3).map((visit: any, index: number) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">
                          {visit.path === '/' ? 'Homepage' : visit.path}
                        </span>
                        <span className="text-gray-500">
                          {new Date(visit.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Performance Summary</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#56b5bd] mb-1">
                  {businessMetrics.engagementRate}%
                </div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
                <div className="text-xs text-gray-500 mt-1">Interactions per visit</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {businessMetrics.conversionRate}%
                </div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
                <div className="text-xs text-gray-500 mt-1">Goal completions</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  +{businessMetrics.monthlyGrowth}%
                </div>
                <div className="text-sm text-gray-600">Monthly Growth</div>
                <div className="text-xs text-gray-500 mt-1">Visitor increase</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {businessMetrics.averageRating}/5
                </div>
                <div className="text-sm text-gray-600">User Rating</div>
                <div className="text-xs text-gray-500 mt-1">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 