import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,Button,ListView,TouchableHighlight
  } from 'react-native';
import { Actions,Router, Scene } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import firebase from './firebase';
import PageOne from './PageOne';

var Form = t.form.Form;
var Person = t.struct({
    Email: t.String,              // a required string
    Password: t.String,               // a required number
    //rememberMe: t.Boolean        // a boolean
  });
var options = {}; // optional rendering options (see documentation)
export default class Login extends Component{
    onPress=()=>{

      var value = this.refs.form.getValue();
      if (value) { // if validation fails, value will be null
       
      

      firebase.auth().signInWithEmailAndPassword(value.Email, value.Password)
      .then((user) => {
        console.log('User successfully logged in', user)
        Actions.pageOne();
      })
      .catch((err) => {
        console.error('User signin error', err);
      });
    }
    }
    render(){
        return (
            <View style={styles.container}>
              {/* display */}
              <Text style={{ alignSelf: 'center',color:'black',fontSize: 30, fontWeight:'bold'}} >LOGIN</Text>
              <Form
                ref="form"
                type={Person}
                options={options}
              />
              <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>
            </View>
          )
    }
}

var styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      marginTop: 50,
      marginBottom:50,
      margin:5,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });
  