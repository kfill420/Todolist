import { Trash2, Edit, Check } from 'react-feather';
import { useState } from 'react';

import ITask from '../../@types/task';

interface TaskProps {
  task: ITask;
  removeTask: (id: number) => void;
  editTask: (newTask: ITask) => void;
}

function Task({ task, removeTask, editTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputLabel, setInputLabel] = useState('');
  const [editMode, setEditMod] = useState(false);
  const { id, label, done } = task;

  return (
    <li className="item">
      <label
        className={task.done ? 'item-label item-label--done' : 'item-label'}
      >
        <input
          className="item-checkbox"
          type="checkbox"
          checked={task.done}
          onChange={() => {
            const newTask = {
              id: task.id,
              label: task.label,
              done: !task.done,
            };
            editTask(newTask);
          }}
        />
        {editMode ? (
          <form
            className="item-form"
            onSubmit={(e) => {
              e.preventDefault();
              editTask({ ...task, label: inputLabel });
              setEditMod(false);
            }}
          >
            <input
              type="text"
              name=""
              id=""
              value={inputLabel}
              onChange={(e) => {
                e.preventDefault();
                setInputLabel(e.target.value);
              }}
            />
          </form>
        ) : (
          <span>{task.label}</span>
        )}
      </label>

      <button
        type="button"
        className="item-delete"
        onClick={(e) => {
          e.preventDefault();
          removeTask(id);
        }}
      >
        <Trash2 />
      </button>

      <button
        type="button"
        className="item-delete"
        onClick={() => {
          setEditMod(true);
        }}
      >
        <Edit />
      </button>
    </li>
  );
}

export default Task;
