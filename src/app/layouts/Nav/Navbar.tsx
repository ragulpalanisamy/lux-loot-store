'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [products, setProducts] = useState<any>([]);

  /* Fetch products data using fetch and set state with data */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  /* Get unique categories from products */
  const categories = products.map((product: any) => product.category);
  const uniqueCategories = Array.from(new Set(categories));

  /* Add 'all' category at the beginning of the array to include all products */
  uniqueCategories.unshift('all');

  return (
    <nav className='navbar max-w-7xl mx-auto py-10'>
      <div className='flex justify-between'>
        {/* RagulBazaar  */}
        <h2 className='text-3xl hover:cursor-pointer font-bold text-primary text-clip'>
          <Link href={'/'}>RagulBazaar</Link>
        </h2>
        {/* Categories menu */}
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
        {/* Search button */}
        <div className='flex justify-center bg-gradient-to-r from-slate-200 to-slate-100 px-5 rounded-md items-center'>
          <Link href={'/search/page'} className='text-md font-bold '>
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
