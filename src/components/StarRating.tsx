import React from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ rating }: { rating: number }) {
  // Create an array that fills from 1 to 5
  const array = new Array(5).fill(0).map((_, i) => 1 + i);
  return (
    <div className="flex items-center gap-1">
      {/* Map the array and colorize by comparing the index and the rating */}
      {array.map((rate, i) => {
        const color = rating <= i ? '#d1d1d1' : '#1b1b1b';
        return <Star key={rate} fill={color} stroke={color} />
      })}
    </div>
  )
}
