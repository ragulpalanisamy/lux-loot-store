'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Category {
  slug: string;
  name: string;
  url: string;
}

export default function Navbar() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch products data using fetch and set state with data
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.includes('all')) {
          // Check if 'all' is not already included
          setCategories([
            {
              name: 'all',
              slug: 'all',
              url: 'https://dummyjson.com/products/category/',
            },
            ...data,
          ]);
        } else {
          setCategories(data); // Set data directly if 'all' is included or not needed
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle category change
  const handleCategoryChange = (e: any) => {
    const value = e.target.value;
    router.push(value); // Use router to navigate
  };

  return (
    <nav className='navbar max-w-7xl mx-auto py-6 px-5 lg:px-0'>
      <div className='flex justify-between lg:space-x-28 items-center'>
        <h2 className='text-2xl sm:text-3xl p-2 font-bold text-orange-400'>
          <Link href='/'>LuxLoot</Link>
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

        {/* Desktop Menu */}
        <div className='hidden lg:flex justify-end items-center justify-items-center space-x-5 flex-1'>
          <div className='flex justify-center gap-3 text-xl'>
            {categories.length > 0 && (
              <select
                className='hover:text-orange-400 focus:text-orange-400 focus:ring-0 focus:shadow-none focus:border-orange-200 text-black capitalize border-2 hover:border-orange-200 border-gray-200 font-semibold'
                onChange={handleCategoryChange}
              >
                {categories.map((category, index) => {
                  const categoryName =
                    typeof category === 'string' ? category : category?.name;
                  const categoryValue =
                    categoryName === 'all' ? '/' : `/category/${categoryName}`;

                  return (
                    <option
                      key={index}
                      value={categoryValue}
                      className='hover:text-orange-400 focus:bg-orange-300 text-gray-900 capitalize font-medium'
                    >
                      {categoryName}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <div>
            <Link href='/search/page'>
              <p className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md whitespace-nowrap'>
                Search
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 flex flex-col'>
            {categories.map((category, index) => (
              <Link
                key={index}
                href={
                  category?.name === 'all' ? '/' : `/category/${category?.name}`
                }
                className='text-gray-900 hover:text-orange-400 hover:bg-white block text-start px-3 py-2 rounded-md text-base font-medium capitalize'
              >
                {typeof category === 'string' ? category : category?.name}
              </Link>
            ))}
            <Link href='/search/page'>
              <p className='block bg-orange-400 hover:bg-orange-500 text-center text-white px-3 py-2 rounded-md text-base font-medium'>
                Search
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
