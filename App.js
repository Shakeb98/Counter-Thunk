import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store/counterStore'
import Counter from './src/screen/counter'
import { applyMiddleware } from 'redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}