import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import instanceAxios from '../../axios/axiosInstance';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';

import ITask from '../../@types/task';

import './App.scss';

function App() {
  const [tasks, setTask] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    try {
      const result = await instanceAxios.get('/tasks');
      setTask(result.data);
    } catch (e: unknown) {
      if (isAxiosError(e)) console.log('error de axios', e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task: string) => {
    let maxId = 0;
    if (tasks.length !== 0) {
      const idsTasks = tasks.map((taskObject) => taskObject.id);
      maxId = Math.max(...idsTasks);
    }
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      label: task,
      done: false,
    };
    const newListTasks = [...tasks, newTask];
    setTask(newListTasks);
    try {
      await instanceAxios.post('/tasks', {
        label: task,
      });
    } catch (e: unknown) {
      if (isAxiosError(e)) console.log('error de axios', e);
    }
  };

  const removeTask = async (id: number) => {
    const newTasksList = tasks.filter((task) => task.id !== id);
    setTask(newTasksList);
    try {
      await instanceAxios.delete(`/tasks/${id}`);
    } catch (e: unknown) {
      if (isAxiosError(e)) console.log('error de axios', e);
    }
  };

  const editTask = async (newTask: ITask) => {
    const taskUpdated = tasks.map((task) => {
      if (task.id === newTask.id) {
        return newTask;
      }
      return task;
    });
    setTask(taskUpdated);
    try {
      await instanceAxios.put(`/tasks/${newTask.id}`, {
        label: newTask.label,
        done: newTask.done,
      });
    } catch (e: unknown) {
      if (isAxiosError(e)) console.log('error de axios', e);
    }
  };

  return (
    <div className="app">
      <Form addTask={addTask} />
      <Counter tasksNumber={tasks.length} />
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}

export default App;
