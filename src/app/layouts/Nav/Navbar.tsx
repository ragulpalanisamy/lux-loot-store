'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <nav className='navbar max-w-6xl mx-auto py-10'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-primary text-clip'>
          RagulBazaar
        </h2>
        <input
          type='search'
          className='relative border-[0.3px] placeholder:text-sm border-borderColor bg-white pl-5 pr-10 py-5 text-base w-full text-light focus:outline-0 focus:border focus:border-secondary focus-visible:outline-0 focus:ring-0 bg-lightGray h-11 lg:w-[750px] xl:w-[900px]'
          placeholder='search'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <div className='flex justify-between py-10 text-xl hover:text-bold hover:text-secondary'>
          {uniqueCategories.map((category, index) => (
            <ul className='hover:font-bold hover:text-orange-300 hover:text-clip'>
              <li
                key={index}
                className='text-base list-none  hover:font-bold font-medium'
              >
                {category === 'all' ? (
                  <a href='/'>All</a>
                ) : (
                  <a href={`#`}>{category as String}</a>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}
