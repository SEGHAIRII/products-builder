import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Iprop extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode,
  width?:"full"|"fit",
  className?:string
}
const Button = ({className, children,width = "full", ...rest}:Iprop) => {
  console.log(children);
  return (
    <button className={`w-${width} rounded-md p-2 text-white ${className}`} onClick={rest.onClick}>{children}</button>
  )
}

export default Button