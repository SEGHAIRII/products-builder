import React, { FC } from 'react'
import Image from './Image'
import Button from './Button'
import IproductCard from '../interfaces/productCard'
import { textSlicer } from '../utilities/functions'
   
const ProductCard : FC<IproductCard> = ({img, alt, title, description, price}) => {
  return (
    <div className='flex flex-col p-2 rounded-lg gap-3 justify-start border '>
        <Image src = {img} alt = {alt}  className={' rounded-md lg:object-cover w-full h-56'}/>
        <h2 className='text-lg'> {title}</h2>
        <p>{textSlicer(description, 70)}</p>
        <div className='flex flex-row justify-start gap-2'>
          <span className='bg-indigo-500 w-4 h-4 rounded-full hover:cursor-pointer'></span>
          <span className='bg-red-500 w-4 h-4 rounded-full'></span>
          <span className='bg-green-500 w-4 h-4 rounded-full'></span>
        </div>
        <div className='flex flex-row justify-between'>
            <h4>{price}</h4>
            <Image src= {img} alt = {alt} className='w-10 h-10 rounded-full object-top' />
        </div>
        <div className='flex flex-row justify-between gap-2 text-white mb-3'>
            <Button className={"w-full h-8 rounded-md bg-indigo-500"}  onClick={(e) => {window.alert("You tried to edit")}}> Edit </Button>
            <Button className={"w-full h-8 rounded-md bg-red-500"}  onClick={(e) => {window.alert("You tried to delete")}}> Remove </Button>
        </div>
    </div>
  )
}

export default ProductCard