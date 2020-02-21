import React from 'react'
import { Image } from 'react-native'

export default function Photo(props) {
    console.log('props.image', props.image);
    return (
        <Image style={{ width: '100%', height: '100%' }} source={props.image} />
    )
}