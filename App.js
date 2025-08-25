import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // <-- Image hinzugefügt

const splash = require('./assets/compt2.jpg');

export default function App() {
  return (
    <View style={styles.container}> 
    <Image blurRadius={5}  source={splash} 
      style={{ 
        width: 400, 
        height: 150, 
        borderRadius: 10,
        boxShadow: '#000',
        marginBottom: 20,
        resizeMode: 'cover'
        }} 
        />
        <Image source={{uri: 'https://avatars.githubusercontent.com/u/75099835?v=4'}} style={{width: 100, height: 80 }} /> 
      <Text>Hi Diego!</Text>
      <Text>Esto es un test...</Text>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});