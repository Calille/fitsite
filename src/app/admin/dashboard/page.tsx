'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { 
  FaImages, 
  FaBlog, 
  FaCog, 
  FaPlus, 
  FaUpload, 
  FaUsers, 
  FaChartLine,
  FaClock,
  FaExclamationTriangle,
  FaShieldAlt,
  FaEye,
  FaMousePointer,
  FaCalendarAlt,
  FaGlobe,
  FaStar,
  FaDumbbell,
  FaChartBar,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import Link from 'next/link';

export default function AdminDashboard() {
  const { logout, user, sessionTimeLeft, extendSession } = useAuth();
  const { getStats, getBusinessMetrics, trackInteraction } = useAnalytics();
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [adminActivities, setAdminActivities] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [businessMetrics, setBusinessMetrics] = useState<any>(null);

  // Format time remaining
  const formatTimeRemaining = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Get percentage change
  const getPercentageChange = (current: number, previous: number) => {
    if (previous === 0) return '0';
    return ((current - previous) / previous * 100).toFixed(1);
  };

  // Check for session warning (5 minutes remaining)
  useEffect(() => {
    const warningThreshold = 5 * 60 * 1000; // 5 minutes
    setShowSessionWarning(sessionTimeLeft > 0 && sessionTimeLeft <= warningThreshold);
  }, [sessionTimeLeft]);

  // Load analytics data
  useEffect(() => {
    const websiteStats = getStats();
    const businessData = getBusinessMetrics();
    setStats(websiteStats);
    setBusinessMetrics(businessData);

    // Load admin activities
    const activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
    setAdminActivities(activities.slice(-5).reverse());
  }, [getStats, getBusinessMetrics]);

  // Track dashboard view
  useEffect(() => {
    trackInteraction('admin_dashboard_view');
  }, [trackInteraction]);

  const handleExtendSession = () => {
    extendSession();
    setShowSessionWarning(false);
    trackInteraction('session_extended');
  };

  const navigationCards = [
    {
      title: 'Website Analytics',
      description: 'View detailed website statistics',
      icon: <FaChartLine className="text-4xl text-white" />,
      href: '/admin/dashboard/analytics',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Image Management',
      description: 'Upload and manage site images',
      icon: <FaImages className="text-4xl text-white" />,
      href: '/admin/dashboard/images',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Blog Posts',
      description: 'Create and manage blog content',
      icon: <FaBlog className="text-4xl text-white" />,
      href: '/admin/dashboard/blogs',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Site Settings',
      description: 'Configure site settings',
      icon: <FaCog className="text-4xl text-white" />,
      href: '/admin/dashboard/settings',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'New Blog Post',
      icon: <FaPlus className="text-2xl" />,
      href: '/admin/dashboard/blogs/new',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Upload Images',
      icon: <FaUpload className="text-2xl" />,
      href: '/admin/dashboard/images/upload',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  if (!stats || !businessMetrics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#56b5bd]"></div>
      </div>
    );
  }

  const todayChange = getPercentageChange(businessMetrics.todayViews, businessMetrics.yesterdayViews);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Session Warning Modal */}
      {showSessionWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 m-4 max-w-md w-full">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
              <h3 className="text-lg font-semibold">Session Expiring Soon</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Your session will expire in {formatTimeRemaining(sessionTimeLeft)}. 
              Would you like to extend your session?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleExtendSession}
                className="flex-1 bg-[#56b5bd] text-white py-2 px-4 rounded-md hover:bg-[#45a4ac] transition-colors"
              >
                Extend Session
              </button>
              <button
                onClick={logout}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Logout Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaShieldAlt className="text-[#56b5bd] text-2xl mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Session Timer */}
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="mr-2" />
                <span>Session: {formatTimeRemaining(sessionTimeLeft)}</span>
              </div>
              
              {/* User Info */}
              <div className="flex items-center text-sm text-gray-600">
                <FaUsers className="mr-2" />
                <span>{user?.name || 'Admin User'}</span>
              </div>
              
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || 'Admin'}!
          </h2>
          <p className="text-gray-600">
            Here's an overview of your TP Health & Fitness website performance and statistics.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <FaEye className="text-blue-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Page Views</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatNumber(stats.totalPageViews)}
                </p>
                <p className="text-xs text-gray-500">All time</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <FaUsers className="text-green-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatNumber(stats.uniqueVisitors)}
                </p>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <FaCalendarAlt className="text-purple-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Views</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatNumber(businessMetrics.todayViews)}
                </p>
                <div className="flex items-center">
                  {parseFloat(todayChange) > 0 ? (
                    <FaArrowUp className="text-green-500 text-xs mr-1" />
                  ) : (
                    <FaArrowDown className="text-red-500 text-xs mr-1" />
                  )}
                  <span className={`text-xs ${parseFloat(todayChange) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {Math.abs(parseFloat(todayChange))}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100">
                <FaMousePointer className="text-orange-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {businessMetrics.engagementRate}%
                </p>
                <p className="text-xs text-gray-500">User interactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] rounded-lg shadow p-6 text-white">
            <div className="flex items-center">
              <FaUsers className="text-3xl mr-4" />
              <div>
                <p className="text-sm opacity-90">Total Members</p>
                <p className="text-3xl font-bold">{formatNumber(businessMetrics.members)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow p-6 text-white">
            <div className="flex items-center">
              <FaDumbbell className="text-3xl mr-4" />
              <div>
                <p className="text-sm opacity-90">Active Trainers</p>
                <p className="text-3xl font-bold">{businessMetrics.trainers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow p-6 text-white">
            <div className="flex items-center">
              <FaCalendarAlt className="text-3xl mr-4" />
              <div>
                <p className="text-sm opacity-90">Weekly Classes</p>
                <p className="text-3xl font-bold">{businessMetrics.classes}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow p-6 text-white">
            <div className="flex items-center">
              <FaStar className="text-3xl mr-4" />
              <div>
                <p className="text-sm opacity-90">Avg Rating</p>
                <p className="text-3xl font-bold">{businessMetrics.averageRating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Popular Pages */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartBar className="mr-2 text-[#56b5bd]" />
                Popular Pages
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {stats.popularPages.slice(0, 5).map((page: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#56b5bd] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">
                        {page.path === '/' ? 'Homepage' : page.path}
                      </span>
                    </div>
                    <span className="text-gray-600 font-semibold">
                      {formatNumber(page.views)} views
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaGlobe className="mr-2 text-[#56b5bd]" />
                Traffic Sources
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {stats.topReferrers.slice(0, 5).map((referrer: any, index: number) => {
                  const percentage = ((referrer.count / stats.totalPageViews) * 100).toFixed(1);
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#56b5bd] rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">{referrer.source}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-600 font-semibold">
                          {formatNumber(referrer.count)}
                        </span>
                        <span className="text-gray-400 text-sm ml-1">({percentage}%)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {navigationCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block"
              onClick={() => trackInteraction('navigation_click', { destination: card.href })}
            >
              <div className={`bg-gradient-to-r ${card.color} rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-white/90">{card.description}</p>
                  </div>
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {card.icon}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className={`flex items-center p-3 rounded-md text-white transition-colors ${action.color}`}
                    onClick={() => trackInteraction('quick_action_click', { action: action.title })}
                  >
                    <div className="mr-3">{action.icon}</div>
                    <span className="font-medium">{action.title}</span>
                  </Link>
                ))}
              </div>
              
              {/* Session Management */}
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Session Management</h4>
                <button
                  onClick={handleExtendSession}
                  className="w-full bg-[#56b5bd] text-white py-2 px-4 rounded-md hover:bg-[#45a4ac] transition-colors"
                >
                  Extend Session (+30 minutes)
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Recent Website Activity</h3>
            </div>
            <div className="p-6">
              {stats.recentVisits.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentVisits.slice(0, 5).map((visit: any, index: number) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#56b5bd] rounded-full mr-3"></div>
                      <div className="flex-1">
                        <span className="font-medium">
                          {visit.path === '/' ? 'Homepage' : visit.path}
                        </span>
                        <span className="text-gray-500 ml-1">visited</span>
                      </div>
                      <span className="text-gray-400 text-xs">
                        {new Date(visit.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No recent activity</p>
              )}
              
              {/* Performance Summary */}
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Performance Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Conversion Rate</p>
                    <p className="font-semibold text-[#56b5bd]">{businessMetrics.conversionRate}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Growth Rate</p>
                    <p className="font-semibold text-green-600">+{businessMetrics.monthlyGrowth}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 