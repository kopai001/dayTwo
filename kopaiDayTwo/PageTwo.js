import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Pagetwo extends Component {
    constructor(props){
        super(props)
    }    
render() {
    return (
        
    <View style={{margin: 20}}>
        <Text>
        <Text style={styles.bigText}>Title: </Text>
        <Text style={styles.infoText}>{this.props.title}</Text>
        </Text>
        <Text>
        <Text style={styles.bigText}>Description: </Text>
        <Text style={styles.infoText}>{this.props.description}</Text>
        </Text>
        <Text>
        <Text style={styles.bigText}>Score: </Text>
        <Text style={styles.infoText}>{this.props.score}</Text>
        </Text>
    </View>
    )
}
}

const styles = StyleSheet.create({
    bigText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    }
    ,infoText:{
        color:'black'
    }
 })