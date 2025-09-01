import { useEffect, useState } from "react"
import { View, ActivityIndicator, FlatList } from "react-native"
import { getLatestGames } from "../lib/freeGamesFetcher"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import AnimatedGameCard from "./GameCard"
import Logo from "./Logo"

export default function Main({ g, index }) {
  const [game, setGame] = useState([])
  const insets = useSafeAreaInsets()
  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ height: 20, margin: 2 }}>
        <Logo width={80} height={80} style={{ alignSelf: "left" }} />
      </View>
      {game.length === 0 ? (
        <ActivityIndicator color={'red'} size={'large'} />) : (
        <FlatList
          data={game.slice(0, 50)} 
          keyExtractor={(game) => game.id}
          marginTop={40}
          renderItem={({ item, index }) => <AnimatedGameCard key={index} g={item} index={index} />}
        />
      )}
    </View>
  )
}