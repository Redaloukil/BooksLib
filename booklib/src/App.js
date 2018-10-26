import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './components /Library';
import Loading from './components /Loading';

class App extends Component {
  state = {
    loading : false ,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({loading : true})
    } , 3000)
  }

  render() {
    const {loading} = this.state.loading
    return (
      { loading ? <Loading/> : <Library/> }
      
    );
  }
}

export default App;
