import React from 'react'

type Props = {
  id: string
  type: string
  placeholder?: string
  children: string
  onChange: any
}

const Input = ({placeholder, type, id, children, onChange}: Props) => {

  return (
    <div onChange={onChange}>
      <label htmlFor={id}>{ children }</label>
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        />
    </div>
  )
}

export default Input