import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Detail(){
  return (
    <View>
      <Text>Detail Page</Text>
      <Link href='/' className="text-blue-500">volver atras</Link>
    </View>
  );
}