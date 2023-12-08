import React from 'react'
import { useState, useEffect } from 'react'
import { TProduct } from '@/types'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import ProductCard from './ProductCard'
import AddToCartSuccessDialog from "@/components/AddToCartSuccessDialog";

export default function ProductList({ 
  addToCart, 
  productIdsInCart 
}: { 
  addToCart: (id: number) => void,
  productIdsInCart: number[]
}) {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(true);
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  // Fetch product list on page mounts
  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/');
        const result = await response.json();
        setProducts(result.products);
      } catch (err) {
        toast.error('Failed to fetch product list');
      } finally {
        setIsFetchingProducts(false);
      }
    }

    getProductList();
  }, []);

  if (isFetchingProducts) {
    return <Loader2 className="animate-spin mx-auto my-6" />
  }

  function onAddToCart(productId: number) {
    addToCart(productId);
    setAddedProductId(productId);
  }

  return <>
    <div className="container mx-auto px-2 sm:px-0 py-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            addToCart={onAddToCart}
            productIdsInCart={productIdsInCart}
          />
        ))}
      </div>
    </div>
    <AddToCartSuccessDialog 
      isOpen={!!addedProductId}
      closeDialog={() => setAddedProductId(null)}
      product={products.find(product => product.id === addedProductId) as TProduct}
    />
  </>
}
