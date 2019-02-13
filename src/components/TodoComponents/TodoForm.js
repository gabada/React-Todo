import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                value={props.inputText}
                name="todo"
                onChange={props.handleChanges}
                placeholder="...todo"
            />
            <button onClick={props.addTask}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;