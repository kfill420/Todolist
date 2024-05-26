import ITask from '../../@types/task';
import Task from './Task';
import './TaskList.scss';

interface TasksListProps {
  tasks: ITask[];
  removeTask: (id: number) => void;
  editTask: (newTask: ITask) => void;
}

function TaskList({ tasks, removeTask, editTask }: TasksListProps) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
