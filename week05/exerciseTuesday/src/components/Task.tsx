import React from 'react';
import { ITask, TaskArray } from '../types/TaskType';

const Task: React.FC<TaskArray> = ({ index, manager, openModal, setSelectedTask, task}) => {
  
  
  const handleCompletedChange = (index: number) => {

    const update = manager.markTaskAsCompleted(task[index]);
    console.log(update);
  };

  const handleOpenModalAndSetTask = (index: number) => () => {
    
    setSelectedTask(task[index]); // Set the selected task
    openModal(); // Open the modal
  }

  const handleRemoveTask = (index: number) => () => {
    // Create a new array without the removed task
    manager.deleteTask(task[index]);
  }

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
              <div className='grid'>
                <label htmlFor={`checkbox-${index}`}>Mark as completed</label>
                <input
                  type="checkbox"
                  name={`checkbox-${index}`}
                  id={`checkbox-${index}`}
                  checked={task.completed}
                  onChange={() => handleCompletedChange(index)}
                />
              </div>
              <div>
                <button onClick={handleRemoveTask(index)} className='btn-danger'>Remove task</button>
              <button onClick={handleOpenModalAndSetTask(index)} className='btn-secondary'>Click here to change task</button>
          </div>
            
        </ul>
      </div>
    </>
  );
};

export default Task;
