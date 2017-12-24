/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { config, isSignedIn } from './src/config/global';
import { createRootNavigator } from './src/RootRouter';
//routing
//se pone todo los routing

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }
  componentWillMount() {
    //ve si 
    isSignedIn()
      .then(res => this.setState({ signedIn: res.success, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }
    //va por para metro logeado true  o no false
    const Layout = createRootNavigator(signedIn);
    return <Layout />
  }
}
