import React from "react";

class AddTask extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddTask(this.newTask.value)
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <section>
          <h1 className="card-header p-3">Nouvelle tâche</h1>
          <form className="card-content" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="field">
              <label form="taskName" className="label">
                Nom de la tâche
              </label>
              <input
                type="text"
                className="input"
                name="taskName"
                id="taskName"
                required
                ref={(input) => (this.newTask = input)}
              />
            </div>
            <button type="submit" className="button is-primary">
              Créer
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default AddTask;
