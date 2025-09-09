import { AntDesign } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

export default function ActivityItem({ item, onDelete }) {
  return (
    <View className="flex-row justify-between items-center bg-white p-5 rounded-2xl mb-4 shadow-md">
      <View>
        <Text className="text-lg font-semibold text-gray-800">
          {item.category}
        </Text>
        <Text className="text-base text-blue-600 font-medium">
          {item.distance} km
        </Text>
        <Text className="text-sm text-gray-500">{item.date}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="closecircle" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )
}
