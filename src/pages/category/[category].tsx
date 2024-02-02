'use client';
import ProductCards from '@/components/cards/ProductCards';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

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
