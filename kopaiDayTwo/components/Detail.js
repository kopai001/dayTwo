import React from 'react';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import { Actions } from 'react-native-router-flux';

import{TouchableHighlight,StyleSheet,Text,View,ListView,Image}from 'react-native';

export default class Detail extends React.Component {
    constructor(props){
        super(props)
    }
    press=()=>{
        console.log(this.props)
        Actions.pageTwo(this.props);  
    }

    render(){
        return(
            <TouchableHighlight onPress={this.press}>
            <View style={styles.container}>
                <View style={styles.detailContainer} >
                <Text style={{color:'black'}} >{this.props.title}</Text>
                <Text>
                    <Text>{this.props.score}</Text>
                    <Text>/10</Text>
                </Text>
                
            </View>
            </View>    
            </TouchableHighlight>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        height:60,
        margin: 10,
        borderRadius: 8,
        borderWidth:2,
        borderBottomWidth:5,
        borderColor:'#48BBEC',
        // flexDirection: 'row',
        justifyContent:'center',
        color: '#fff',
        backgroundColor:"#fff"
    },
    detailContainer:{
        margin: 10
    }
})
