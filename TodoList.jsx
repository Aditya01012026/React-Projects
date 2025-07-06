import React, {useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    // Function to add a new task
    const addTask = () => {
        // Check if the input is not empty
        // and trim any whitespace
        // to avoid adding empty tasks
        if(text.trim() !== ""){
            // Add the new task to the list
            // using the spread operator to create a new array
            // and append the new task
            setTasks([...tasks, text]);
            // Clear the input field
            // by setting the text state to an empty string
            setText("");
        }
    };
    // Function to remove a task by its index
    const removeTask = (index) => {
        // Filter the tasks array to remove the task at the specified index
        // The filter method creates a new array with all elements
        const newTasks = tasks.filter((_, i) => i !== index);
        // Update the tasks state with the new array
        // This ensures that the component re-renders with the updated list
        setTasks(newTasks);
    };
    return (
        <>
        <div className="widget">
            <h2>📝 Todo List</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button onClick={() => removeTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default TodoList;