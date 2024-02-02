import React from 'react';

export default function StarRating({ rating }: any) {
  const roundedRating = Math.floor(rating);
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <span key={i} style={{ color: roundedRating > i ? 'gold' : 'gray' }}>
            {roundedRating > i ? '★' : '☆'}
          </span>
        ))}
    </div>
  );
}
