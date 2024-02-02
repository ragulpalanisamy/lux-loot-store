'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [products, setProducts] = useState<any>([]);
  const [allProducts, setAllProducts] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const categories = products.map((product: any) => product.category);
  const uniqueCategories = Array.from(new Set(categories));
  uniqueCategories.unshift('all');

  useEffect(() => {
    setAllProducts(products);
    if (searchText === '') {
      return;
    }
    const filteredProducts = products.filter((product: any) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllProducts(filteredProducts);
  }, [searchText]);

  return (
    <nav className='navbar max-w-7xl mx-auto py-10'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-primary text-clip'>
          RagulBazaar
        </h2>
        <div className='flex justify-center items-center gap-3'>
          <div className='flex justify-center gap-3 text-xl hover:text-secondary'>
            {uniqueCategories.map((category, index) => (
              <ul
                key={index}
                className='hover:font-bold hover:text-white hover:text-clip'
              >
                <li className='text-base list-none hover:font-bold font-medium'>
                  {category === 'all' ? (
                    <Link href='/'>All</Link>
                  ) : (
                    <Link href={`/category/${category}`}>
                      {category as String}
                    </Link>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
