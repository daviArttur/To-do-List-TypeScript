import React, { Dispatch, FormEvent, SetStateAction, MouseEvent} from 'react'

//  Context
import { GlobalStore } from '../../../../../helper/store'


// Interfaces
import { ITask } from '../../../../../interfaces/interfaces'

// Components
import Input from '../../../../tagComponents/input/Input'
import Button from '../../../../tagComponents/button/Button'

// Hooks
import useForm from '../../../../../hooks/useForm'

// Styles
import styles from './ModalEdit.module.scss'

type Props = {
  taskData: ITask
  setOpenModalEdit: Dispatch<SetStateAction<ITask | false>>
}

const ModalEdit = ({taskData, setOpenModalEdit}: Props) => {

  const { task, setTask } = React.useContext(GlobalStore)
  const title = useForm('string');
  const difficulty = useForm('number');

  function handleOutsideClick(event : MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      console.log(event)
      setOpenModalEdit(false)
    }
  }

  function handleSubmit(event : FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    setTask!(
      task?.map((obj): ITask => {
        if (taskData.id === obj.id) {
          obj.title = title.value
          obj.difficulty = difficulty.value
          return obj
        } else {
          return obj
        }
      })
    )
    setOpenModalEdit(false)
  }

  return (
    <div className={styles.container} onClick={handleOutsideClick}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <Input 
        name="titleEdit"
        type="string"
        {...taskData}
        {...title}
        > Título 
      </Input>
      <Input
        name="difficultyEdit"
        type="string"
        {...taskData}
        {...difficulty}
        > 
          Difficulty
        </Input>
        <Button> Salvar </Button>
      </form>
    </div> 
  )
}

export default ModalEdit