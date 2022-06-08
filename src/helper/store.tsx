import React, { ReactNode, Dispatch, SetStateAction } from 'react'
import { ITask } from '../interfaces/interfaces'


interface Children {
  children: ReactNode
}

type sendTask = {
  task?: ITask[] | [];
  setTask?:  Dispatch<SetStateAction<ITask[] | undefined>>
}

export const GlobalStore = React.createContext<sendTask>({});

export const UserContext = ({children}: Children) => {
  
  const [task, setTask] = React.useState<ITask[]>();
  
  return (
    <GlobalStore.Provider value={{
      task,
      setTask,
    }}>
      {children}
    </GlobalStore.Provider>
  )
}