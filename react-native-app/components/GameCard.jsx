import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native"
import Score from "./Score";

export default function GameCard({ g, index }) {
  return (

    <View key={index} className="bg-slate-800 rounded-xl overflow-hidden mb-4">
     <View className="flex-row items-center p-4 gap-4">
    <Image
      source={{ uri: g.image }}
      className="w-24 h-24 rounded-lg"
      resizeMode="cover"
    />

    <View className="flex-2">
      <Text className="text-base font-bold text-white mb-1" numberOfLines={1}>
        {g.title}
      </Text>
      <Text className="text-sm text-white mb-2  max-w-[220px] break-words" numberOfLines={5}>
        {g.description.slice(0, 50)}...
      </Text>
      <Text className="text-xs text-gray-400 mb-1" numberOfLines={1}>
        {g.slug}
      </Text>
      <Text className="text-xs text-gray-500" numberOfLines={1}>
        {g.releaseDate}
      </Text>
    </View>
  </View>
     
    </View>
  )
};

export function AnimatedGameCard({ g, index }) {
  const opacity = useRef(new Animated.value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard g={g} index={index} />
    </Animated.View>
  );
};


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
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 25,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 20,
    elevation: 5,
  },
  description: {
    color: "lightgray",
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  slug: {
    color: "cyan",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  date: {
    color: "gray",
  },
})