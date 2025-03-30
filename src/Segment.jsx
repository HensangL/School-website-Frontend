import React from 'react'
import one from './image.jpg';      
import two from './image1.jpg'; 
import three from './tj.jpg';
function Segment() {
  return (
    
    <div className="main">
        <p className='text-2xl ml-150'>Browse Course Categoreis</p>
        <div className='flex border-2 border-gray-200 rounded-lg p-1 gap-1'>
    <img 
      src={one} 
      className="w-150 h-80 border border-gray-300 rounded-md  hover:scale-105 transition-transform duration-300"
      alt="First image"
    />
    <img 
      src={two} 
      className="w-150 h-80 border border-gray-300 rounded-md  hover:scale-105 transition-transform duration-300"
      alt="First image"
    />        
   
     <img 
      src={three} 
      className="w-150 h-80 border border-gray-300 rounded-md hover:scale-105 transition-transform duration-300" 
      alt="Second image"
    />
    </div>
  </div>
  )
}

export default Segment