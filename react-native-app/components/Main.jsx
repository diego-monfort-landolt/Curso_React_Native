import { useEffect, useState } from "react"

import { View, ScrollView, ActivityIndicator, FlatList } from "react-native"
import { getLatestGames } from "../lib/freeGamesFetcher"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import GameCard from "./GameCard"
import Logo from "./Logo"

export default function Main({ g, index }) {
  const [game, setGame] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ height: 20 }}>
        <Logo width={100} height={100} style={{ alignSelf: "left" }} />
      </View>

      
      {game.length === 0 ? (
        <ActivityIndicator color={'#red'} size={'large'} />) : (
        <FlatList
          data={game.slice(0, 20)} // Zeigt nur die ersten 10 Einträge
          keyExtractor={(g) => g.index}
          renderItem={({ item, index }) => <GameCard key={index} g={item} />}
        />
      )}
    </View>
  )
}