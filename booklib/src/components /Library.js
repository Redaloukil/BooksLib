import React, { Component } from 'react';


class Library extends Component {
  state = {
    loading : false ,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({loading : true})
    } , 3000)
  }
render() {
    return (
        <div className="App">
        <div className="App-header">

        </div>
      </div>
    );
  }
}

export default Library;


