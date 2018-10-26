import React, { Component } from 'react';
import BookList from './BookList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

const apolloCLient = new ApolloClient({
    uri:"http://localhost:8000/graphql"
})


class Library extends Component {
  state = {
    loading : true ,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({loading : true})
    } , 3000)
  }
render() {
    return (
      <div className="App-header">
        <ApolloProvider client={apolloCLient}>
          <BookList/>
        </ApolloProvider>
      </div>
      );
  }
}

export default Library;


