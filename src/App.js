import React from 'react';
import './App.css';
import Postlist from './components/Postlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Postlist/>
      </div>
    )
  }
}

export default App;
