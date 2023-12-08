import React from 'react'
import { TProduct } from '@/types'
import Image from 'next/image'
import { formatPrice, capitalizeString } from '@/utils/helpers';
import StarRating from '@/components/StarRating';
import { useRouter } from 'next/navigation';

export default function ProductCard({ 
  product, 
  addToCart,
  productIdsInCart
}: { 
  product: TProduct, 
  addToCart: (id: number) => void,
  productIdsInCart: number[]
}) {
  const router = useRouter();
  const discountedAmount = (product.discountPercentage / 100) * product.price;

  return (
    <div className="shadow-sm">
      <div onClick={() => router.push(`/${product.id}`)} className="flex flex-col cursor-pointer">
        <figure className="relative min-h-[268px]">
          <Image 
            src={product.thumbnail} 
            fill 
            priority
            alt={product.title} 
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          />
        </figure>
        <div className="p-4 flex flex-col justify-between h-full">
          {/* Category comes with small letters from the API so capitalize it */}
          <div className="flex-1">
            <p className="text-gray-500 text-sm">{capitalizeString(product.category)}</p>
            <b className="font-semibold">{product.title}</b>
          </div>
          <div className="flex items-center gap-2">
            {/* Formatted strikethrough door price */}
            <s className="mt-6 text-gray-500">€{formatPrice(product.price)}</s>
            {/* Formatted discounted price */}
            {product.discountPercentage && <p className="mt-6 font-semibold">€{formatPrice(product.price - discountedAmount)}</p>}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <StarRating rating={Math.floor(product.rating)} />
            <strong className="font-semibold text-sm">{product.rating}</strong>
            <p className="text-sm font-thin">{`(${product.stock} left)`}</p>
          </div>
        </div>
      </div>
      {/* Disable button and change text if the product is already in the cart */}
      <button 
        onClick={() => addToCart(product.id)} 
        className="w-full py-4 uppercase border-t border-gray-500 text-sm font-semibold disabled:opacity-50"
        disabled={productIdsInCart.includes(product.id)}
      >
        {productIdsInCart.includes(product.id) ? 'Added to basket' : 'Add to basket'}
      </button>
    </div>
  )
}
