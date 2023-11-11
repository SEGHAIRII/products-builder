import React, { FC } from 'react'
import Image from './Image'
import Button from './Button'
import IproductCard from '../interfaces/productCard'
   
const ProductCard : FC<IproductCard> = ({img, alt, title, description, price}) => {
  return (
    <div className='flex flex-col p-2 rounded-lg gap-3 justify-start border'>
        <Image src = {img} alt = {alt} />
        <h2 className='text-lg'> {title}</h2>
        <p>{description}</p>
        <div className='flex flex-row justify-start gap-2'>
          <span className='bg-indigo-500 w-4 h-4 rounded-full hover:cursor-pointer'></span>
          <span className='bg-red-500 w-4 h-4 rounded-full'></span>
          <span className='bg-green-500 w-4 h-4 rounded-full'></span>
        </div>
        <div className='flex flex-row justify-between'>
            <h4>{price}</h4>
            <h4>cars</h4>
        </div>
        <div className='flex flex-row justify-between gap-2 text-white'>
            <button className='w-full rounded-md bg-indigo-500'>Edit</button>
            <button className='w-full rounded-md bg-red-500 py-1'>Delete</button>
        </div>
    </div>
  )
}

export default ProductCard