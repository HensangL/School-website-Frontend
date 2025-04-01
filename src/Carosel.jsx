import React, { useState, useEffect } from 'react';
import image from './image.jpg'; // Import your carousel images
import image1 from './image1.jpg';
import tj from './tj.jpg';

const images = [image, image1, tj]; // Array of imported images

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel Container */}
      <div className="flex transition-transform duration-500 ease-in-out " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-180 flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Three Big Buttons with Images in the Middle */}
      <div className="absolute bottom-10 right-1 transform -translate-x-1/2 flex space-x-10 ">
        {images.map((img, index) => (
         <button
         key={index}
         onClick={() => goToSlide(index)}
         className={`w-30 h-30 rounded-full  overflow-hidden border-2 transition-all  
                     ${currentIndex === index ? 'border-white scale-110' : 'border-gray-400 opacity-50'}
                     hover:border-white hover:scale-105 hover:opacity-100 `}
       >
       
            <img
              src={img} // Use the corresponding image for each button
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;