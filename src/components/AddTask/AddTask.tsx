import './AddTask.scss';

function AddTask() {
  return (
    <div className="AddTask">
      <form className="form">
        <input
          type="text"
          className="form-item"
          placeholder="Ajouter une tâche"
        />
      </form>
    </div>
  );
}

export default AddTask;
