import React from 'react';

const Task: React.FC = ({
  index,
  manager,
  openModal,
  setSelectedTask,
  task,
}) => {

  const handleCompletedChange = () => {
    manager.markTaskAsCompleted(task);
  };
  
  const handleOpenModalAndSetTask = () => {
    setSelectedTask(task); // Set the selected task
    openModal(); // Open the modal
  };
  
  const handleRemoveTask = () => {
    manager.deleteTask(task);
  };
  
  return (
    <>
      <div className="task-list-container">
        <h2 className="task-list-heading">Tasks</h2>
        <ul className="task-list">
          <h1>Task {index}</h1>
          <div> name: {task.name} </div>
          <div> description: {task.description} </div>
          <div> Is task done?: {task.completed ? 'Yes' : 'No'} </div>
          {task.completed ? (
            <div></div>
          ) : (
            <div> time estimation: {task.timeEstimation} hours </div>
          )}
          <div className="grid">
            <label htmlFor={`checkbox-${index}`} className="checkbox">
              Mark as completed
            </label>
            <input
              type="checkbox"
              name={`checkbox-${index}`}
              id={`checkbox-${index}`}
              checked={task.completed}
              onChange={handleCompletedChange}
            />
          </div>
          <div>
            <button onClick={handleRemoveTask} className="btn-danger">
              Remove task
            </button>
            <button
              onClick={handleOpenModalAndSetTask}
              className="btn-secondary"
            >
              Click here to change task
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Task;
