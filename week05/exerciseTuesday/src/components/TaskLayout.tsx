import { useState } from 'react';
import { ITask } from '../types/TaskType';
import useTaskData from '../utility/useTaskData';
import TaskAddForm from './TaskAddForm';
import Task from './Task';
import EditTask from './EditTask';

const TaskLayout = () => {
  const { tasks, setTasks }: { tasks: ITask[] } = useTaskData();
  const [showModal, setShowModal ] = useState<boolean>();
  const [ selectedTask, setSelectedTask ] = useState<ITask>()

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
        <p>show modal: {showModal ? "true" : "false"}</p>
        {/*<EditTask
          task={tasks}
          setTasks={setTasks}
          openModal={openModal}
          closeModal={closeModal}
          selectedTask={selectedTask}
        />*/}

      <div>
        <Task tasks={tasks} setTasks={setTasks} openModal={openModal}  setSelectedTask={setSelectedTask} />
      </div>

      <div>
        <TaskAddForm tasks={tasks} setTasks={setTasks} />
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
