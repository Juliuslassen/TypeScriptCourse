import React, { useEffect, useState } from 'react';
import { ITask } from '../types/TaskType';

const Task: React.FC = ({
  index,
  manager,
  openModal,
  setSelectedTask,
  task,
  handleRemoveTask
}) => {

  const [specificTask, setSpecificTask] = useState<ITask>(manager.getSpecificTask(task));

  useEffect(() => {
    setSpecificTask(manager.getSpecificTask(task));
  }, [task, manager]);

  const handleCompletedChange = () => {
    setSpecificTask({ ...specificTask, completed: !specificTask.completed });
    manager.markTaskAsCompleted(specificTask);
  };

  const handleOpenModalAndSetTask = () => {
    setSelectedTask(specificTask); // Set the selected task
    openModal(); // Open the modal
  };

  const removeTask = () => {
    handleRemoveTask(specificTask);
  }

  return (
    <>
      <div className="task-list-container">
        <h2 className="task-list-heading">Tasks</h2>
        <ul className="task-list">
          <h1>Task {index}</h1>
          <div> name: {specificTask.name} </div>
          <div> description: {specificTask.description} </div>
          <div> Is task done?: {specificTask.completed ? 'Yes' : 'No'} </div>
          {specificTask.completed ? (
            <div></div>
          ) : (
            <div> time estimation: {specificTask.timeEstimation} hours </div>
          )}
          <div className="grid">
            <label htmlFor={`checkbox-${index}`} className="checkbox">
              Mark as completed
            </label>
            <input
              type="checkbox"
              name={`checkbox-${index}`}
              id={`checkbox-${index}`}
              checked={specificTask.completed}
              onChange={handleCompletedChange}
            />
          </div>
          <div>
            <button onClick={removeTask} className="btn-danger">
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
