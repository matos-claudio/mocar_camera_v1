import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Camera, {
  Aspect,
  CaptureQuality,
  TorchMode,
} from 'react-native-openalpr'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    left: 50,
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  preview: {
    flex: 1
  }
})

export default class PlateRecognizer extends React.Component {
  state = {
    plate: 'Scan a plate',
  }

  onPlateRecognized = ({ plate, confidence }) => {
    console.log(`plate >>> ${plate} --- confidence >>> ${confidence}`)
    this.setState({
      plate,
    })
  }

  // onPlateRecognized = ({ plate, confidence }) => {
  //   console.log(`AQUI >>> ${plate}`)
  // }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          aspect={Aspect.fill}
          captureQuality={CaptureQuality.medium}
          country="us"
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#ff0000"
          showPlateOutline
          zoom={0}
          torchMode={TorchMode.off}
          touchToFocus
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.plate}</Text>
        </View>
      </View>
    )
  }
}