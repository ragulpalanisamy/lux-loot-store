'use client';
import React from 'react';
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
  // If there are no images, display a fallback message
  if (images.length === 0) {
    return <div className='text-center py-4'>No images available</div>;
  }

  // Render the carousel with the images provided
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Carousel slideInterval={5000}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className='w-full h-full object-fill'
          />
        ))}
      </Carousel>
    </Flowbite>
  );
};

export default DetailImage;
