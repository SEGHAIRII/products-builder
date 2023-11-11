import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './components/ProductCard'
import IproductCard from './interfaces/productCard'

let k:IproductCard = {
  img:"",
  alt:"an image",
  title:"a car",
  description:"what you see here is an image of a car",
  price:500
}
function App() {

  return (
    <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-1 mx-4 my-10 " >
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
      <ProductCard {...k}/>
    </ div>
  )
}

export default App
