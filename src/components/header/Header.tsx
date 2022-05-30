import React from 'react'
import styles from './Header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <h1>React + TS Todo</h1>
    </header>
  )
}

export default Header