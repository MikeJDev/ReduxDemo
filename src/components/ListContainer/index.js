import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ToDoList from '../ToDoList'
import DoneList from '../DoneList'

import { 
  removeSpecificTodo,
} from '../../redux/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    removeSpecificTodo: id => dispatch(removeSpecificTodo(id))
  };
}

class ConnectedListContainer extends Component {

  handleCheckBox = (event) => {
    const id = event.target.id
    console.log('id:', id)
    this.props.removeSpecificTodo(id)
  }

  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.columnLeftTitle}> To Do
                <ToDoList
                  remove={this.handleCheckBox}
                ></ToDoList>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnRightTitle}> Complete
                <DoneList></DoneList>
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