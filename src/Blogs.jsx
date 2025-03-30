import React, { useState, useEffect } from 'react';
import image from './image.jpg';
import image1 from './image1.jpg';
import tj from './tj.jpg';
import pic1 from './image.jpg'; // Import your additional images
import pic2 from './image1.jpg';

const images = [image, image1, tj];

function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex ml-60">
      {/* Carousel (left side) */}
      <div className="relative w-1/3 h-90 overflow-hidden rounded-xl shadow-lg group">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-90 object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Text content and images (right side) */}
      <div className="w-2/3 pl-8">
        {/* Main text content */}
        <div className="mb-6 mr-40">
          <h2 className="text-2xl font-bold mb-4">Limitless Personal Wellness Program</h2>
          <p className="text-gray-700 mb-4">
            This transformative program helps SEE graduates unlock their unlimited potential through 
            personalized coaching and holistic wellness approaches. Our international experts will 
            guide you through this journey of self-discovery.
          </p>
          <p className="text-gray-700">
            Join us at Samriddhi School/College in Balaju, Kathmandu for this not-to-be-missed 
            opportunity to transform your life and set yourself on the path to success.
          </p>
        </div>

        {/* Two small pictures with descriptions */}
        <div className="flex  mb-2">
          <div className="w-1/2">
            <img
              src={pic1}
              alt="Wellness session"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">Wellness coaching session with our experts</p>
          </div>
          <div className="w-1/2">
            <img
              src={tj}
              alt="Wellness session"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">Wellness coaching session with our experts</p>
          </div>
          <div className="w-1/2">
            <img
              src={pic2}
              alt="Graduates"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">SEE graduates at our previous retreat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs