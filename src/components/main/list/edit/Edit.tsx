import React from 'react'

// Context
import { GlobalStore } from '../../../../helper/store'

// Interfaces
import { IGettingId, ITask } from '../../../../interfaces/interfaces'
import ModalEdit from './modal/ModalEdit';

const Edit = ({ id }: IGettingId) => {
  const { task } = React.useContext(GlobalStore);
  const [openModalEdit, setOpenModalEdit] = React.useState<ITask | false>(false)

  function handleClick() {
    task?.filter((obj) => {
      if (obj.id === id) {
        const objectToEdit = obj
        return setOpenModalEdit(objectToEdit);
      } else {
        return false
      }
    })
  }

  if (openModalEdit) return (
    <ModalEdit
    setOpenModalEdit={setOpenModalEdit}
    taskData={openModalEdit}
    />
  )

  return (
    <>
      <button onClick={handleClick}> Editar </button>
    </>
  )
}

export default Edit