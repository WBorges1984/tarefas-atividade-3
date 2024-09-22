import React from 'react';
import ButtonCustom from '../buttonCustom/buttonCustom';
import './taskItem.css'

function TaskItem({ task, removeTask }) {
  return (
    <li className='task'>
      {task.title}
      <ButtonCustom remove onClick={() => removeTask(task.id)}>
        Remover
      </ButtonCustom>
      
    </li>
  );
}

export default TaskItem;
