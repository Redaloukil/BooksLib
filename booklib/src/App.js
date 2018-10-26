import React, { Component } from 'react';
import './App.css';

import Library from './component/Library';
import Loading from './component/Loading';

class App extends Component {
  state = {
    loading : true ,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({loading : false})
    } , 3000)
  }

  render() {
   
    return (
      <div className="App">
        {this.state.loading ? <Loading/>: <Library/> }
      </div>
    );
  }
}

export default App;
