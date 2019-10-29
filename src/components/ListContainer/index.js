import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ToDoList from '../ToDoList'
import DoneList from '../DoneList'

import { 
  removeSpecificTodo,
  completeSpecificTodo
} from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    removeSpecificTodo: id => dispatch(removeSpecificTodo(id)),
    completeSpecificTodo: id => dispatch(completeSpecificTodo(id))
  };
}

class ConnectedListContainer extends Component {

  handleCheckBoxRemove = (event) => {
    const id = event.target.id
    this.props.removeSpecificTodo(id)
  }

  handleCheckBoxComplete = (event) => {
    const id = event.target.id
    this.props.completeSpecificTodo(id)
  }

  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.columnLeftTitle}> To Do
                <ToDoList
                  complete={this.handleCheckBoxComplete}
                ></ToDoList>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnRightTitle}> Complete
                <DoneList
                  remove={this.handleCheckBoxRemove}
                ></DoneList>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const ListContainer = connect(
  null,
  mapDispatchToProps
)(ConnectedListContainer);

export default ListContainer;