'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

import Product from '@/pages/product/page';

export default function Home() {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  /* Fetch products data using fetch and set state with data */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex max-w-7xl mx-auto flex-col items-center justify-between pb-24'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header title={'All Products'} />
          <Product product={products} />
        </>
      )}
    </div>
  );
}
