import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import {
  NotesScreen,
  NoteScreen,
  CategoriesScreen,
  SettingsScreen
} from "../screens";

export default createAppContainer(
  createStackNavigator({
    Notes: NotesScreen,
    Note: NoteScreen,
    Categories: CategoriesScreen,
    Settings: SettingsScreen
  })
);