'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BreadCrumbs({ title, subTitle }: any) {
  return (
    <Breadcrumb
      aria-label='Solid background breadcrumb'
      className='px-5 py-3 dark:bg-gray-800'
    >
      <Breadcrumb.Item href='/' icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`/category/${title}`}>{title}</Breadcrumb.Item>
      <Breadcrumb.Item>{subTitle ? subTitle : ''}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
