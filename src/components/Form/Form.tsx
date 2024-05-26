import { useState } from 'react';
import ITask from '../../@types/task';
import './Form.scss';

interface FormProps {
  addTask: (task: string) => void;
}

function Form({ addTask }: FormProps) {
  const [input, setInput] = useState('');

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        addTask(input);
        setInput('');
      }}
    >
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </form>
  );
}

export default Form;
