import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { HR, CategoryPicker } from "ReactNativeNotas/src/components";
import basicStyles from '../../styles/basicStyles'


const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 50
  },
  input: {
    width: "90%"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  note: {
    fontSize: 16,
    textAlignVertical: "top"
  },
  timestamp: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 15
  },
  categoryRow: {
    width: "100%",
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  colorView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5
  }
});

class NoteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.navigation.getParam("note"),
      modalVisible: false
    };
  }

  toggleCategoryPicker = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  handleChangeColor = category => {
    this.setState({ modalVisible: false });
    this.updateNoteState({ category });
  };

  updateNoteState = property => {
    const newNote = { ...this.state.note, ...property };
    this.setState({ note: newNote });
  };

  render() {
    const { note, modalVisible } = this.state;
    const { title, text, created, category } = note;
    return (
      <View style={[basicStyles.container, styles.container]}>
        <Text style={basicStyles.title}>Crear Nota</Text>
        <View style={styles.timestamp}>
          {created && (
            <Text>
              {created.toLocaleTimeString()} - {created.toLocaleDateString()}
            </Text>
          )}
        </View>
        <TextInput
          style={[styles.input, styles.title]}
          placeholder="Título"
          value={title}
          onChangeText={text => this.updateNoteState({ title: text })}
        />
        <HR />
        <TextInput
          style={[styles.input, styles.note]}
          placeholder="Nota"
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={text => this.updateNoteState({ text })}
        />
        <TouchableOpacity
          style={styles.categoryRow}
          onPress={this.toggleCategoryPicker}
        >
          {category && (
            <React.Fragment>
              <View
                style={[styles.colorView, { backgroundColor: category.color }]}
              />
              <Text>{category.category}</Text>
            </React.Fragment>
          )}
          {!category && <Text>Elige categoría</Text>}
        </TouchableOpacity>
        <CategoryPicker
          visible={modalVisible}
          onChange={this.handleChangeColor}
          onRequestClose={this.toggleCategoryPicker}
        />
      </View>
    );
  }
}

export default NoteScreen;