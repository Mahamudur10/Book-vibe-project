import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            {/* 404 Text Background Effect */}
            <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest relative">
                404
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-sm px-2 py-1 rounded rotate-12 shadow-lg">
                    Page Not Found
                </span>
            </h1>

            {/* Error Message */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Oops! You've found a glitch.
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Optional: Simple Decorative Circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-50 rounded-full translate-x-20 translate-y-20 opacity-50"></div>
        </div>
    );
};

export default ErrorPage;