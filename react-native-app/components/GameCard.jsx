import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native"

export default function GameCard({ g, index }) {
  return (

    <View key={index} style={styles.card}>
      <Image source={{ uri: g.image }} style={styles.image} />
      <Text style={styles.title}>{g.title}</Text>
      <Text style={styles.description}>{g.description}</Text>
      <Text style={styles.date}>{g.releaseDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 60,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 100,
  },
  title: {
    color: "red",
    fontFamily: "Arial",
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  description: {
    color: "lightgray",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  date: {
    color: "gray",
  },
})