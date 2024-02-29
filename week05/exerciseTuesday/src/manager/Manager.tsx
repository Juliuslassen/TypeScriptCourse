import { ITask } from "../types/TaskType";
import useTaskData from "../utility/useTaskData";

const taskManager = (() => {
    let tasks: ITask[] = [];
    
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
        },
        markTaskAsCompleted: (task: ITask) => {
            tasks = tasks.map((t) => (t === task ? { ...t, completed: true } : t));
        },
        setTasks(newTasks: ITask[]): void {
            tasks = newTasks;
        },
    };
})();

export default taskManager;