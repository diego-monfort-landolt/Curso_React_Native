import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from '../screens/NotesScreen/notes';
import NoteScreen from '../screens/NoteScreen/note';
import CategoriesScreen from '../screens/CategoriesScreen/categories';
import SettingsScreen from '../screens/SettingsScreen/settings'; // <--- Passe diesen Import an!

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}