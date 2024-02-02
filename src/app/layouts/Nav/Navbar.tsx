'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [products, setProducts] = useState<any>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className='navbar max-w-7xl mx-auto py-10 px-5 lg:px-0'>
      <div className='flex justify-between lg:space-x-28 items-center'>
        <h2 className='text-2xl sm:text-3xl font-bold text-primary'>
          <Link href='/'>RagulBazaar</Link>
        </h2>

        {/* Hamburger Button for smaller screens */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='text-gray-500 focus:outline-none lg:hidden'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>

        {/* Desktop Menu: Visible on lg and larger screens */}
        <div className='hidden lg:flex flex-grow justify-between items-center'>
          <div className='flex justify-center gap-3 text-xl'>
            {uniqueCategories.map((category, index) => (
              <Link
                key={index}
                href={category === 'all' ? '/' : `/category/${category}`}
              >
                <p className='hover:font-bold hover:text-white'>
                  {category as string}
                </p>
              </Link>
            ))}
          </div>
          <div>
            <Link href='/search/page'>
              <p className='bg-gradient-to-r from-slate-200 to-slate-100 px-5 py-2 rounded-md text-md font-bold'>
                Search
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Shown/Hidden based on state, below the navbar */}
      {isMobileMenuOpen && (
        <div className='lg:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 flex flex-col'>
            {uniqueCategories.map((category, index) => (
              <Link
                key={index}
                href={category === 'all' ? '/' : `/category/${category}`}
              >
                <p className='text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium'>
                  {category as string}
                </p>
              </Link>
            ))}
            <Link href='/search/page'>
              <p className='text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium'>
                Search
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
