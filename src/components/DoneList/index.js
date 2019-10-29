import React from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'

const mapStateToProps = state => ({
  toDo: state.articles
})

const ConnectedList = ({ 
  toDo,
  remove 
}) => {

  const data = toDo.map((el, x) => {
    const ID = x
    return (
      <li className={styles.list} key={x}> <label> <input readOnly type="checkbox" checked={false} id={ID} onClick={remove}></input> {el.title} </label></li>
      )
  })
  return (
  <ul className={styles.ul}>
    {/* {data} */}
  </ul>
  )
}

const List = connect(mapStateToProps) (ConnectedList)

export default List