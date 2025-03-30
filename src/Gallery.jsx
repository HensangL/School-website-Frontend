// src/components/Gallery.js
import React from 'react';
import mainImage from './image.jpg';      // Your main large image
import topRightImage from './image1.jpg'; // Top right image
import bottomRightImage from './tj.jpg';  // Bottom right image (reused as needed)

const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Main gallery container */}
      <div className="flex h-[70vh] gap-4">
        
        {/* Left big image (takes 2/3 width) */}
        <div className="w-2/3 h-full">
          <img
            src={mainImage}
            alt="Main showcase"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Right side (takes 1/3 width) */}
        <div className="w-1/3 flex flex-col gap-4 h-full">
          {/* Top right image (reuse one image here) */}
          <div className="h-1/2">
            <img
              src={topRightImage}
              alt="Featured item"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>
          
          {/* Bottom right image (reusing the same image) */}
          <div className="h-1/2">
            <img
              src={bottomRightImage}
              alt="Secondary view"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Gallery;