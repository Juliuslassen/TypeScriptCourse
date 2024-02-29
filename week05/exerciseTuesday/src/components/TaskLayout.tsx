import { useState } from 'react';
import { ITask } from '../types/TaskType';
import useTaskData from '../utility/useTaskData';
import TaskAddForm from './TaskAddForm';
import Task from './Task';
import EditTask from './EditTask';
import { TaskManager } from '../manager/Manager';

const TaskLayout = () => {
  const { tasks, setTasks }: { tasks: ITask[] } = useTaskData();
  const taskManager = TaskManager();
  const [showModal, setShowModal] = useState<boolean>();
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="grid">
        <div>
          <TaskAddForm tasks={tasks} setTasks={setTasks} />
        </div>

        <div className="task-grid">
          <Task
            tasks={tasks}
            setTasks={setTasks}
            openModal={openModal}
            setSelectedTask={setSelectedTask}
          />
        </div>
      </div>

      {showModal && (
        <EditTask
          tasks={tasks}
          setTasks={setTasks}
          showModal={showModal}
          closeModal={closeModal}
          selectedTask={selectedTask}
        />
      )}
    </>
  );
};

export default TaskLayout;
