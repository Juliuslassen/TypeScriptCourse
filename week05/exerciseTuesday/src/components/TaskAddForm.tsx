
const TaskAddForm: React.FC = ({ formData, handleFormDataChange ,handleFormDataSUBMIT }) => {
    
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