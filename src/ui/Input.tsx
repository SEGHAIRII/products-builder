import React, { InputHTMLAttributes } from 'react'
import { Iinput } from '../interfaces/Input'

interface Iprop extends InputHTMLAttributes<HTMLInputElement>{
}

const Input = ({name, id, type, className}:Iprop) => {
  return (
    <input name = {name} id = {id} type = {type} className={`w-full p-3 border rounded shadow-md focus:border-indigo-600 ${className}`} />
  )
}

export default Input