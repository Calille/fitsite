'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiEdit2, FiTrash2, FiPlusCircle, FiArrowLeft, FiEye } from 'react-icons/fi';

// Demo data for blog posts
const DEMO_BLOG_POSTS = [
  {
    id: '1',
    title: 'The Benefits of High-Intensity Interval Training',
    status: 'published',
    publishDate: '2023-06-15',
    excerpt: 'Discover how HIIT workouts can transform your fitness routine in less time.',
    featured: true
  },
  {
    id: '2',
    title: 'Nutrition Tips for Muscle Building',
    status: 'published',
    publishDate: '2023-07-02',
    excerpt: 'Learn the essential nutrients and meal timing for optimal muscle growth.',
    featured: false
  },
  {
    id: '3',
    title: 'Mindfulness and Your Fitness Journey',
    status: 'draft',
    publishDate: null,
    excerpt: 'Explore how mental well-being influences physical performance and results.',
    featured: false
  }
];

export default function BlogsAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState(DEMO_BLOG_POSTS);
  const [filter, setFilter] = useState('all'); // 'all', 'published', 'draft'
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const adminData = localStorage.getItem('tpfitness_admin');
    
    if (adminData) {
      try {
        const parsed = JSON.parse(adminData);
        if (parsed.isLoggedIn) {
          setIsAuthenticated(true);
        } else {
          router.push('/admin');
        }
      } catch (e) {
        router.push('/admin');
      }
    } else {
      router.push('/admin');
    }
    
    // Here you would fetch blog posts from your API
    // For demo, we're using the hardcoded data
    
    setLoading(false);
  }, [router]);

  // Filter blog posts based on selected filter
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.status === filter);

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      // In a real app, you would make an API call to delete the post
      setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f9fa]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#56b5bd]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Header />
      <main className="bg-[#f0f9fa] min-h-screen py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Link href="/admin/dashboard" className="mr-4 text-gray-500 hover:text-[#56b5bd]">
                    <FiArrowLeft size={20} />
                  </Link>
                  <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
                </div>
                <Link 
                  href="/admin/dashboard/blogs/new" 
                  className="flex items-center bg-[#56b5bd] text-white px-4 py-2 rounded-md hover:bg-[#45a4ac] transition-colors"
                >
                  <FiPlusCircle className="mr-2" />
                  New Post
                </Link>
              </div>

              <div className="mb-6">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-md ${filter === 'all' 
                      ? 'bg-[#56b5bd] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('published')}
                    className={`px-4 py-2 rounded-md ${filter === 'published' 
                      ? 'bg-[#56b5bd] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Published
                  </button>
                  <button 
                    onClick={() => setFilter('draft')}
                    className={`px-4 py-2 rounded-md ${filter === 'draft' 
                      ? 'bg-[#56b5bd] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Drafts
                  </button>
                </div>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No blog posts found with the selected filter.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Featured
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                            <div className="text-sm text-gray-500">{post.excerpt}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              post.status === 'published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {post.status === 'published' ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {post.publishDate || 'Not published'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {post.featured ? 'Yes' : 'No'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link 
                                href={`/blog/${post.id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                                target="_blank"
                              >
                                <FiEye />
                              </Link>
                              <Link 
                                href={`/admin/dashboard/blogs/edit/${post.id}`}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <FiEdit2 />
                              </Link>
                              <button 
                                onClick={() => handleDeletePost(post.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 