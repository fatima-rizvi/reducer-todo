import React, { useState, useReducer } from 'react';

import { initialState, reducer } from "./reducers/todoReducer";

const ToDoForm = () => {

    const [newTask, setNewTask] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = (e) => {
        // e.persist();
        setNewTask(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit running");
        dispatch({ type: "ADD_NEW_TASK", payload: newTask});
        setNewTask("");
    }

    const toggleTask = (taskId) => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: taskId })
      };

    return (
        <div>
            <h3>Add new task</h3>
            <div>
                <input
                    className = "task-input"
                    type = "text"
                    name = "newTaskText"
                    value = {newTask}
                    onChange = {handleChanges}
                />
                <button
                    onClick = {onSubmit}
                >
                    Add Task
                </button>
            </div>
            <div>
                {console.log("current state: ", state)}
                {state.todo.map(task => (
                    <div 
                        className = {`task${task.completed ? ' completed' : ''}`}
                        onClick = {() => toggleTask(task.id)}    
                    >
                        <p>{task.item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoForm;