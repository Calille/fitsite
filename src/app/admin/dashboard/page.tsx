'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
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
  FaShieldAlt
} from 'react-icons/fa';
import Link from 'next/link';

export default function AdminDashboard() {
  const { logout, user, sessionTimeLeft, extendSession } = useAuth();
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [adminActivities, setAdminActivities] = useState<any[]>([]);

  // Format time remaining
  const formatTimeRemaining = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Check for session warning (5 minutes remaining)
  useEffect(() => {
    const warningThreshold = 5 * 60 * 1000; // 5 minutes
    setShowSessionWarning(sessionTimeLeft > 0 && sessionTimeLeft <= warningThreshold);
  }, [sessionTimeLeft]);

  // Load admin activities
  useEffect(() => {
    const activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
    setAdminActivities(activities.slice(-5).reverse()); // Last 5 activities
  }, []);

  const handleExtendSession = () => {
    extendSession();
    setShowSessionWarning(false);
  };

  const navigationCards = [
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
      color: 'from-purple-500 to-purple-600'
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
            Manage your TP Health & Fitness website content and settings from here.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Session Time</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatTimeRemaining(sessionTimeLeft)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <FaUsers className="text-green-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active User</p>
                <p className="text-2xl font-semibold text-gray-900">{user?.email}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <FaShieldAlt className="text-purple-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Security Level</p>
                <p className="text-2xl font-semibold text-gray-900">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {navigationCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block"
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
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              {adminActivities.length > 0 ? (
                <div className="space-y-3">
                  {adminActivities.map((activity, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#56b5bd] rounded-full mr-3"></div>
                      <div className="flex-1">
                        <span className="font-medium capitalize">
                          {activity.action.replace('_', ' ')}
                        </span>
                        <span className="text-gray-500 ml-1">
                          by {activity.user}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs">
                        {new Date(activity.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No recent activity</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 