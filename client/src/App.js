import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: process.env.CLIENT_BASE_URL
});

const Person = ({ data }) => (
  <>
    <p>{data.name}</p>
    <em>{`${data.gender} | ${data.birth_year}`}</em>
  </>
)

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    client
    .query({
      query: gql`
        {
          searchResults(name: "p") {
            name
            birth_year
            eye_color
            gender
          }
        }
      `
    })
    .then(result => {
      console.log(result)
      this.setState({ people: result.data.searchResults })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.people.map((person, index) => <Person data={person} key={index} />)}
        </header>
      </div>
    );
  }
}

export default App;
