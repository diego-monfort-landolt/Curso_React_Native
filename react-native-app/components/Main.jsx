import { useEffect, useState } from "react"
import { Link } from "expo-router"
import { Pressable, Text } from "react-native";
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
      <Link href="../app/about" asChild>
        <Pressable className="mt-40 p-4 m-4 z-50 relative bg-white rounded-lg shadow">
          <Text className="text-xl text-blue-500">Dale iir al about</Text>
        </Pressable>
      </Link>

      <View style={{ height: 20, margin: 2 }}>

        <View className="absolute top-1 right-4 bg-black/60 p-2 rounded-lg">
          <Logo width={48} height={48} />
        </View>
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