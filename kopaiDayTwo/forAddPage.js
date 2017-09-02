import React, { Component } from 'react';
import firebase from './firebase'

import t from 'tcomb-form-native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,Button,ListView,Image,TouchableHighlight
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PageOne from './PageOne';


  var Form = t.form.Form;
  var info = t.struct({
      title: t.String,              // a required string
      description: t.String,
      score : t.Number              // a required number
      //rememberMe: t.Boolean        // a boolean
    });
  var options = {};

  export default class forAddPage extends Component {

    onPress=()=>{
        
              var value = this.refs.form.getValue();
              if (value) {
                firebase.database().ref('todos').push(value).
                then((data) => {
                    dispatch({ type: "FULFILLED" })
                    console.log("add to Firebase success")
                    
                }).
                catch((err) => {
                    dispatch({ type: "REJECTED" })
                    console.log("add to Firebase failed")
                    
                    //error
                });
            }
    }



    render() {
        
        return (
            <View style={styles.container}>
            {/* display */}
            <Form
              ref="form"
              type={info}
              options={options}
            />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Add Comment</Text>
            </TouchableHighlight>
          </View>
          
         )
        }


  }


  var styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
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