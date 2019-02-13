import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'

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
        { task: this.state.inputText, id: Date.now(), completed: false}
      ],
      inputText: ''
    });

  }

  handleChanges = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;