import React, { ComponentElement, ProviderProps } from 'react'


export const GlobalStore = React.createContext<any>([]);


export const UserContext = ({children}: any) => {
  
  const [task, setTask] = React.useState<object>([]);

  return (
    <GlobalStore.Provider value={{
      task,
      setTask
    }}>
      {children}
    </GlobalStore.Provider>
  )
}