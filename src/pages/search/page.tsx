'use client';
import React, { useEffect, useState } from 'react';

import ProductCards from '@/components/cards/ProductCards';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

export default function Search() {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  /* Fetch products data using fetch */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((res) => res.json())
      .then((data) => (setProducts(data.products), setLoading(false)))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  /* Filter products based on search term */
  const filteredProducts = products.filter(
    (product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto text-primary'>
      {/* <Header title={'Search'} description={'Search for products'} /> */}

      {/* Search bar */}
      <div className='flex justify-center rounded-md items-center'>
        <input
          type='text'
          placeholder='Search for products'
          className='w-1/2 p-5 rounded-lg border-2 border-black'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Product cards component with filtered products data and loading state */}
      <div className='py-12'>
        {loading ? (
          <Loader />
        ) : (
          <ProductCards productsData={filteredProducts} />
        )}
      </div>
    </div>
  );
}
