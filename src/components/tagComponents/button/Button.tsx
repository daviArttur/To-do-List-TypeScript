import React from 'react'

// styles
import styles from './Button.module.scss'

type Props = {
  children: string
}

const Button = ({ children }: Props) => {
  return (
    <button type='submit' className={styles.button}>{ children }</button>
  )
}

export default Button