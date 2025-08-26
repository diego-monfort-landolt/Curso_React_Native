import { Text, View } from 'react-native'
import React, { Component } from 'react'
import basicStyles from '../../styles/basicStyles'

export default class NotesScreen extends Component {
  render() {
    return (
      <View style={basicStyles.container}>
        <Text style={{color: 'white' }}>Notas</Text>
      </View>
    )
  }
}