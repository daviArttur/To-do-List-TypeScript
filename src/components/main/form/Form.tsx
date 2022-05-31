import React, { FormEvent, useContext, Dispatch, SetStateAction } from 'react'
import Input from '../../tagComponents/input/Input'
import Button from '../../tagComponents/button/Button'
import useForm from '../../../hooks/useForm'
import { GlobalStore } from '../../../helper/store'

// Interface

import { ITask } from '../../../interfaces/Task'


const Form = () => {

  const {task, setTask} = useContext(GlobalStore);
  const title = useForm('string');
  const difficulty = useForm('number');

  function HandleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (task) {
      const newTask: ITask = {
        id: task.length + 1,
        title: title.content,
        difficulty: Number(difficulty.content)
      }

      setTask([...task, newTask]);
      
    } else {
      const newTask: ITask = {
        id: 1,
        title: title.content,
        difficulty: Number(difficulty.content)
      }
      setTask(newTask)
    }

  }
  return (
    <form onSubmit={HandleSubmit}>
      <Input id="title" type='text' placeholder='Título da tarefa' {...title}>
        Título
      </Input>

      <Input id="difficulty" type='number' placeholder='0' {...difficulty}>
        Dificuldade
      </Input>

      <Button>Cirar Tarefa</Button>
    </form>
  )
}

export default Form