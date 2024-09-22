import React, { useState } from 'react';
import './taskform.css'
import InputCustom from '../inputCustom/inputCustom';
import ButtonCustom from '../buttonCustom/buttonCustom';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }else{
      alert("Tarefa sem nome não pode ser adicionada!")
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputCustom
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova Tarefa"
      />
      <ButtonCustom onSubmit={handleSubmit} type="submit">Add Task</ButtonCustom>
    </form>
  );
}

export default TaskForm;
