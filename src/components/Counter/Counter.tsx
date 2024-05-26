import './Counter.scss';

interface CounterProps {
  tasksNumber: number;
}

function Counter({ tasksNumber }: CounterProps) {
  return (
    <p className="counter">
      {tasksNumber} tâche{tasksNumber > 1 && 's'} en cours
    </p>
  );
}

export default Counter;
