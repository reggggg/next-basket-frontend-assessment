'use client'

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductList from "./ProductList"
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [productIdsInCart, setProductIdsInCart] = useState<number[]>([]);

  return <>
    <Toaster />
    <main>
      <Navbar cartItemCount={productIdsInCart.length} />
      <ProductList 
        addToCart={(id: number) => setProductIdsInCart(prev => ([...prev, id]))} 
        productIdsInCart={productIdsInCart}
      />
    </main>
  </>
}
