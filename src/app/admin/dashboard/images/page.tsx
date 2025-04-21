'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiUpload, FiTrash2, FiArrowLeft, FiCopy, FiCheck, FiSearch } from 'react-icons/fi';

// Demo images for the image gallery
const DEMO_IMAGES = [
  {
    id: '1',
    url: '/hero-feature.png',
    name: 'hero-feature.png',
    size: '1.2 MB',
    uploaded: '2023-05-15',
    dimensions: '1200 x 800',
    usedIn: ['Home Page']
  },
  {
    id: '2',
    url: '/img/logo.png',
    name: 'logo.png',
    size: '0.5 MB',
    uploaded: '2023-04-10',
    dimensions: '500 x 200',
    usedIn: ['Header', 'Footer']
  },
  {
    id: '3',
    url: '/services-hero.jpg',
    name: 'services-hero.jpg',
    size: '2.3 MB',
    uploaded: '2023-05-20',
    dimensions: '1920 x 600',
    usedIn: ['Services Page']
  },
  {
    id: '4',
    url: '/personal-training.jpg',
    name: 'personal-training.jpg',
    size: '1.8 MB',
    uploaded: '2023-06-05',
    dimensions: '1200 x 800',
    usedIn: ['Services Page']
  },
  {
    id: '5',
    url: '/hero-bg.jpg',
    name: 'hero-bg.jpg',
    size: '2.5 MB',
    uploaded: '2023-04-25',
    dimensions: '1920 x 1080',
    usedIn: ['Home Page']
  }
];

export default function ImagesAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(DEMO_IMAGES);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
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
    
    setLoading(false);
  }, [router]);

  // Filter images based on search term
  const filteredImages = searchTerm
    ? images.filter(img => 
        img.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.usedIn.some(location => location.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : images;

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image? This action cannot be undone.')) {
      // In a real app, you would make an API call to delete the image
      setImages(prevImages => prevImages.filter(img => img.id !== id));
    }
  };

  const copyImageUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
                  <h1 className="text-2xl font-bold text-gray-800">Image Management</h1>
                </div>
                <Link 
                  href="/admin/dashboard/images/upload" 
                  className="flex items-center bg-[#56b5bd] text-white px-4 py-2 rounded-md hover:bg-[#45a4ac] transition-colors"
                >
                  <FiUpload className="mr-2" />
                  Upload Images
                </Link>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd] sm:text-sm"
                    placeholder="Search images by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {filteredImages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No images found matching your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative h-48 bg-gray-100">
                        <img 
                          src={image.url} 
                          alt={image.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-800 truncate" title={image.name}>
                          {image.name}
                        </h3>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>Size: {image.size}</p>
                          <p>Dimensions: {image.dimensions}</p>
                          <p>Uploaded: {image.uploaded}</p>
                          <p>Used in: {image.usedIn.join(', ')}</p>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <button 
                            onClick={() => copyImageUrl(image.url, image.id)}
                            className="text-indigo-600 hover:text-indigo-900 flex items-center text-sm"
                            title="Copy image URL"
                          >
                            {copiedId === image.id ? (
                              <>
                                <FiCheck className="mr-1" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <FiCopy className="mr-1" />
                                <span>Copy URL</span>
                              </>
                            )}
                          </button>
                          <button 
                            onClick={() => handleDeleteImage(image.id)}
                            className="text-red-600 hover:text-red-900 flex items-center text-sm"
                            title="Delete image"
                          >
                            <FiTrash2 className="mr-1" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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