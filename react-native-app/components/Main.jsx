import { useEffect, useState } from "react"
import { Link } from "expo-router"
import { Pressable, Text } from "react-native";
import { View, ActivityIndicator, FlatList } from "react-native"
import { getLatestGames } from "../lib/freeGamesFetcher"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import AnimatedGameCard from "./GameCard"
import { styled } from "nativewind";
import { InfoIcon } from "./Icons"

const StyledPresasable = styled(Pressable);

export default function Main({ g }) {
  const [game, setGame] = useState([])
  const insets = useSafeAreaInsets()
  useEffect(() => {
    getLatestGames().then((data) => setGame(data))
  }, [])


  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Link href='/about' asChild>
        <StyledPresasable className={`active:opacity-50 absolute top-5 left-4 bg-black/60 p-2 rounded-lg `}>
         <InfoIcon />
        </StyledPresasable>
         
        
      </Link>
      {/* <View style={{ height: 20, margin: 2 }}>
        <View className="absolute top-5 left-4 bg-black/60 p-2 rounded-lg ">
          <Logo width={48} height={48} />
        </View>
      </View> */}
      {game.length === 0 ? (
        <ActivityIndicator color={'red'} size={'large'} />) : (
        <FlatList
          className="m-4"
          data={game.slice(0, 50)}
          keyExtractor={(item) => item.id}
          marginTop={30}
          renderItem={({ item }) => <AnimatedGameCard key={item} g={item} />}
        />
      )}
    </View>
  )
}