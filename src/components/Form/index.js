import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  addArticle,
  removeTodos,
  removeSpecificTodo
} from '../../redux/actions/index'

import List from '../List'

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
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
    this.props.addArticle({ title });
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
          <button onClick={this.handleRemove}>
            Clear all
          </button>
        <div>
          <h2>Things I need to do</h2>
          <List
            remove={this.handleCheckBox}
          ></List>
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