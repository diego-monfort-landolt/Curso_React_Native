import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native"
import { Link } from "expo-router"
import { styled } from "nativewind";

const StyledPresasable = styled(Pressable);

export default function GameCard({ g }) {
  return (
    <Link href={`/${g.slug}`}  asChild>
      <StyledPresasable className={`active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4 `}>
        <View key={g.slug} className="flex-row gap-4 ">       
            <Image
              source={{ uri: g.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View className="flex-shrink">

              <Text className="text-base font-bold text-white mb-1" numberOfLines={1}>
                {g.title}
              </Text>
              <Text className="text-sm text-white mb-3  max-w-[220px] break-words" style={styles.title} numberOfLines={5}>
                {g.description.slice(0, 50)}...
              </Text>
              <Text className="text-xs text-gray-400 mb-4" numberOfLines={1}>
                {g.slug}
              </Text>
              <Text className="text-xs text-gray-300" numberOfLines={1}>
                {g.releaseDate}
              </Text>
            </View>
          </View>
      </StyledPresasable>
    </Link>
  )
};

export function AnimatedGameCard({ g, index }) {
  const opacity = useRef(new Animated.value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard g={g} />
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  card: {
     marginBottom: 42,
    alignItems: "center",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
     fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
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