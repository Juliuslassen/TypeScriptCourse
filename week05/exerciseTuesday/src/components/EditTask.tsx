import { useState } from 'react';
import { ITask } from '../types/TaskType';
import { TaskProps } from '../types/TaskProp';

const EditTask: React.FC<TaskProps> = ({ manager, showModal, closeModal, selectedTask }) => {
  const [formData, setFormData] = useState({
    name: selectedTask.name,
    description: selectedTask.description,
    timeEstimation: selectedTask.timeEstimation,
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTaskChangeSUBMIT = (e) => {
    e.preventDefault();

    const updatedTask: ITask = {
      name: formData.name!,
      description: formData.description!,
      timeEstimation: parseFloat(formData.timeEstimation), // parseFloat() is used to convert a string to a number
      completed: false,
    };

    manager.updateTask(selectedTask, updatedTask);

    closeModal(); // Close the modal after submitting
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1 className="modal-title">New Task</h1>

            <form onSubmit={handleTaskChangeSUBMIT} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder={selectedTask.name}
                  onChange={handleFormDataChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  placeholder={selectedTask.description}
                  onChange={handleFormDataChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeEstimation">estimated time</label>
                <input
                  type="number"
                  name="timeEstimation"
                  value={formData.timeEstimation}
                  placeholder={selectedTask.timeEstimation.toString()}
                  onChange={handleFormDataChange}
                  className="form-control"
                />
              </div>

              <div className="modal-buttons">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTask;
