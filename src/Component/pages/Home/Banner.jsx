import React from 'react';
//import bannerimage from "../../../images/bannerimage.png";
import Bannerposter from "../../../images/Bannerposter.png";
import homeBannerSide from "../../../images/home-banner-side.svg"

const Banner = () => {
    return (
        <section className="w-full bg-gradient-to-b from-blue-100 to-white flex flex-col md:flex-row items-center justify-between px-8 lg:px-32 relative">

            {/* Yellow background on left */}
            <img src={homeBannerSide} alt="side" className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12" />

            {/* Text Section */}
            <div className="max-w-2xl text-center md:text-left my-8 md:my-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl/tight font-extrabold text-black whitespace-nowrap tracking-wide text-center">
                    A School <span className="text-blue-600">Beyond </span>
                    <br />
                    <span className="text-blue-600">School</span>
                </h1>

                {/* Buttons Section */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* Register Now Button */}
                    <a href="#" className="bg-[#734eF4] text-white px-6 py-2 rounded-lg font-bold shadow-lg text-center tracking-wide">
                        Register Now
                    </a>

                    {/* Watch Video Button */}
                    <a href="#" className="flex items-center space-x-2 text-gray-700 font-semibold">
                        <span className="bg-red-500 text-white rounded-full h-8 w-8 flex justify-center items-center p-3 pl-3.5">&#9658;</span>
                        <span className="text-sm">Watch Video</span>
                    </a>
                </div>
            </div>

            {/* Image Section (Shifted Right) */}
            <div className="relative w-full flex justify-center md:justify-end ml-auto right-[-20px] lg:right-[-50px]">
                <img src={Bannerposter} alt="School Banner Image" className="w-full max-w-2xl md:max-w-xl lg:max-w-3xl" />
            </div>
        </section>
    );
};

export default Banner;
