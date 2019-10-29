import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ToDoList from '../ToDoList'

class ListContainer extends Component {

  render() {
    return (
      <div></div>
    );
  }
}

const ListContainer = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default ListContainer;