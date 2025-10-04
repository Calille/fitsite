'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiUpload, FiArrowLeft, FiX, FiImage, FiInfo } from 'react-icons/fi';

export default function UploadImages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);

    // Create and store preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);

    // Clear the input so the same file can be selected again if removed
    e.target.value = '';
  };

  const removeImage = (index: number) => {
    const newPreviews = [...previews];
    const newImageFiles = [...imageFiles];
    
    // Revoke the object URL to prevent memory leaks
    URL.revokeObjectURL(previews[index]);
    
    newPreviews.splice(index, 1);
    newImageFiles.splice(index, 1);
    
    setPreviews(newPreviews);
    setImageFiles(newImageFiles);
  };

  const handleUpload = async () => {
    if (imageFiles.length === 0) {
      setError('Please select at least one image to upload.');
      return;
    }

    setUploading(true);
    setError('');
    setSuccessMessage('');

    try {
      // In a real application, you would upload files to a server/storage
      // For this demo, we'll simulate a successful upload
      
      console.log('Uploading files:', imageFiles);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccessMessage(`Successfully uploaded ${imageFiles.length} image${imageFiles.length > 1 ? 's' : ''}.`);
      
      // Clear uploaded files
      imageFiles.forEach((_, index) => {
        URL.revokeObjectURL(previews[index]);
      });
      setImageFiles([]);
      setPreviews([]);
      
      // In a real app, you might redirect to the image gallery after upload
      setTimeout(() => {
        router.push('/admin/dashboard/images');
      }, 2000);
      
    } catch (err) {
      setError('Failed to upload images. Please try again.');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
                  <Link href="/admin/dashboard/images" className="mr-4 text-gray-500 hover:text-[#56b5bd]">
                    <FiArrowLeft size={20} />
                  </Link>
                  <h1 className="text-2xl font-bold text-gray-800">Upload Images</h1>
                </div>
                <button
                  onClick={handleUpload}
                  disabled={uploading || imageFiles.length === 0}
                  className={`flex items-center ${
                    uploading || imageFiles.length === 0
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-[#56b5bd] hover:bg-[#45a4ac]'
                  } text-white px-4 py-2 rounded-md transition-colors`}
                >
                  <FiUpload className="mr-2" />
                  {uploading ? 'Uploading...' : 'Upload Selected Images'}
                </button>
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

              <div className="mb-6 bg-gray-50 p-4 rounded-lg flex items-start">
                <FiInfo className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-1">Image Upload Guidelines:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Maximum file size: 5MB per image</li>
                    <li>Accepted formats: JPG, PNG, GIF, WebP</li>
                    <li>Recommended dimensions: at least 1200px wide for best quality</li>
                    <li>Use descriptive filenames for better organization</li>
                  </ul>
                </div>
              </div>

              <div 
                onClick={triggerFileInput}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <FiImage className="text-gray-400 text-5xl mx-auto mb-4" />
                <p className="text-lg text-gray-700 mb-2">Drag and drop images here</p>
                <p className="text-sm text-gray-500 mb-4">Or click to browse files</p>
                <button className="inline-flex items-center bg-[#56b5bd] text-white px-4 py-2 rounded-md hover:bg-[#45a4ac] transition-colors">
                  <FiUpload className="mr-2" />
                  Select Images
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                />
              </div>

              {previews.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-800 mb-4">Selected Images ({previews.length})</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={preview} 
                            alt={`Preview ${index}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Remove image"
                        >
                          <FiX size={16} />
                        </button>
                        <p className="mt-1 text-sm text-gray-500 truncate" title={imageFiles[index]?.name}>
                          {imageFiles[index]?.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {(imageFiles[index]?.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ))}
                  </div>
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