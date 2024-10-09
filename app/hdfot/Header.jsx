'use client';
import { useEffect, useState } from 'react';
import { useAuth, UserButton } from '@clerk/nextjs'; // Import for authentication
import NotificationBanner from './NotificationBanner';

export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { userId } = useAuth(); // Use for authentication

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".menu-btn") && !e.target.closest(".menu")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigation = [
        { title: "Features", path: "./dashboard" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ];

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                <img
                    src="https://thinknepta.sirv.com/Screenshot%202024-08-31%20014215.png"
                    width={150}
                    height={80}
                    alt="Nepta Logo"
                />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <>
            <NotificationBanner className="fixed top-0 left-0 w-full z-20 bg-yellow-500 text-white py-2 px-4" />
            <header className="fixed top-[2.5rem] left-0 w-full z-10 bg-white shadow-md">
                <nav className="md:text-sm">
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div id="menu" className={`flex-1 items-center mt-8 md:mt-0 md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                {!userId ? (
                                    <a
                                        href="./sign-in"
                                        className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                                    >
                                        Get Started
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                ) : (
                                    <UserButton afterSignOutUrl="/" />
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};