import React from 'react';
import List from './components/List'
import Form from './components/Form'

function App() {
  return (
    <>
    <div>
      <h2>Add a new todo</h2>
      <Form/>
    </div>
    <div>
      <h2>Things I need to do</h2>
      <List></List>
    </div>
    </>
  );
}

export default App;
