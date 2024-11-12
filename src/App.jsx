import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

const App = () => {
  return (
    <>
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTask />
      <TaskList />
    </div>
    </>
  );
};

export default App;
