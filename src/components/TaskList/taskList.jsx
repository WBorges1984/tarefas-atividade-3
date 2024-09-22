import React from 'react';
import TaskItem from '../TaskItem/taskItem';
import icons from "../../constants/icons"
import './taskList.css'


function TaskList({ tasks, removeTask }) {
  return (
    <div>
      <div className="titleImg">
        <img src={icons.task} alt="" />
        <h2 className='titleTaskList'>Suas Tarefas</h2>
      </div>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
