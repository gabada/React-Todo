import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul>
            {props.tasks.map(task => (
                <Todo
                    task={task}
                    key={task.id}
                    clearCompleted={props.clearCompleted}
                    setCompleted={props.setCompleted}
                />
            ))}
        </ul>
    )
}

export default TodoList;