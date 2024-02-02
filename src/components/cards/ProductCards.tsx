import React from 'react';
import StarRating from '../common/StarRating';

export default function ProductCards({ productsData }: any) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {productsData.map((product: any) => (
        <div
          key={product.id}
          className='overflow-hidden bg-black rounded-md shadow-2xl'
        >
          <div className='group relative'>
            <div className='w-full h-80 bg-gray-300 rounded-t-md overflow-hidden group-hover:opacity-65 hover:cursor-pointer'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='w-full h-full object-center hover:scale-110 transition-all object-cover'
              />
            </div>
            <div className='p-4'>
              <div className='mb-2 hover:cursor-pointer'>
                <h3 className='text-lg font-semibold hover:text-orange-400 truncate w-60 text-white'>
                  <a href={product.href}>{product.title}</a>
                </h3>
                <p className='text-sm text-amber-50'>
                  {product.brand} - {product.category}
                </p>
                <StarRating rating={product.rating} />
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm text-red-400 line-through'>
                    ${product.price}
                  </p>
                  <p className='text-sm text-green-500 font-semibold'>
                    {`$${(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}`}
                    <span className='ml-1 text-yellow-500'>
                      ({product.discountPercentage}% off)
                    </span>
                  </p>
                </div>
                <p className='text-lg font-bold text-white'>
                  $
                  {(
                    ((100 - product.discountPercentage) / 100) *
                    product.price
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
