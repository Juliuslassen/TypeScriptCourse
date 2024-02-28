import { useState } from "react";
import { tasksData } from '../data/Data'
import { ITask } from "../types/TaskType";

const useTaskData = () => {

    const [ tasks, setTasks ] = useState<ITask[]>( tasksData )

    
    return { tasks, setTasks }
}
 
export default useTaskData;