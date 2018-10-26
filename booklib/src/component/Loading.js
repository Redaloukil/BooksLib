import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


class Loading extends Component {
  state = {
    loading : true ,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({loading : false})
    } , 3000)
  }

  render() {
    const {loading} = this.state.loading
    return (
      
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
      
    );
  }
}

export default Loading;
