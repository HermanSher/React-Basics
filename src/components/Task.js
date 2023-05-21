import "../App.css";

const Task = (props) => {
  const handleComplete = () => {
    // call the `completeTask` function from the parent component
    props.completeTask(props.id);
  };

  return (
    // <div key={props.id} className={`task ${props.complete ? "completed" : ""}`}>
    <div
      className="task"
      style={{ backgroundColor: props.complete ? "green" : "#eee" }}
    >
      <h1>{props.taskName}</h1>
      <div className="btn-div" style={{ backgroundColor: props.complete ? "green" : "#eee" }}>
        <button className="btn" onClick={() => props.deleteTodo(props.id)}>
          ❌
        </button>
        <button className="btn" onClick={handleComplete}>
          ✅
        </button>
      </div>
    </div>
  );
};

export default Task;
