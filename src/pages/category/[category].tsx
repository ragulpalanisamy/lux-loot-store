'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProductCards from '@/components/cards/ProductCards';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

import Search from '../search/page';

const CategoryPage = () => {
  /* Get category from query params  */
  const router = useRouter();
  const { category } = router.query;

  /* Fetch products data using fetch and set state with data */
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

  /* Filter products based on category name from query params  */
  const filteredProducts = products.filter(
    (product: any) => product.category === category
  );

  return (
    <div className='flex max-w-7xl mx-auto flex-col items-center justify-between pb-24'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header title={filteredProducts[0]?.category} />
          <ProductCards productsData={filteredProducts} />
        </>
      )}
    </div>
  );
};

export default CategoryPage;
