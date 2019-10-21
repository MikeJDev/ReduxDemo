import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  articles: state.articles
})

const ConnectedList = ({ 
  articles 
}) => {
  const data = articles.map((el, x) => {
    return (
      <li key={x}> <label> <input type="checkbox"></input> {el.title} </label></li>
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