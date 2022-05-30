import React from 'react'

// Store
import { GlobalStore } from '../../../helper/store'

// Interface
import { ITask } from '../../../interfaces/Task'


const List = (): any => {

  const { task } = React.useContext(GlobalStore);

  if (task) return task.map(({id, title, difficulty}:ITask) => {
    return(
      <div key={id}>
        <p>{title}</p>
        <p>Dificuldade: {difficulty}</p>
        <p>{id}</p>
      </div>
    )
  })
}

export default List