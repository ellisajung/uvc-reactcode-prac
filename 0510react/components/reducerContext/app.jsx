import AddTask from './addTask.jsx';
import TaskList from './taskList.jsx';
import { TasksProvider } from './tasksContext.jsx';

export default function TaskApp() {
  return (
    <div className='reducer-context-state'>
      <TasksProvider>
        <h2>Reducer + Context</h2>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
