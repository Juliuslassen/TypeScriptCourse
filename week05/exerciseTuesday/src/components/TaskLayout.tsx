import { useEffect, useState } from 'react';
import { ITask } from '../types/TaskType';
import useTaskData from '../utility/useTaskData';
import TaskAddForm from './TaskAddForm';
import Task from './Task';
import EditTask from './EditTask';
import taskManager from '../manager/Manager';

const TaskLayout: React.FC = () => {
  const manager = taskManager;

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const { tasks }: { tasks: ITask[] } = useTaskData();
  if (manager.getTasks().length === 0) {
    setTaskList(tasks);
    manager.setTasks(taskList);
  }

  const [showModal, setShowModal] = useState<boolean>();
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    timeEstimation: '',
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormDataSUBMIT = (e) => {
    e.preventDefault();

    const newTask: ITask = {
      name: formData.name,
      description: formData.description,
      timeEstimation: parseFloat(formData.timeEstimation),
      completed: false,
    };

    manager.addTask(newTask);

    setFormData({
      name: '',
      description: '',
      timeEstimation: '',
    });
  };

  useEffect(() => {
    setTaskList(manager.getTasks());
  }, [showModal, selectedTask, formData, manager]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRemoveTask = (task: ITask) => {
    manager.deleteTask(task);
    setTaskList(manager.getTasks());
  };

  return (
    <>
      <div className="grid">
        <h1>Task Manager</h1>
        <p>
          {' '}
          showmodal: {showModal} && selectedTask {selectedTask?.name}
        </p>
        <div>
          <TaskAddForm
            formData={formData}
            handleFormDataChange={handleFormDataChange}
            handleFormDataSUBMIT={handleFormDataSUBMIT}
          />
        </div>

        <div className="task-grid">
          {taskList.map((task, index) => (
            <li key={index} >
              <Task
                index={index}
                manager={manager}
                openModal={openModal}
                setSelectedTask={setSelectedTask}
                task={task}
                handleRemoveTask={handleRemoveTask}
              />
            </li>
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
