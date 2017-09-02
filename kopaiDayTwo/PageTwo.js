import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

console.log(this.props)
export default class Pagetwo extends Component {
    constructor(props){
        super(props)
    }    
render() {
    return (
        
    <View style={{margin: 20}}>
        <Text>
        <Text style={styles.bigText}>Title: </Text>
        <Text>{this.props.title}</Text>
        </Text>
        <Text>
        <Text style={styles.bigText}>Description: </Text>
        <Text>{this.props.description}</Text>
        </Text>
        <Text>
        <Text style={styles.bigText}>Score: </Text>
        <Text>{this.props.score}</Text>
        </Text>
    </View>
    )
}
}

const styles = StyleSheet.create({
    bigText:{
        fontSize:16,
        fontWeight:'bold'
    }
 })