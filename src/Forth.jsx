import React from 'react';
import background from './image.jpg';

function Forth() {
  return (
    <div className="relative min-h-screen">
      {/* Half-height background image */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Half-height gradient overlay (same dimensions as image) */}
        <div className="h-full bg-gradient-to-br from-blue-500/70 to-purple-600/70">
          {/* Content */}
          <div className="container mx-auto px-4 pt-32 text-white">
            <h1 className="text-4xl font-bold text-center">Welcome</h1>
            <p className="mt-4 text-xl text-center">
              This shows a half-height image with matching gradient overlay
            </p>
          </div>
        </div>
      </div>

      {/* Bottom half (empty or add other content) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-100">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default Forth