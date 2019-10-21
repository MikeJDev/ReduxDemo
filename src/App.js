import React from 'react';
import List from './components/List'
import Form from './components/Form'



function App() {
  return (
    <>
    <div>
      <h2>Articles</h2>
      <List></List>
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form/>
    </div>
    </>
  );
}

export default App;
