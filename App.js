import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // <-- Image hinzugefügt

const splash = require('./assets/compt2.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Diego!</Text>
      <Text>Esto es un test...</Text>
      <Image source={splash} 
      style={{ 
        width: 100, 
        height: 100, 
        borderRadius: 10,
        boxShadow: '#000',
        marginTop: 20,
        }} 
        />
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