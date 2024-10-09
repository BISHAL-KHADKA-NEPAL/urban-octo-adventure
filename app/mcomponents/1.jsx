'use client';

import React from 'react';

const StudyHub = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        alert('Search functionality not implemented yet.');
    };

    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
                {/* Main Content */}
                <div className="space-y-8 max-w-90xl mx-auto text-center mt-16"> {/* Changed to mt-16 for reduced gap */}
                    <h1 className="text-md text-indigo-600 font-semibold">
                        Welcome to Your Study Hub!
                    </h1>
                    <h2 className="text-3xl md:text-5xl text-gray-800 font-extrabold mx-auto">
                        Access AI, Notes, Results, and More{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                            to Enhance Your Learning.
                        </span>
                    </h2>
                    <p className="max-w-2xl text-lg mx-auto text-gray-600">
                        Find all your study materials and resources in one place, designed to help you succeed.
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center justify-center gap-x-3 mt-6">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="py-2.5 px-4 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                className="py-2.5 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none w-full sm:w-auto"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-12 flex justify-center">
                    <img
                        src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
                        className="w-full md:w-3/4 shadow-lg rounded-lg border"
                        alt="Study Hub Preview"
                    />
                </div>
            </div>
        </section>
    );
};

export default StudyHub;
