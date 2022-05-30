import React from 'react'
import styles from './Footer.module.scss'
type Props = {}



const Footer = (props: Props) => {
  return (
    <footer className={styles.header}>
      <p>
        <span>React + TS TODO </span> 2022
      </p>
    </footer>
  )
}

export default Footer