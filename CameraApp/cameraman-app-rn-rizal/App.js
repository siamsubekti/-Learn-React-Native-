import React, { Component } from 'react'
import Camera from './src/Camera/Camera'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Photo from './src/ListPhoto/Photo'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="camera" component={Camera} title="Camera" />
          <Scene key="image" component={Photo} title="Photo" />
        </Stack>
      </Router>
    )
  }
}
