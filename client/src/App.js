// lib imports
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

// app imports
import Search from 'scenes/search'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Search/>
      </ThemeProvider>
    );
  }
}

export default App;
