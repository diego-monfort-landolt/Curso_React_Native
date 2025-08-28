import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { NotesScreen, NoteScreen, CategoriesScreen, SettingsScreen } from './src/screens/screens';
import AppNavigator from "./src/navigation/AppNavigator";


export default function App() {
 

  return (
    <React.Fragment>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
