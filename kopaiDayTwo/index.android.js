import React, { Component } from 'react';
import firebase from './firebase'
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login'
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import forAddPage from './forAddPage';
import moreInfoPage from './moreInfoPage'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,ListView
} from 'react-native';

firebase.messaging().subscribeToTopic('notic');

export default class kopaiDayTwo extends Component {
    render(){
      return(
        <Router>
          <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="pageOne" component={PageOne} title="Annabelle : creation"  />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          <Scene key="forAddPage" component={forAddPage} title="Add Comment"   />
          <Scene key="moreInfoPage" component={moreInfoPage} title="IMDb" />
          </Scene>
        </Router>
      )
    }
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('kopaiDayTwo', () => kopaiDayTwo);
