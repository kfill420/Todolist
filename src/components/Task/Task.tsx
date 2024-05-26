import './Task.scss';

function Task() {
  return (
    <div className="Task">
      <li className="item">
        <label className="item-label item-label--done">
          <input className="item-checkbox" type="checkbox" checked />
          <form className="item-form">
            <input type="text" value="Faire pousser des avocats" />
            <button type="submit" className="item-delete">
              OK
            </button>
          </form>
        </label>
        <button type="button" className="item-delete">
          del
        </button>
        <button type="button" className="item-delete">
          edit
        </button>
      </li>
    </div>
  );
}

export default Task;
