import { ITask } from "../types/TaskType";
import { createTask } from "../utility/createTask";
import useTaskData from "../utility/useTaskData";


const taskManager = (() => {
    let tasks: ITask[] = [];
    tasks = useTaskData().tasks;
    return {
        getTasks: () => tasks,
        addTask: (task: ITask) => {
            tasks.push(task);
        },
        deleteTask: (task: ITask) => {
            tasks = tasks.filter((t) => t !== task);
        },
        updateTask: (task: ITask, newTask: ITask) => {
            tasks = tasks.map((t) => (t === task ? newTask : t));
        }
    };
})();
