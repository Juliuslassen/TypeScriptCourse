import React from 'react';
import { ITask, TaskArray } from '../types/TaskType';

const Task: React.FC<TaskArray> = ({ tasks , setTasks, openModal, setSelectedTask}) => {
  
  const handleCompletedChange = (index: number) => {
    // Create a new array with the updated task
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTasks(updatedTasks)
  };

  const handleOpenModalAndSetTask = (index: number) => () => {
    const editingTask = tasks[index];
    setSelectedTask(editingTask); // Set the selected task
    openModal(); // Open the modal
  }

  const handleRemoveTask = (index: number) => () => {
    // Create a new array without the removed task
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="task-list-container">
        <h2 className="task-list-heading">Tasks</h2>
        <ul className="task-list">
          {tasks.map((task: ITask, index: number) => (
            <li key={task.name} className="task-item">
              <h1>Task {index + 1}</h1>
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
