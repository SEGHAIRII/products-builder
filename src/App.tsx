import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './components/ProductCard'
import Modal from './components/Modal'

import productList from './data'
import Button from './components/Button'

function App() {
   const [isOpen, setIsOpen] = useState(false);

  const closeModal:()=>void  = ()=> {
    setIsOpen(false)
  }

  const  openModal = ()=> {
    setIsOpen(true)
  }
  const renderedProductList = productList.map(product => <ProductCard key = {product.id} {...product} onClick={openModal} />);
  return (
    <div className = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1  my-10 container mx-auto" >
      {renderedProductList}
    <Modal isOpen = {isOpen} closeModal={closeModal} openModal={openModal} title = "hello bitches" description = "not long ago there was a boy named abderraouf he was a great engineer but he didnt work as hard ">
      <div className='flex flex-row justify-between gap-2 text-white mb-3 my-4'>
        <Button className = "w-full p-3 rounded-md  bg-slate-500" onClick={closeModal}>close</Button>
        <Button className = "w-full p-3 rounded-md  bg-red-500" onClick={openModal}>hello</Button>
      </div>
    </Modal>
    </ div>
  )
}

export default App
