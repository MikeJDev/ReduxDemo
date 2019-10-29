import React from 'react';
// import List from './components/List'
import Form from './components/Form'

function App() {
  return (
    <div>
      <div>
        Mike Janes breakfast and learn : REDUX
      </div>
    <div style={styles.container}>
      <Form/>
    </div>
    </div>
  );
}

const styles = {
  container: {
    // height: '70vh',
    display: 'flex', 
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    // textAlign: 'center'
},

}

export default App;
