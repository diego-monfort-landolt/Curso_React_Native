import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const categories = ["Joggen", "Laufen", "Wandern"];

  return (
   <View className="flex-1 items-center justify-center bg-gray-50 px-6">
  <Text className="text-3xl font-extrabold text-gray-800 mb-8">
    Aktivität wählen
  </Text>
  {categories.map((cat) => (
    <TouchableOpacity
      key={cat}
      className="bg-blue-600 w-full py-4 mb-4 rounded-2xl shadow-md items-center"
      onPress={() => navigation.navigate("Tracker", { category: cat })}
    >
      <Text className="text-white text-lg font-semibold">{cat}</Text>
    </TouchableOpacity>
  ))}
      <TouchableOpacity
        className="absolute bottom-10 bg-gray-700 px-6 py-3 rounded-2xl"
        onPress={() => navigation.navigate("History")}
      >
        <Text className="text-white">Meine Aktivitäten</Text>
      </TouchableOpacity>
    </View>
  );
}
