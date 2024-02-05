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
  /* Get product id from query params  */
  const { productId } = useRouter().query;

  const [product, setProduct] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [productsByCategory, setProductsByCategory] = useState<any>([]);
  console.log(
    '%c 🍠 productsByCategory: ',
    'font-size:12px;background-color: #42b983;color:#fff;',
    productsByCategory
  );
  console.log(
    '%c 🍤 products: ',
    'font-size:12px;background-color: #33A5FF;color:#fff;',
    product
  );

  /* Increase and decrease quantity */
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyNow = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  /* Fetch products data using axios  */
  useEffect(() => {
    // axios
    //   .get(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
    if (productId) {
      fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}/${productId}`)
        .then((res) => res.json())
        .then((data) => (setProduct(data), setIsLoading(false)))
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      fetch(
        `${process.env.NEXT_PUBLIC_PRODUCTS_URL}/category/${product?.category}`
      )
        .then((res) => res.json())
        .then((data) => setProductsByCategory(data?.products))
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [product]);

  return (
    <div className='p-4 pb-20 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto overflow-hidden'>
        {isLoading && <Loader />}
        <BreadCrumbs title={product?.category} subTitle={product?.title} />
        <div className='md:grid md:grid-cols-2 bg-slate-50 dark:bg-gray-800 py-5 md:gap-6'>
          <div className='md:flex-shrink-0'>
            <DetailImage images={product?.images} />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold'>
              {product?.category}
            </div>
            <p className='text-xl py-2 font-semibold dark:text-orange-400'>
              {product?.brand}-{product?.title}
            </p>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              {product?.description}
            </p>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              current stock:{' '}
              <span
                className={`${
                  product?.stock > 1
                    ? `text-green-600 dark:text-green-400 font-bold`
                    : `text-red-600 dark:text-red-400`
                }`}
              >
                {product?.stock > 1 ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
            <div className='mt-4'>
              <div className='text-lg'>
                <span className='text-gray-500 line-through dark:text-gray-400'>
                  ${product?.price}
                </span>
                <span className='ml-4 text-red-600 dark:text-red-400'>
                  $
                  {(
                    product?.price -
                    (product?.price * product?.discountPercentage) / 100
                  ).toFixed(2)}
                </span>
                <span className='ml-2 text-green-500 dark:text-green-400'>
                  ({product?.discountPercentage}% off)
                </span>
              </div>
              <div className='flex items-center my-4'>
                <button
                  onClick={decreaseQuantity}
                  className='text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-bold py-2 px-4 rounded'
                >
                  -
                </button>
                <span className='mx-4 text-xl dark:text-orange-400'>
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className='text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-bold py-2 px-4 rounded'
                >
                  +
                </button>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={handleBuyNow}
                  className='mt-4 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-600 hover:rounded-full text-white font-bold py-2 px-4 rounded-full whitespace-nowrap'
                >
                  Buy Now
                </button>
                {showToast && (
                  <div className='ml-4 flex items-center'>
                    <Toast>
                      <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
                        <HiCheck className='h-5 w-5' />
                      </div>
                      <div className='ml-3 text-sm font-normal dark:text-white'>
                        Item added to cart successfully.
                      </div>
                    </Toast>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Header title='Similar Products' description='Products you may like' />
        <div className='p-4'>
          {<ProductCards productsData={productsByCategory} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
