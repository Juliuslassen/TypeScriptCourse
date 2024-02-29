import { useEffect, useState } from 'react';
import { ITask } from '../types/TaskType';
import useTaskData from '../utility/useTaskData';
import TaskAddForm from './TaskAddForm';
import Task from './Task';
import EditTask from './EditTask';
import taskManager from '../manager/Manager';

const TaskLayout: React.FC = () => {
  const manager = taskManager;

  const { tasks }: { tasks: ITask[] } = useTaskData();
  if (manager.getTasks().length === 0) {
    manager.setTasks(tasks);
  }

  const [taskList, setTaskList] = useState<ITask[]>(manager.getTasks());
  useEffect(() => {
    setTaskList(manager.getTasks());
  }, []); 

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
        <h1>Task Manager</h1>
        <p> showmodal: {showModal} && selectedTask {selectedTask?.name}</p>
        <div>
          <TaskAddForm manager={manager} />
        </div>

        <div className="task-grid">
          {taskList.map((task, index) => (
            <Task
              index={index} // Remember to add a unique key when rendering components in a loop
              manager={manager}
              openModal={openModal}
              setSelectedTask={setSelectedTask}
              task={task} // Assuming each task needs to be passed as a prop to the Task component
            />
          ))}
        </div>
      </div>

      {showModal && selectedTask && (
        <EditTask
          manager={manager}
          showModal={showModal}
          closeModal={closeModal}
          selectedTask={selectedTask}
        />
      )}
    </>
  );
};

export default TaskLayout;
