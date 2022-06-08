import React, { FormEvent, useContext } from 'react'

// Context
import { GlobalStore } from '../../../helper/store'

// Components
import Input from '../../tagComponents/input/Input'
import Button from '../../tagComponents/button/Button'

// Interface
import { ITask } from '../../../interfaces/interfaces'

// styles
import styles from './Form.module.scss'

// Hooks
import useForm from '../../../hooks/useForm'


const Form = () => {

  const {task, setTask} = useContext(GlobalStore);
  const title = useForm('string');
  const difficulty = useForm('number');

  function HandleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: ITask = {
      id: 1,
      title: title.value,
      difficulty: difficulty.value
    }

    if (task) {
      newTask.id = task!.length + 1;
      window.localStorage.setItem('task', JSON.stringify([...task, newTask]))
      setTask!([...task, newTask]);
      title.cleanValue();
      difficulty.cleanValue();
    } else {
      setTask!([newTask])
      window.localStorage.setItem('task', JSON.stringify([newTask]))
      title.cleanValue();
      difficulty.cleanValue();
    }
  }

  return (
    <form onSubmit={HandleSubmit} className={styles.container}>
      <Input 
      name="title"
      type='text' placeholder='Título da tarefa'
      {...title}>
        Título
      </Input>

      <Input name="difficulty" type='number' placeholder='0' {...difficulty}>
        Dificuldade
      </Input>

      <Button>Criar Tarefa</Button>
    </form>
  )
}

export default Form