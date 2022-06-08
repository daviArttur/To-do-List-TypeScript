import React from 'react'

// styles
import styles from './Input.module.scss'

type Props = {
  name: string
  type: string
  placeholder?: string
  children: string
  onChange: any
  value: string
}

const Input = ({placeholder, type, name, children, onChange, value}: Props) => {

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>{ children }</label>
      <input 
        id={name} 
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={styles.input}
        />
    </div>
  )
}

export default Input