import React from 'react'

// Store
import { GlobalStore } from '../../../../helper/store'

// Interfaces
import { IGettingId } from '../../../../interfaces/interfaces'

const Delete = ({ id }: IGettingId) => {

  const { task, setTask } = React.useContext(GlobalStore);
  
  function handleClick() {
    setTask!(task?.filter((obj) => obj.id !== id))
    const transformTaskListJSON = JSON.stringify(task?.filter((obj) => obj.id !== id))
    window.localStorage.setItem('task', transformTaskListJSON);
  }

  return (
    <button onClick={handleClick}> Deletar </button>
  )
}

export default Delete