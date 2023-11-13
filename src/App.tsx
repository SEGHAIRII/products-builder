import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './components/ProductCard'

import productList from './data'

function App() {
  const renderedProductList = productList.map(product => <ProductCard key = {product.id} {...product} />);
  return (
    <div className = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1  my-10 container mx-auto" >
      {renderedProductList}
    </ div>
  )
}

export default App
