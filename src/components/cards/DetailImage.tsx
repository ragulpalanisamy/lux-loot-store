import React, { useState } from 'react';

interface DetailImageProps {
  images?: string[]; // Marking images as optional
}

const DetailImage: React.FC<DetailImageProps> = ({ images = [] }) => {
  console.log(
    '%c 🥦 images: ',
    'font-size:12px;background-color: #ED9EC7;color:#fff;',
    images
  );

  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Display a message if there are no images
  if (images.length === 0) {
    return <div className='text-center py-4'>No images available</div>;
  }

  // Render the carousel with navigation buttons
  return (
    <div className='relative max-w-lg mx-auto'>
      <div className='overflow-hidden'>
        {/* Use currentIndex to display the current image */}
        <img
          src={images[currentIndex]} // Changed from images[0] to use currentIndex
          alt={`Image ${currentIndex + 1}`}
          className='w-full h-96 object-cover'
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-1 text-gray-800 hover:bg-opacity-100 focus:outline-none'
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-1 text-gray-800 hover:bg-opacity-100 focus:outline-none'
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default DetailImage;
