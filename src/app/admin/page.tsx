'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSpinner, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimeLeft, setBlockTimeLeft] = useState(0);
  const { login, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Check for existing failed attempts and implement rate limiting
  useEffect(() => {
    const checkRateLimit = () => {
      const failedAttempts = JSON.parse(localStorage.getItem('failed_login_attempts') || '[]');
      const recentAttempts = failedAttempts.filter((attempt: any) => 
        Date.now() - new Date(attempt.timestamp).getTime() < 15 * 60 * 1000 // 15 minutes
      );
      
      setAttempts(recentAttempts.length);
      
      if (recentAttempts.length >= 5) {
        const lastAttempt = new Date(recentAttempts[recentAttempts.length - 1].timestamp);
        const blockEndTime = lastAttempt.getTime() + 15 * 60 * 1000; // 15 minute block
        const timeLeft = blockEndTime - Date.now();
        
        if (timeLeft > 0) {
          setIsBlocked(true);
          setBlockTimeLeft(timeLeft);
          
          // Update countdown
          const interval = setInterval(() => {
            const remaining = blockEndTime - Date.now();
            if (remaining <= 0) {
              setIsBlocked(false);
              setBlockTimeLeft(0);
              setAttempts(0);
              clearInterval(interval);
            } else {
              setBlockTimeLeft(remaining);
            }
          }, 1000);
          
          return () => clearInterval(interval);
        }
      }
    };

    checkRateLimit();
  }, []);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isBlocked) {
      setError('Too many failed attempts. Please wait before trying again.');
      return;
    }

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    
    try {
      const success = await login(email, password, rememberMe);
      
      if (success) {
        // Clear failed attempts on successful login
        localStorage.removeItem('failed_login_attempts');
        router.push('/admin/dashboard');
      } else {
        // Track failed attempt
        const failedAttempts = JSON.parse(localStorage.getItem('failed_login_attempts') || '[]');
        failedAttempts.push({
          timestamp: new Date().toISOString(),
          email: email
        });
        localStorage.setItem('failed_login_attempts', JSON.stringify(failedAttempts.slice(-10))); // Keep last 10
        
        setAttempts(prev => prev + 1);
        setError('Invalid email or password');
        
        // Clear password field for security
        setPassword('');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getRemainingAttempts = () => {
    return Math.max(0, 5 - attempts);
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#56b5bd]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-20 w-20 bg-[#56b5bd] rounded-full flex items-center justify-center mb-4">
              <FaShieldAlt className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Portal</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access the administration panel
            </p>
          </div>

          {/* Rate limiting warning */}
          {attempts > 0 && !isBlocked && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-800 text-sm">
                {getRemainingAttempts()} attempt{getRemainingAttempts() !== 1 ? 's' : ''} remaining
              </p>
            </div>
          )}

          {/* Blocked message */}
          {isBlocked && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm font-medium">Account temporarily locked</p>
              <p className="text-red-700 text-sm mt-1">
                Too many failed attempts. Try again in {formatTime(blockTimeLeft)}
              </p>
            </div>
          )}

          {/* Demo credentials info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-blue-800 text-sm font-medium">Demo Credentials:</p>
            <p className="text-blue-700 text-sm">Email: admin@tphealthfitness.com</p>
            <p className="text-blue-700 text-sm">Password: admin123</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isBlocked}
                  className="appearance-none relative block w-full px-10 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd] focus:z-10 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  disabled={isBlocked}
                  className="appearance-none relative block w-full px-10 pr-10 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd] focus:z-10 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isBlocked}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  disabled={isBlocked}
                  className="h-4 w-4 text-[#56b5bd] focus:ring-[#56b5bd] border-gray-300 rounded disabled:cursor-not-allowed"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me for 7 days
                </label>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading || isBlocked}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#56b5bd] hover:bg-[#45a4ac] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#56b5bd] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                    Signing in...
                  </>
                ) : isBlocked ? (
                  'Account Locked'
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This is a secure area. Unauthorized access is prohibited.
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-white text-sm opacity-90">
            Your session will expire after 30 minutes of inactivity
          </p>
        </div>
      </div>
    </div>
  );
} 