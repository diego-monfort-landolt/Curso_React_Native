import { View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
      <View className="flex-1 bg-slate-700 items-center justify-center p-4">
       <Slot />
      </View>
  );
}
