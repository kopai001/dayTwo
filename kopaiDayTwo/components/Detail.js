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
                <Text>{this.props.title}</Text>
            </View>    
            </TouchableHighlight>
        )
    }

}


const styles = StyleSheet.create({
    container:{
        height:30,
        flexDirection: 'row',
        justifyContent:'center',
        color: '#fff',
        backgroundColor:"#fff"
    },
    detailContainer:{
        
        flex:3,
        justifyContent:'center'
    }
})
