import React from 'react'

// Store
import { GlobalStore } from '../../../helper/store'

// Interface
import { ITask } from '../../../interfaces/interfaces'

// Styles
import styles from './List.module.scss'

// Components
import Delete from './delete/Delete'
import Edit from './edit/Edit'

type Props = {}

const List = (props: Props): any => {

  const { task, setTask } = React.useContext(GlobalStore);

  React.useEffect(() => {
    const taskLocalStorage = window.localStorage.getItem('task');
    if (taskLocalStorage) {
      setTask!(JSON.parse(taskLocalStorage))
    }
  }, [setTask])

  if (task) return task.map(({ id, title, difficulty }:ITask) => {
    return(
      <div className={styles.container} key={id}>
        <div className={styles.containerList} >
          <h3>{title}</h3>
          <p>{difficulty}</p>
        </div>
      
        <div>
          <Delete id={id}/>
          <Edit id={id}/>
        </div>
      </div>
    )
  })
}

export default List