import { ITask } from "../types/TaskType";

const taskManager = (() => {
    let tasks: ITask[] = [];
    
    return {
        getTasks: () => tasks,
        getSpecificTask: (task: ITask) => tasks.find((t) => t === task),
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
            tasks = tasks.map((t) => (t === task ? { ...t, completed: !t.completed } : t));
        },
        setTasks(newTasks: ITask[]): void {
            tasks = newTasks;
        },
    };
})();

export default taskManager;