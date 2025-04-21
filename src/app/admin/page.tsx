'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      
      if (success) {
        router.push('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#f0f9fa] min-h-screen py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-16 w-40">
                  <Image
                    src="/img/logo.png"
                    alt="TP Health & Fitness Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Admin Login
              </h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                    placeholder="admin@tpfitness.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#56b5bd] text-white py-2 px-4 rounded-md hover:bg-[#45a4ac] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] focus:ring-opacity-50"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/"
                  className="text-sm text-[#56b5bd] hover:underline"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Demo login: admin@tpfitness.com / admin123</p>
            <p className="mt-2">
              <strong>Note:</strong> In a production environment, you would implement proper authentication with secure password storage and session management.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 