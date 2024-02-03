'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ProductCards from '@/components/cards/ProductCards';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

const CategoryPage = () => {
  /* Get category from query params  */
  const router = useRouter();
  const { category } = router.query;

  /* Fetch products data using fetch and set state with data */
  const [products, setProducts] = useState<any>([]);
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

  /* Filter products based on category name from query params  */
  const filteredProducts = products?.filter(
    (product: any) => product?.category === category
  );

  return (
    <div className='flex max-w-7xl mx-auto flex-col items-center justify-between pb-24'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='m-4 xl:m-0'>
          <Header title={filteredProducts[0]?.category} />
          <ProductCards productsData={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
