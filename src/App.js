import React from 'react'
import {Header} from './Components/header'
import {MemGenerator} from './Components/generator'

class App extends React.Component{
  constructor() {
    super() 
    this.state = {
      memImg: "",
    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <MemGenerator />
      </div>
    );
  }
}

export default App;
