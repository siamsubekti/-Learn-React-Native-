import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default class MenuItem extends Component{
    render(){
        return(
            <View style={styles.menuItem}>
                <Image source={this.props.itemImage}
                style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuItem:{
        width: '33.33333%',
        height: '50%',
        padding: 20,
       
    },
    image:{
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth:2
    }
})