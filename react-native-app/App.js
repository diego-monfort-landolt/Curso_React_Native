import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native"
import { getLatestGames } from "./lib/freeGamesFetcher"

export default function App() {
  const [game, setGame] = useState([])

  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])

 return (
  <View style={styles.container}>
    {game.slice(0, 5).map((g, index) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: g.image }} style={styles.image} />
        <Text style={styles.title}>{g.title}</Text>
        <Text style={styles.date}>{g.releaseDate}</Text>
      </View>
    ))}
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 100,
  },
  title: {
    color: "white",
    marginTop: 10,
  },
  date: {
    color: "gray",
  },
})

