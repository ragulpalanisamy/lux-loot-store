'use client';

import ProductCards from '@/components/cards/ProductCards';
import Header from '@/components/common/Header';
import Loader from '@/components/common/Loader';

export default function Product({ product }: any) {
  return (
    <div>{product ? <ProductCards productsData={product} /> : <Loader />}</div>
  );
}
