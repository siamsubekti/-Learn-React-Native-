import React, { Component } from 'react'
import { FlatList, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class ListPhoto extends Component {

    getImage(image) {
        Actions.image({ image: image });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => this.getImage(item)}>
                                <Image style={styles.image} source={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        marginBottom: 5
    }
})