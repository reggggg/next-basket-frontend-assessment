import React from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog"
import { TProduct } from '@/types'
import { formatPrice } from '@/lib/helpers'

export default function AddToCartSuccessDialog({
  isOpen = false,
  closeDialog,
  product
}: {
  isOpen: boolean
  closeDialog: () => void,
  product: TProduct
}) {

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Successfully added to basket</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-4 mt-4">
          <figure className="relative border border-gray-100 rounded-sm w-[100px] h-[100px]">
            <Image 
              src={product.thumbnail}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              alt={product.title} 
              fill
              style={{ objectFit: 'contain' }}
            />
          </figure>
          <div>
            <p className="font-semibold">{product.title}</p>
            <strong className="block mt-3">€{formatPrice(product.price)}</strong>
          </div>
        </div>
      </DialogContent>
      <DialogClose />
    </Dialog>
  )
}
