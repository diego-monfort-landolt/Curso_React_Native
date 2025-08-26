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
        <View key={index} style={{ marginTop: 20, alignItems: "center" }}>
          <Image
            source={{ uri: g.image }}
            style={{ width: 150, height: 100 }}
          />
          <Text style={{ color: "white" }}>{g.title}</Text>
          <Text style={{ color: "gray" }}>{g.releaseDate}</Text>
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
})
