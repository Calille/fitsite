'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSave, FiRefreshCw } from 'react-icons/fi';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  
  const [settings, setSettings] = useState({
    siteName: 'TP Health & Fitness',
    contactEmail: 'info@tphealthfitness.com',
    phoneNumber: '+44 7534 675249',
    address: '123 Fitness Lane, London',
    socialLinks: {
      facebook: 'https://facebook.com/tphealthfitness',
      instagram: 'https://instagram.com/tphealthfitness',
      twitter: 'https://twitter.com/tphealthfitness'
    },
    seoSettings: {
      metaTitle: 'TP Health & Fitness Coaching | Modern Fitness Studio',
      metaDescription: 'Experience a modern fitness studio focused on community, strength, and endurance training.',
      keywords: 'fitness, gym, training, personal trainer, group classes'
    },
    features: {
      enableBlog: true,
      enableChat: true
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested objects (social links, SEO settings, etc.)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings({
        ...settings,
        [parent]: {
          ...(settings as any)[parent],
          [child]: value
        }
      });
    } else {
      setSettings({
        ...settings,
        [name]: value
      });
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const [parent, child] = name.split('.');
    
    setSettings({
      ...settings,
      [parent]: {
        ...(settings as any)[parent],
        [child]: checked
      }
    });
  };

  const handleSaveSettings = async () => {
    setSaving(true);
    setError('');
    setSuccessMessage('');

    try {
      // In a real application, you would make an API call to save the settings
      console.log('Saving settings:', settings);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage('Settings saved successfully!');
    } catch (err) {
      setError('Failed to save settings. Please try again.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="mr-4 text-gray-500 hover:text-[#56b5bd]">
                <FiArrowLeft size={20} />
              </Link>
              <h1 className="text-2xl font-bold text-gray-800">Site Settings</h1>
            </div>
            <button
              onClick={handleSaveSettings}
              disabled={saving}
              className={`flex items-center ${
                saving ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#56b5bd] hover:bg-[#45a4ac]'
              } text-white px-4 py-2 rounded-md transition-colors`}
            >
              {saving ? <FiRefreshCw className="mr-2 animate-spin" /> : <FiSave className="mr-2" />}
              {saving ? 'Saving...' : 'Save Changes'}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">General Settings</h2>
              
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  id="siteName"
                  name="siteName"
                  type="text"
                  value={settings.siteName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={settings.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={settings.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Social Media</h2>
              
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook URL
                </label>
                <input
                  id="facebook"
                  name="socialLinks.facebook"
                  type="url"
                  value={settings.socialLinks.facebook}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram URL
                </label>
                <input
                  id="instagram"
                  name="socialLinks.instagram"
                  type="url"
                  value={settings.socialLinks.instagram}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter URL
                </label>
                <input
                  id="twitter"
                  name="socialLinks.twitter"
                  type="url"
                  value={settings.socialLinks.twitter}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-md font-medium text-gray-700">Feature Toggles</h3>
                
                <div className="flex items-center">
                  <input
                    id="enableBlog"
                    name="features.enableBlog"
                    type="checkbox"
                    checked={settings.features.enableBlog}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#56b5bd] focus:ring-[#56b5bd] border-gray-300 rounded"
                  />
                  <label htmlFor="enableBlog" className="ml-2 block text-sm text-gray-700">
                    Enable Blog Feature
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="enableChat"
                    name="features.enableChat"
                    type="checkbox"
                    checked={settings.features.enableChat}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#56b5bd] focus:ring-[#56b5bd] border-gray-300 rounded"
                  />
                  <label htmlFor="enableChat" className="ml-2 block text-sm text-gray-700">
                    Enable Chat Bot
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* SEO Settings */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">SEO Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Title
                </label>
                <input
                  id="metaTitle"
                  name="seoSettings.metaTitle"
                  type="text"
                  value={settings.seoSettings.metaTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="seoSettings.metaDescription"
                  rows={3}
                  value={settings.seoSettings.metaDescription}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
              
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                  Keywords (comma separated)
                </label>
                <input
                  id="keywords"
                  name="seoSettings.keywords"
                  type="text"
                  value={settings.seoSettings.keywords}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#56b5bd] focus:border-[#56b5bd]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 