import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  articles: state.articles
})

const ConnectedList = ({ 
  articles,
  remove 
}) => {
  console.log('articles:', articles)

  const data = articles.map((el, x) => {
    const ID = x
    return (
      <li key={x}> <label> <input type="checkbox" id={ID} onClick={remove}></input> {el.title} </label></li>
      )
  })
  return (
  <ul>
    {data}
  </ul>
  )
}

const List = connect(mapStateToProps) (ConnectedList)

export default List