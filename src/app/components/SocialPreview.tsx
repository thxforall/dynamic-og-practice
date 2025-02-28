'use client';

import Image from 'next/image';

export default function SocialPreview({ id, image }: { id: string; image: string }) {
  return (
    <div className="space-y-10">
      {/* Facebook Preview */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-medium text-gray-700 text-sm">Facebook</span>
          </div>
        </div>
        <div className="p-5">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="aspect-[1200/630] max-h-80 overflow-hidden bg-gray-50 relative">
              <Image 
                src={image} 
                alt="Preview"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">example.com</div>
              <h3 className="font-bold text-gray-900 mb-2 text-base">Social Share Example {id} - My NextJS App</h3>
              <p className="text-sm text-gray-700">Learn how to dynamically assign meta tags with fixed images for rich social media previews.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Twitter Preview */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <span className="font-medium text-gray-700 text-sm">Twitter</span>
          </div>
        </div>
        <div className="p-5">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="aspect-[1200/630] max-h-80 overflow-hidden bg-gray-50 relative">
              <Image 
                src={image} 
                alt="Preview"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-base">Social Share Example {id} - My NextJS App</h3>
              <p className="text-sm text-gray-700">Experience enhanced social media sharing with fixed images using OpenGraph and Twitter Card meta tags.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 