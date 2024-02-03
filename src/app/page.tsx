'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

import Product from '@/pages/product/page';

import { IProductProps } from './types';

interface ProductProps {
  product: IProductProps;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch products data using fetch and set state with data */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='flex max-w-7xl mx-auto flex-col items-center justify-between pb-24'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header title={'All Products'} />
          <div className='m-4 xl:m-0'>
            <Product product={products} />
          </div>
        </>
      )}
    </div>
  );
}
