import { useEffect, useState } from "react"
import { Link } from "expo-router"
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
        <View className="absolute top-1 right-4 bg-black/60 p-2 rounded-lg">
          <Logo width={48} height={48} />
        </View>

        <Link href="./about" className="text-blue-500" >iir al about
        </Link>
      </View>

      {game.length === 0 ? (
        <ActivityIndicator color={'red'} size={'large'} />) : (
        <FlatList
          data={game.slice(0, 50)}
          keyExtractor={(item) => item.id}
          marginTop={30}
          renderItem={({ item }) => <AnimatedGameCard key={index} g={item} />}
        />
      )}
    </View>
  )
}