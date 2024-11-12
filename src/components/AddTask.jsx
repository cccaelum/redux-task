import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todosSlice';

export const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una nueva tarea"
      />
      <button onClick={handleAddTask}>+</button>
    </div>
  );
};