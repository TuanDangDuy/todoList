import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleComplete }) => {
  const handleToggleComplete = () => toggleComplete(task.id)

  return (
    <div className='Todo'>
      <p onClick={handleToggleComplete} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo