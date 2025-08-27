import { useEffect, useState } from "react"

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,

} from "react-native"
import { getLatestGames } from "../lib/freeGamesFetcher"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Main() {
  const [game, setGame] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])

 return (
  <View style={{ paddingTop: insets.top, paddingBlock: insets.bottom }}> 
  <ScrollView>
      {game.slice(0, 17).map((g, index) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: g.image }} style={styles.image} />
        <Text style={styles.title}>{g.title}</Text>
         <Text style={styles.description}>{g.description}</Text>
        <Text style={styles.date}>{g.releaseDate}</Text>    
      </View>
    ))}
    </ScrollView>
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

