import React, { Component } from 'react';
import firebase from './firebase'
import { Actions } from 'react-native-router-flux';

import {
    WebView,ViewTouchableHighlight,View,Text
  } from 'react-native';

  export default class moreInfoPage extends Component {
    constructor(props){
        super(props)
    }   
    render(){
        return(
            <View style={{flexDirection: 'row',height:500}}>
                 
                 <WebView 
                    source={{uri: 'http://www.imdb.com/title/tt5140878/'}}
                    style={{flex:1}}
                /> 
                
            </View>
        )
    }
}