import React from 'react';

export default function StarRating({ rating }: any) {
  /* Round the rating to the nearest integer */
  const roundedRating = Math.floor(rating);
  return (
    <div>
      {/* Display stars based on the rounded rating value */}
      {/* Change the color of the stars based on the rating value */}
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
