import { useState } from "react";
import { ITask } from "../types/TaskType";
import useTaskData from "../utility/useTaskData";
import TaskAddForm from "./TaskAddForm";
import Task from "./Task";

const TaskLayout = () => {
    
    const { tasks, setTasks }: { tasks: ITask[] } = useTaskData();
    
    return (
      <>
        <div>
          <Task tasks={tasks} />
        </div>
        
        <div>
            <TaskAddForm tasks={tasks} setTasks={setTasks} />
        </div>
      </>
    );
}
 
export default TaskLayout;