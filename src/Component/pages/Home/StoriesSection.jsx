import React from "react";
import { FaPlay } from "react-icons/fa"; // Importing play icon

const StoriesSection = () => {
  return (
    <div className="py-16 px-6 text-center bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Title */}
      <h2 className="text-3xl font-bold text-orange-500 mb-10">STORIES THAT INSPIRE</h2>

      {/* Video Cards Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Small Video Card - Left */}
        <VideoCard size="small" />

        {/* Large Center Video Card */}
        <VideoCard size="large" />

        {/* Small Video Card - Right */}
        <VideoCard size="small" />
      </div>
    </div>
  );
};

// Reusable Video Card Component
const VideoCard = ({ size, showPlayButton = true }) => {
  const cardSize = size === "large" ? "w-64 h-80" : "w-40 h-56"; // Large and Small sizes

  return (
    <div className={`relative ${cardSize} bg-gray-400 rounded-lg flex items-center justify-center`}>
      {showPlayButton && (
        <div className="absolute w-12 h-12 flex items-center justify-center border-2 border-black rounded-full cursor-pointer">
          <FaPlay className="text-black text-lg" />
        </div>
      )}
    </div>
  );
};

export default StoriesSection;
