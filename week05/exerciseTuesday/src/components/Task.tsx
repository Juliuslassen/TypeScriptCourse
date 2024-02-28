import { ITask, TaskArray } from "../types/TaskType";

const Task: React.FC<TaskArray> = ({ tasks }) => {

  const handleCompletedChange = () => {
        

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
                <div>
                    <label htmlFor="checkbox">Mark as completed</label>
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={() => {
                        task.completed = !task.completed
                    }}/>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        </>
     );
}
 
export default Task;