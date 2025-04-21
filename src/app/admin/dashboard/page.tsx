'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiImage, FiFileText, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={logout}
            className="flex items-center text-red-500 hover:text-red-700"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Admin Navigation Cards */}
        <Link 
          href="/admin/dashboard/images"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-[#56b5bd] text-white p-4 rounded-full mb-4">
              <FiImage className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Image Management</h2>
            <p className="text-gray-600">Upload, manage, and organize images across the website.</p>
          </div>
        </Link>

        <Link 
          href="/admin/dashboard/blogs"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-[#56b5bd] text-white p-4 rounded-full mb-4">
              <FiFileText className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Blog Posts</h2>
            <p className="text-gray-600">Create, edit, and manage blog posts and articles.</p>
          </div>
        </Link>

        <Link 
          href="/admin/dashboard/settings"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="bg-[#56b5bd] text-white p-4 rounded-full mb-4">
              <FiSettings className="text-3xl" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Site Settings</h2>
            <p className="text-gray-600">Modify general website settings and content.</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/admin/dashboard/blogs/new"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="bg-[#56b5bd] text-white p-3 rounded-full mr-4">
                <FiFileText />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">New Blog Post</h3>
                <p className="text-sm text-gray-600">Create a new article or blog post</p>
              </div>
            </Link>
            
            <Link 
              href="/admin/dashboard/images/upload"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="bg-[#56b5bd] text-white p-3 rounded-full mr-4">
                <FiImage />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Upload Images</h3>
                <p className="text-sm text-gray-600">Add new images to the website</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center text-[#56b5bd] hover:underline"
        >
          <FiHome className="mr-2" />
          View Public Website
        </Link>
      </div>
    </div>
  );
} 