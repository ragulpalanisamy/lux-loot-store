'use client';
import { useEffect, useState } from 'react';

import ProductCards from '@/components/cards/ProductCards';
import Loader from '@/components/common/Loader';

export default function Search() {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch products data using fetch */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}?limit=100`)
      .then((res) => res.json())
      .then((data) => (setProducts(data.products), setIsLoading(false)))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
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
    <div className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-primary'>
      {/* Search bar with responsive width and padding */}
      <div className='flex justify-center rounded-md items-center pt-6 pb-0 md:pb-12'>
        <input
          type='text'
          placeholder='Search for products'
          className='w-full sm:w-3/4 md:w-1/2 p-3 sm:p-5 rounded-lg border-2 border-orange-400 bg-gray-700 text-orange-400'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product cards component with filtered products data and loading state */}
      <div className='py-12'>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCards productsData={filteredProducts} />
        )}
      </div>
    </div>
  );
}
