import React, { useState } from 'react';
import './App.css'
import Container from './components/Container/container.jsx';
import TaskForm from './components/TaskForm/taskForm.jsx';
import TaskList from './components/TaskList/taskList.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <main>
      <Container>
        <h1 className='title'>Gestor de Tarefas</h1>
        <div className='inputButton'>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
      </Container>
    </main>
  );
}
export default App;
