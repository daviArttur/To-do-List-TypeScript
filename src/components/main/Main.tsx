import React from 'react'

// Styles
import styles from './Main.module.scss'

// Components
import Form from './form/Form'
import List from './list/List'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <Form />

      <h2>Suas Tarefas</h2>
      <List />
    </div>
  )
}

export default Main