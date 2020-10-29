import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ tasks, match, onToggleCompleted }) {
  let filteredTasks;

  switch (match.params.filter) {
    case "completed":
      filteredTasks = tasks.filter((task) => task.completed);
      break;
    default:
      filteredTasks = tasks;
  }

  if (filteredTasks.length === 0) {
    return (
      <>
        <h1 className="panel-heading">Liste de tâches</h1>
        <ul className="is-flex-direction-row ">
          <li className="notification is-primary">Aucune tâche à afficher</li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h1 className="panel-heading">Liste de tâches</h1>
        <ul className="is-flex-direction-row ">
          {filteredTasks.map((task) => (
            <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>
          ))}
        </ul>
      </>
    );
  }
}
