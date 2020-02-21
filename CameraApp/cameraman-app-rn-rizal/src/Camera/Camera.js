import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import ListPhoto from '../ListPhoto/ListPhoto'

export class Camera extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataUri: []
        }
        this.takePicture = this.takePicture.bind(this);
    }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.setState({
                dataUri: this.state.dataUri.concat([{ uri: data.uri }])
            })
        }
    };
    render() {
        console.log('DATA URI', this.state.dataUri)
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <TouchableOpacity onPress={() => this.takePicture()} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> TAKE </Text>
                </TouchableOpacity>
                <View style={styles.viewCapture}>
                    {this.state.dataUri.length > 0 ? <ListPhoto data={this.state.dataUri} /> : null}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    viewCapture: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

export default Camera;
