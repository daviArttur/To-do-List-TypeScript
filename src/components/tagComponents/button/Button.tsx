import React from 'react'

type Props = {
  children: string
}

const Button = ({ children}: Props) => {
  return (
    <button type='submit' >{ children }</button>
  )
}

export default Button