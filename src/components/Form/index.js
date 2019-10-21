import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  addArticle,
  removeNames
} from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    removeNames: name => dispatch(removeNames())
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
    this.props.removeNames()
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
      clear
      </button>
            </div>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;