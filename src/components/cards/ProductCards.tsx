'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import StarRating from '../common/StarRating';
import PaginationControls from '../common/Pagination';

export default function ProductCards({ productsData }: any) {
  /* Pagination controls state for the current page */
  const [currentPage, setCurrentPage] = useState(1);

  /* Function to handle page change and update the current page */
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  /* Calculate the start index based on the current page  */
  const startIndex = (currentPage - 1) * 8;
  /* Calculate the end index based on the start index */
  /* and the number of products per page */
  const displayedProducts = productsData?.slice(startIndex, startIndex + 8);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6'>
        {displayedProducts?.map((product: any) => (
          <div
            key={product?.id}
            className='overflow-hidden bg-black rounded-lg hover:shadow-sm'
          >
            {/* Use Next.js Link for client-side navigation */}
            <Link href={`/product/${product.id}`}>
              <div className='group relative block'>
                <div className='w-full h-64 rounded-t-md'>
                  <Image
                    src={product?.thumbnail}
                    alt={product?.title}
                    className='w-full h-full object-fill hover:scale-110 transition-all'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='p-4'>
                  <div className='mb-2'>
                    <h3 className='text-lg font-semibold capitalize hover:text-orange-400 truncate w-60 text-white'>
                      {product.title}
                    </h3>
                    <p className='text-sm dark:text-amber-200 text-amber-50'>
                      {product?.brand} - {product?.category}
                    </p>
                    <StarRating rating={product?.rating} />
                  </div>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-sm text-red-400 line-through'>
                        ${product?.price}
                      </p>
                      <p className='text-sm text-green-500 font-semibold'>
                        $
                        {(
                          product?.price -
                          (product?.price * product?.discountPercentage) / 100
                        ).toFixed(2)}
                        <span className='ml-1 text-yellow-500'>
                          ({product?.discountPercentage}% off)
                        </span>
                      </p>
                    </div>
                    <p className='text-lg font-bold text-white'>
                      $
                      {(
                        ((100 - product?.discountPercentage) / 100) *
                        product?.price
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div>
        {productsData?.length > 8 && (
          <PaginationControls
            ItemsPerPage={8}
            totalItems={productsData?.length}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}
