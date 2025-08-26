import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from 'react-native';

export default function App() {
    const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white'}}>Hi Diego!</Text>
      <Text style={{ color: 'white'}}>teste...</Text>
      <Image source={{ 
        uri: 'https://avatars.githubusercontent.com/u/75099835?v=4' }} 
        style={{ 
          width: 200, 
          height: 200,
          margin: 20,
          }} 
          />
      <StatusBar style="light" />
      <Button  
      color='red'
      title='Pulsa aqui...'
      onPress={() => alert('Ola Diego!')} 
      />
      <TouchableHighlight 
      underlayColor={'#09f'}
      style={{ marginTop: 20, marginBottom: 20 }}
      onPress={() => alert('Ola Diego!')} >
        <Text style={{ 
          color: 'white',  
          padding: 10, 
          backgroundColor: 'green', 
          borderRadius: 5 }}>Touchable Highlight</Text>
      </TouchableHighlight>

        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>

         <Pressable
          onPress={() => {
            setTimesPressed(current => current - 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me -'}</Text>
          )}
        </Pressable>
        <View style={styles.logBox}>
          <Text testID="pressable_press_console">{textLog}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  logBox: {
    padding: 10,
    width: 200,
    height:150,
    borderRadius: 5,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    boxSizing: 'stretch'
  },
  wrapperCustom: {
    margin: 10,
    borderRadius: 8,
    boxShadow: '0 1px 3px #fff',
  }
});
