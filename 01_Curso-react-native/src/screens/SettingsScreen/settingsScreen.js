import { Text, View } from 'react-native'
import React, { Component } from 'react'
import basicStyles from '../../styles/basicStyles'

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={basicStyles.container}>
        <Text style={{color: 'white' }}>Settings</Text>
      </View>
    )
  }
}