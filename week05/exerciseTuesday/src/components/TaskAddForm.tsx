import { useState } from "react";
import { ITask } from "../types/TaskType";

const TaskAddForm = ({tasks, setTasks}) => {

    const [ formData, setFormData ] = useState({
        name: '',
        description: '',
        timeEstimation: ''
    })

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
            completed: false
        }

        setTasks([...tasks, newTask]);

        clearFormData();
    }

    const clearFormData = () => {
        setFormData({
            name: '',
            description: '',
            timeEstimation: ''
        })
    }

    return ( 
        <>
        <div className="task-list-container">
        <div className="form-container">
          <h2>Add a new task</h2>
          <div>
            <form onSubmit={handleFormDataSUBMIT}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleFormDataChange} 
                required />
                
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormDataChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeEstimation">Time Estimation: </label>
                <input
                  type="number"
                  id="timeEstimation"
                  name="timeEstimation"
                  value={formData.timeEstimation}
                  onChange={handleFormDataChange}
                  required
                />
              </div>
              <button type="submit">Add Task</button>
            </form>
          </div>
        </div>
        </div>
        </>
     );
}
 
export default TaskAddForm;