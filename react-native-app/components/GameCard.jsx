import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native"

export default function GameCard({ g, index }) {
  return (

    <View key={index} style={styles.card}>
      <Image source={{ uri: g.image }} style={styles.image} />
      <Text style={styles.title}>{g.title}</Text>
      <Text style={styles.description}>{g.description}</Text>
      <Text style={styles.date}>{g.releaseDate}</Text>
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
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 20,
    elevation: 5,
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