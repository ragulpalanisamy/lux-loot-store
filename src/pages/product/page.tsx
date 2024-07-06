'use client';

import { ProductCards, Loader } from "@/components";

export default function Product({ product }: any) {
  return (
    <div>{product ? <ProductCards productsData={product} /> : <Loader />}</div>
  );
}
