import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Detail(){
  const { gameslug } = useLocalSearchParams();
  return (
    <View>
      <Text>Detaile del juego {gameslug}</Text>
      <Link href='/' className="text-blue-500">volver atras</Link>
    </View>
  );
}