import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                type="text"
                value={props.task}
                name="name"
                onChange={props.handleChanges}
                placeholder="What do you have to do today?"
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;