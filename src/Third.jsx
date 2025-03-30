import React from 'react'
import second from './image1.jpg'
import first from './image.jpg'
import third from './tj.jpg'

function Third() {
  return (
    <div className=''>
        <div className='flex mt-50 '>
            <p className='ml-50'>
            <h1 className='text-3xl ml-30'>Our vision</h1><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum similique unde et vitae inventore omnis magni in dolore qui cupiditate dicta, sapiente quaerat earum. Eveniet incidunt natus quaerat quibusdam ex?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quibusdam totam error, nisi, sunt corrupti nam velit dignissimos distinctio dolores ad quas rerum nihil? Quis, ab! Suscipit, deserunt ab!Lorem</p>
<img src={first} className='rounded-full object-cover w-120 h-100 mr-60'/>
        </div>
        <div className='flex '>
        <img src={second} className='rounded-full object-cover w-120 h-100 ml-50'/>

        <p className='mr-60'>
            <h1 className='text-3xl ml-30'>Our vision</h1><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum similique unde et vitae inventore omnis magni in dolore qui cupiditate dicta, sapiente quaerat earum. Eveniet incidunt natus quaerat quibusdam ex?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quibusdam totam error, nisi, sunt corrupti nam velit dignissimos distinctio dolores ad quas rerum nihil? Quis, ab! Suscipit, deserunt ab!Lorem</p>
        </div>
        <div className='flex  '>
            <p className='ml-50'>
            <h1 className='text-3xl ml-30'>Our vision</h1><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum similique unde et vitae inventore omnis magni in dolore qui cupiditate dicta, sapiente quaerat earum. Eveniet incidunt natus quaerat quibusdam ex?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quibusdam totam error, nisi, sunt corrupti nam velit dignissimos distinctio dolores ad quas rerum nihil? Quis, ab! Suscipit, deserunt ab!Lorem</p>
<img src={third} className='rounded-full object-cover w-120 h-100 mr-60'/>
        </div>
        
        
    </div>
  )
}

export default Third