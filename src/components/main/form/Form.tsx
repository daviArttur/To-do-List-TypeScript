import React, { FormEvent, useContext } from 'react'
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

  function HandleSubmit(event: FormEvent):void {
    event.preventDefault();

    console.log(typeof title.content)

    const newTask: ITask = {
      id: task.length + 1,
      title: title.content,
      difficulty: Number(difficulty.content)
    }

    if (task) {
      setTask([...task, newTask]);
    } else {
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