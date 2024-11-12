import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/todosSlice';

export const TaskList = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch(removeTask(task.id))}>-</button>
        </li>
      ))}
    </ul>
  );
};