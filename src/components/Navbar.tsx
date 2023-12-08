import React from 'react'
import { ShoppingCart } from 'lucide-react'

export default function Navbar({ cartItemCount }: { cartItemCount: number }) {
  return (
    <nav className="w-full h-12 flex justify-end items-center border-b border-gray-200 px-4">
      <div className="relative">
        <ShoppingCart className="cursor-pointer" />
        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-500 flex justify-center items-center">
          <p className="text-white text-xs">{cartItemCount}</p>
        </span>
      </div>
    </nav>
  )
}
