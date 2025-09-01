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

    <View key={index} >
    
      <View className="flex-row gap-4"> 
      <Image source={{ uri: g.image }} style={styles.image} />
      <Text className="mb-1" style={styles.title}>{g.title}</Text>
      <Text className="mb-2" style={styles.description}>{g.description}</Text>
      <Text style={styles.slug}>{g.slug}</Text>
      {/* <Score score={g.date} maxScore={10} /> */}
      <Text style={styles.date}>{g.releaseDate}</Text>
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