'use client';
import React from 'react';

const ShareComponent = () => {
    const handleShare = async () => {
        const shareContent = 'Nepa: Think Trunk'; // Replace with your actual content
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Nepta by students', // Replace with your desired title
                    text: shareContent,
                    url: shareUrl
                });
                console.log('Shared successfully');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            const fallbackUrl = '/';
            window.open(fallbackUrl, '_blank');
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-indigo-600 text-white py-3 z-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:text-center md:px-8">
                <p className="text-center font-mono">
                    Your Click Matters!{' '}
                    <button onClick={handleShare} className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1">
                        Share us
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ShareComponent;