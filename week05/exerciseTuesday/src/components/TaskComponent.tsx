import { ITask } from "../types/TaskType";
import useTaskData from "../utility/useTaskData";

const TaskComponent = () => {
    
    const { tasks }: { tasks: ITask[] } = useTaskData();
    
    return ( 
        <>
        <div className="task-list-container">
            <h2 className="task-list-heading">User List</h2>
            <ul className="task-list">
                {tasks.map((task: ITask) => (
                    <li key={task.name} className="task-item">
                        <div> name: {task.name} </div>
                        <div> description: {task.description} </div>
                        <div> Is task done?: {task.completed} </div>
                        <div> Is task done?: {task.completed ? "Yes" : "No"} </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
     );
}
 
export default TaskComponent;