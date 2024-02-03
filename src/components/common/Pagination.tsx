import { Pagination } from '@mui/material';

export default function PaginationControls({
  ItemsPerPage,
  totalItems,
  onPageChange,
}: any) {
  /* Calculating total number of pages */
  const pageCount = Math.ceil(totalItems / ItemsPerPage);

  /* Handle page change event */
  const handleChange = (event: any, value: any) => {
    onPageChange(value);
  };

  return (
    <div className='flex justify-center pt-20'>
      {/* Pagination component with number of items per page */}
      <Pagination
        count={pageCount}
        shape='rounded'
        color='standard'
        size='large'
        onChange={handleChange}
      />
    </div>
  );
}
