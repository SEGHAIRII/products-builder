import React from 'react'
import Ibutton from '../interfaces/Button'


const Button = ({className, children, ...rest}:Ibutton) => {
  console.log(children);
  return (
    <button className={className} onClick={rest.onClick}>{children}</button>
  )
}

export default Button