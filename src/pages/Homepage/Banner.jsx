import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 mt-6">
            <div className="hero bg-base-200 rounded-3xl min-h-[500px] lg:px-28">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
                    {/* Book Cover Image */}
                    <img
                        src="/assets/ban.png" 
                        className="max-w-xs md:max-w-sm rounded-lg" 
                        alt="Book Banner"
                    />
                    
                    {/* Banner Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#131313] font-playfair">
                            Books to freshen up <br className="hidden md:block" /> your bookshelf
                        </h1>
                        <div className="mt-8 md:mt-12">
                            <Link 
                                to="/listed-books" 
                                className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-7 py-4 text-xl h-auto font-bold rounded-lg"
                            >
                                View The List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;