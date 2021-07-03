import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      tasks: [],
      inputText: ''
    };
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText,
          id: Date.now(),
          completed: false}
      ],
      inputText: ''
    });

  }

  handleChanges = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  setCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          tasks={this.state.tasks}
          setCompleted={this.setCompleted}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;