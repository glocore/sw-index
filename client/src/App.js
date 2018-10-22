// lib imports
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// app imports
import Search from 'scenes/search'
import theme from './theme'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Search/>
        </ThemeProvider>
      </StoreProvider>
    );
  }
}

export default App;
