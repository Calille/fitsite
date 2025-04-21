'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiSave, FiArrowLeft, FiX, FiImage, FiCheck } from 'react-icons/fi';

export default function NewBlogPost() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('draft'); // 'draft' or 'published'
  const [featured, setFeatured] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);
  
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: null,
  });

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
    
    setLoading(false);
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      setFormData({
        ...formData,
        title: value,
        slug: slug
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real application, you would upload this to a server/storage
      // For this demo, we'll just create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setFormData({
          ...formData,
          featuredImage: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setImagePreview('');
    setFormData({
      ...formData,
      featuredImage: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const saveBlogPost = (publish = false) => {
    // Validate form
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    if (!formData.content.trim()) {
      setError('Content is required');
      return;
    }

    setSaving(true);
    setError('');

    const postStatus = publish ? 'published' : status;

    try {
      // In a real application, you would make an API call to save the post
      console.log('Saving blog post:', {
        ...formData,
        status: postStatus,
        featured,
        publishDate: postStatus === 'published' ? new Date().toISOString() : null
      });

      setSuccessMessage(publish ? 'Blog post published successfully!' : 'Blog post saved as draft!');
      
      // In a real app, you would redirect to the edit page with the new ID
      setTimeout(() => {
        router.push('/admin/dashboard/blogs');
      }, 1500);
    } catch (err) {
      setError('Failed to save blog post. Please try again.');
      console.error(err);
    } finally {
      setSaving(false);
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
                  <Link href="/admin/dashboard/blogs" className="mr-4 text-gray-500 hover:text-[#56b5bd]">
                    <FiArrowLeft size={20} />
                  </Link>
                  <h1 className="text-2xl font-bold text-gray-800">Create New Blog Post</h1>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => saveBlogPost(false)}
                    disabled={saving}
                    className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    <FiSave className="mr-2" />
                    Save Draft
                  </button>
                  <button 
                    onClick={() => saveBlogPost(true)}
                    disabled={saving}
                    className="flex items-center bg-[#56b5bd] text-white px-4 py-2 rounded-md hover:bg-[#45a4ac] transition-colors"
                  >
                    <FiCheck className="mr-2" />
                    Publish
                  </button>
                </div>
              </div>

              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {successMessage}
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Post Title *
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter post title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                      URL Slug
                    </label>
                    <input
                      id="slug"
                      name="slug"
                      type="text"
                      value={formData.slug}
                      onChange={handleInputChange}
                      placeholder="post-url-slug"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      This will be used in the URL: /blog/{formData.slug || 'post-slug'}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Brief summary of the post"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Content *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={12}
                      placeholder="Write your blog post content here..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Basic markdown is supported
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image
                    </p>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      {imagePreview ? (
                        <div className="relative">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-auto rounded-md" 
                          />
                          <button
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            title="Remove image"
                          >
                            <FiX size={16} />
                          </button>
                        </div>
                      ) : (
                        <div 
                          onClick={triggerFileInput}
                          className="flex flex-col items-center justify-center py-6 cursor-pointer"
                        >
                          <FiImage className="text-gray-400 text-4xl mb-2" />
                          <p className="text-sm text-gray-500">Click to upload an image</p>
                        </div>
                      )}
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Post Settings
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <label htmlFor="status" className="text-sm text-gray-700">
                          Status
                        </label>
                        <select
                          id="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <label htmlFor="featured" className="text-sm text-gray-700">
                          Featured Post
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            id="featured"
                            checked={featured}
                            onChange={() => setFeatured(!featured)}
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="featured"
                            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                              featured ? 'bg-[#56b5bd]' : 'bg-gray-300'
                            }`}
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Custom CSS for toggle switch */}
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #45a4ac;
        }
        .toggle-label {
          transition: background-color 0.2s ease;
        }
        .toggle-checkbox {
          transition: all 0.2s ease;
          right: 4px;
        }
      `}</style>
    </>
  );
} 