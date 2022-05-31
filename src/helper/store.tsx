import React from 'react'
import { ITask } from '../interfaces/Task'

interface Context {
  task?: any,
  setTask?: any
}

export const GlobalStore = React.createContext<Context>({});

export const UserContext = ({children}: any) => {
  
  const [task, setTask] = React.useState<ITask[]>([]);

  return (
    <GlobalStore.Provider value={{
      task,
      setTask
    }}>
      {children}
    </GlobalStore.Provider>
  )
}