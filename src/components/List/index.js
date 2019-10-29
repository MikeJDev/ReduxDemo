import React from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'

const mapStateToProps = state => ({
  articles: state.articles
})

const ConnectedList = ({ 
  articles,
  remove 
}) => {

  const data = articles.map((el, x) => {
    const ID = x
    return (
      <li className={styles.list} key={x}> <label> <input readOnly type="checkbox" checked={false} id={ID} onClick={remove}></input> {el.title} </label></li>
      )
  })
  return (
  <ul className={styles.ul}>
    {data}
  </ul>
  )
}

// const style = {
//   fontSize: '20px'
// }

const List = connect(mapStateToProps) (ConnectedList)

export default List