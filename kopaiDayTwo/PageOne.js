import React, { Component } from 'react';
import firebase from './firebase'
import { Actions } from 'react-native-router-flux';
import PageTwo from './PageTwo';
import forAddPage from './forAddPage';
import Detail from './components/Detail'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,ListView,Image,TouchableHighlight
} from 'react-native';
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
        return <Detail {...rowdata}/>
      }
      // Render the list of ToDos with a Button
      render() {
        return (
          <View >
            <Image
            style={{ height: 200,resizeMode:'contain'}}
            source={{uri: 'https://www.movie2free.com/wp-content/uploads/2017/08/new-kong-skull-island-poster-16291-23-230x300.jpg'}}
            />
            <View style={{justifyContent:'space-around'}}>
            <ListView 
              dataSource={this.state.todos}
              renderRow={this._renderRow}

            />
    
            <TouchableHighlight style={styles.button} onPress={Actions.forAddPage} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Add Comment</Text>
            </TouchableHighlight>
            </View >
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
    addButton:{
      marginBottom:20
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
      marginBottom: 20,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

  });
  
  AppRegistry.registerComponent('kopaiDayTwo', () => kopaiDayTwo);
  