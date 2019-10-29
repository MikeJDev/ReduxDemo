import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ListContainer from '../ListContainer'

import { 
    addTodo,
    removeAllTodos,
  } from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addTodo: article => dispatch(addTodo(article)),
    removeAllTodos: name => dispatch(removeAllTodos()),
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
    this.props.removeAllTodos()
  }

  render() {
    const { title } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.addContainer}>
        <h2 className={styles.title}>To-Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label className={styles.label} htmlFor="title">Add: </label>
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
          {/* <h2 className={styles.things}>Things I need to do</h2> */}
          </div>
          <div>
            <ListContainer
              remove={this.handleCheckBox}
            ></ListContainer>
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