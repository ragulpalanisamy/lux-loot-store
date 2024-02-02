import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full sm:w-auto mb-4 sm:mb-0'>
            <Link href='/' className='text-2xl font-bold'>
              RagulBazaar
            </Link>
            <p className='mt-2'>The best products at your fingertips.</p>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div>
              <h3 className='font-bold mb-2'>Quick Links</h3>
              <ul>
                <li>
                  <Link href='/'>About Us</Link>
                </li>
                <li>
                  <Link href='/'>Contact</Link>
                </li>
                <li>
                  <Link href='/'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2'>Follow Us</h3>
              <ul className='flex gap-4'>
                <li>
                  <Link
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center border-t border-gray-700 pt-4'>
          © {new Date().getFullYear()} RagulBazaar, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
