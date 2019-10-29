import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'
import ToDoList from '../ToDoList'
import DoneList from '../DoneList'

function mapDispatchToProps(dispatch) {
  return {

  };
}

class ConnectedListContainer extends Component {

  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.row}>

          <div className={styles.column}>
            <div className={styles.columnLeftTitle}> Things I need to do
                <ToDoList></ToDoList>
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