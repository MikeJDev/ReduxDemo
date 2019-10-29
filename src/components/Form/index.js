import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ToDoList from '../ToDoList'
    import { 
      addTodo,
      removeTodos,
      removeSpecificTodo
    } from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addTodo: article => dispatch(addTodo(article)),
    removeTodos: name => dispatch(removeTodos()),
    removeSpecificTodo: id => dispatch(removeSpecificTodo(id))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (this.state.title !== "") {
      this.props.addTodo({ title });
    }
    this.setState({ title: "" });
  }

  handleRemove = () => {
    this.props.removeTodos()
  }

  handleCheckBox = (event) => {
    const id = event.target.id
    console.log('id:', id)
    this.props.removeSpecificTodo(id)
  }

  render() {
    const { title } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.addContainer}>
        <h2 className={styles.title}>Add a new todo</h2>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label className={styles.label} htmlFor="title">To-Do </label>
            <input
              className={styles.inputBox}
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
              />
          </span>
          <button className={styles.submitButton}type="submit">SAVE</button>
        </form>
          <button className={styles.submitButton} onClick={this.handleRemove}>
            Clear
          </button>
          </div>
        <div>
          <h2 className={styles.things}>Things I need to do</h2>
          </div>
          <div>
            <ToDoList
              remove={this.handleCheckBox}
            ></ToDoList>
          </div>
        </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;