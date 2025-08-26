import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native"
import { getLatestGames } from "./lib/freeGamesFetcher"

export default function App() {
  const [game, setGame] = useState([])

  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])

 return (
  <View style={styles.container}>
    <StatusBar style="light" />
    {/* <SafeAreaView style={{ margin: '24' }}/> solo para ios para android no funciona  */}

    <ScrollView>
      {game.slice(0, 5).map((g, index) => (
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
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    
  },
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

