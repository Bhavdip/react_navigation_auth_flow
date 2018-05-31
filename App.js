import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createRootNavigator } from './Router';
import { isSignedIn } from './Auth';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'));
  }
  render() {
    const { checkedSignIn, signedIn } = this.state;
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
