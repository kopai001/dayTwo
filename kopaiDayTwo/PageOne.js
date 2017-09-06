import React, { Component } from 'react';
import firebase from './firebase'
import { Actions } from 'react-native-router-flux';
import PageTwo from './PageTwo';
import forAddPage from './forAddPage';
import Detail from './components/Detail'
import moreInfoPage from './moreInfoPage'

import {
  WebView,
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,ListView,Image,TouchableHighlight,ScrollView
} from 'react-native';




firebase.messaging().subscribeToTopic('notic');

export default class PageOne extends Component {
    constructor() {
        super();
        this.ref = null;
        this.listView = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
    
        this.state = {
          todos: this.listView.cloneWithRows({}),
        };
    
        // Keep a local reference of the TODO items
        this.todos = {};
      }
      // Load the Todos on mount
      componentDidMount() {
        this.ref = firebase.database().ref('todos');
        this.ref.on('value', this.handleToDoUpdate);
      }
    
      // Unsubscribe from the todos on unmount
      componentWillUnmount() {
        if (this.ref) {
          this.ref.off('value', this.handleToDoUpdate);
        }
      }
    
      // Handle ToDo updates
      handleToDoUpdate = (snapshot) => {
        this.todos = snapshot.val() || {};
    
        this.setState({
          todos: this.listView.cloneWithRows(this.todos),
        });
      }
    
    
      press=(todo)=>{
        let send=todo
        Actions.pageTwo(send);
        console.log(send)
        
    }
    
     // Render a ToDo row
      renderToDo(todo) {
        // Dont render the todo if its complete
        if (todo.complete) {
          return null;
        }

        
    
        return (
          
          <View>
            <Text>{todo.title}</Text>
          </View>
          
        );
      }
      
      _renderRow=rowdata=>{
        console.log("heloooooooooooo")
        return <Detail {...rowdata}/>
      }
      // Render the list of ToDos with a Button
      render() {
        return (
          <View style={{flex:1,backgroundColor:"#e1f4ff"}}>
          <ScrollView >
            <View>
              <Image
              style={{ height: 300,resizeMode:'contain',flex:1,marginTop:10,borderRadius: 3}}
              source={{uri: 'https://www.movie2free.com/wp-content/uploads/2017/08/new-kong-skull-island-poster-16291-23-230x300.jpg'}}
              />
              
            </View >
            <View style={{margin:10}} >
            <TouchableHighlight style={styles.button} onPress={Actions.moreInfoPage} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>More Infomation</Text>
            </TouchableHighlight>
            <View style={{borderRadius: 8,borderColor:'#48BBEC',borderWidth:5,backgroundColor:'#48BBEC'}}>
              <Text style={{backgroundColor:'#48BBEC',fontSize:20,fontWeight:'bold',color:'black'}}>Review</Text>
                <ListView style={{backgroundColor:'#dff',borderRadius: 8}}
                  dataSource={this.state.todos}
                  renderRow={this._renderRow}

                />
            </View>
    

            </View>
            
          </ScrollView>
              <TouchableHighlight style={styles.button} onPress={Actions.forAddPage} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Add Comment</Text>
              </TouchableHighlight>
          </View>

        );
      }
    
      /*render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React NativeSS+!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          </View>
        );
      }*/
    }
  
  
    
  
  const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      flexDirection: 'row'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    addButton:{
      marginBottom:20
    },
    buttonText: {
      fontWeight:'bold',
      fontSize: 18,
      color: 'black',
      alignSelf: 'center'
    },
    button: {
      margin:5,
      marginTop:10,
      alignItems:'flex-end',
      height: 36,
      backgroundColor: '#ffd800',
      borderColor: '#ffd800',
      borderWidth: 2,
      borderRadius: 8,
      
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

  });
  
  AppRegistry.registerComponent('kopaiDayTwo', () => kopaiDayTwo);
  