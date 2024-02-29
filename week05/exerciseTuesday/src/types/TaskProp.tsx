import { ITask } from "./TaskType";

export interface TaskProps {
    manager: {
      getTasks: () => ITask[];
      addTask: (task: ITask) => void;
      deleteTask: (task: ITask) => void;
      updateTask: (task: ITask, newTask: ITask) => void;
      markTaskAsCompleted: (task: ITask) => void;
    };
    showModal: boolean;
    closeModal: () => void;
    selectedTask: ITask;
  }