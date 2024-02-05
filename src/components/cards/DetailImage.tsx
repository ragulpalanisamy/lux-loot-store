'use client';
import React, { useState } from 'react';
import { Carousel, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

import 'flowbite/dist/flowbite.css';

interface DetailImageProps {
  images?: string[]; // Assuming images is an array of image URLs
}

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      active: {
        off: 'bg-orange-300',
        on: 'bg-orange-500',
      },
    },
    control: {
      base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-300 group-hover:bg-orange-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-orange-200 sm:h-10 sm:w-10',
      icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
    },
  },
};

const DetailImage: React.FC<DetailImageProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // If there are no images, display a fallback message
  if (images.length === 0) {
    return <div className='text-center py-4'>No images available</div>;
  }

  // Navigate to the previous image
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Navigate to the next image
  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Render the carousel with the images provided
  return (
    <>
      <div className='hidden md:block w-full h-full'>
        <Flowbite theme={{ theme: customTheme }}>
          <Carousel slideInterval={5000}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover'
              />
            ))}
          </Carousel>
        </Flowbite>
      </div>
      {/* // Render the carousel with navigation buttons */}
      <div className=' block md:hidden relative max-w-lg mx-auto'>
        <div className='overflow-hidden'>
          {/* Use currentIndex to display the current image */}
          <img
            src={images[currentIndex]} // Changed from images[0] to use currentIndex
            alt={`Image ${currentIndex + 1}`}
            className='w-full p-5 lg:p-0 lg:h-96 object-contain lg:object-cover'
          />
        </div>
        {images?.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className='absolute top-1/2 text-xl font-bold left-4 transform -translate-y-1/2 bg-orange-300 bg-opacity-75 rounded-full p-1 text-white hover:bg-opacity-100 focus:outline-none'
            >
              &lt;
            </button>
            <button
              onClick={goToNext}
              className='absolute font-bold top-1/2 text-xl right-4 transform -translate-y-1/2 bg-orange-300 bg-opacity-75 rounded-full p-1 text-white hover:bg-opacity-100 focus:outline-none'
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DetailImage;
