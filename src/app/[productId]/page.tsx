
'use client'

import React from 'react'
import { useParams } from 'next/navigation'
export default function Product() {
  const params =  useParams();
  
  return (
    <div>{params.productId}</div>
  )
}
