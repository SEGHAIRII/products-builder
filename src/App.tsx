import { Fragment, useState } from 'react'
import ProductCard from './components/ProductCard'

import {productList, inputList} from './data'
import Button from './ui/Button'
import Modal from './components/Modal'
import Input from './ui/Input'

function App() {
  // --------------------------state declaration---------------
  let [isOpen, setIsOpen] = useState(true)
// ----------------------------------------Handlers-------------------------------------------
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // --------------------------------------------Render------------------------------------------
  const renderProductList = productList.map(product => <ProductCard key = {product.id} {...product} />);
  const renderInputList = inputList.map(input => (
    <div className='flex flex-col justify-start gap-2'>
      <label htmlFor = {input.id}>{input.label}</label>
      <Input id = {input.id} name = {input.name} type = {input.type} />
    </div>
  ))
  // -------------------------------------------------------------------------------------------------
  return (
    <div className='flex flex-col justify-start'>
      <Button className='bg-red-500' onClick={openModal}>Open Modal</Button>
      <Modal isOpen= {isOpen} closeModal={closeModal} title = "Add a New Product">
          <form className='space-y-2'>
            {renderInputList}
          </form>
          <Button className='bg-red-400 mt-4' onClick={closeModal}>Close Modal</Button>
      </Modal>
      <div className = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1  my-10 container mx-auto" >
        {renderProductList}
      </ div>
    </div>
  )
}

export default App
