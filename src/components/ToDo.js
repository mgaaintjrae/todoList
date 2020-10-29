import React from "react";

class ToDo extends React.Component {
  state = {
    completed: this.props.task.completed,
  };

  toggleCompleted = () => {
    this.setState((prevState) => ({
      completed: !prevState.completed,
    }));
    this.props.onToggleCompleted(this.props.task.id)
  };

  render() {
    return (
      <li
        className={
          "panel-block is-justify-content-space-between pl-5 " +
          (this.state.completed ? "has-background-success" : null)
        }
      >
        {this.props.task.name}
        <button
          className={
            "button is-success is-small " +
            (this.state.completed ? "button is-success" : "is-outlined")
          }
          onClick={() => this.toggleCompleted()}
        >
          &#x2713;
        </button>
      </li>
    );
  }
}

export default ToDo;
