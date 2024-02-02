// ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toNumber } from 'lodash';
import axios from 'axios';
import { Toast } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';

import ProductCards from '@/components/cards/ProductCards';
import DetailImage from '@/components/cards/DetailImage';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';
import BreadCrumbs from '@/components/BreadCrumbs';

const ProductDetail: React.FC = () => {
  const id = useRouter().query;
  const productId = id.productId ? toNumber(id.productId) : 0;

  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyNow = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((data) => (setProducts(data.data), setLoading(false)))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [productId]);

  const getProductDetail = products?.products?.find(
    (product: any) => product.id === productId
  );

  const productCategory = getProductDetail?.category;
  const productsByCategory = products?.products.filter(
    (product: any) => product.category === productCategory
  );

  return (
    <div className='p-4 pb-20'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
        {loading && <Loader />}
        <BreadCrumbs
          title={getProductDetail?.category}
          subTitle={getProductDetail?.title}
        />
        <div className='md:grid md:grid-cols-2 py-5 md:gap-6'>
          <div className='md:flex-shrink-0'>
            <DetailImage images={getProductDetail?.images} />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              {getProductDetail?.category}
            </div>
            {getProductDetail?.title}
            <p className='mt-2 text-gray-500'>
              {getProductDetail?.description}
            </p>
            <p className='mt-2 text-gray-500'>
              current stock:{' '}
              <span className='text-red-500'>{getProductDetail?.stock}</span>
            </p>
            <div className='mt-4'>
              <div className='text-lg'>
                <span className='text-gray-500 line-through'>
                  ${getProductDetail?.price}
                </span>
                <span className='ml-4 text-red-600'>
                  $
                  {(
                    getProductDetail?.price -
                    (getProductDetail?.price *
                      getProductDetail?.discountPercentage) /
                      100
                  ).toFixed(2)}
                </span>
                <span className='ml-2 text-green-500'>
                  ({getProductDetail?.discountPercentage}% off)
                </span>
              </div>
              <div className='flex items-center my-4'>
                <button
                  onClick={decreaseQuantity}
                  className='text-xl bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded'
                >
                  -
                </button>
                <span className='mx-4 text-xl'>{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className='text-xl bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded'
                >
                  +
                </button>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={handleBuyNow}
                  className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap'
                >
                  Buy Now
                </button>
                {showToast && (
                  <div className='ml-4 flex items-center'>
                    {' '}
                    {/* Added wrapper for better control */}
                    <Toast>
                      <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
                        <HiCheck className='h-5 w-5' />
                      </div>
                      <div className='ml-3 text-sm font-normal'>
                        Item moved successfully.
                      </div>
                    </Toast>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Header title='Similar Products' description='products you may like' />
        <div className='p-4'>
          <ProductCards productsData={productsByCategory} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
