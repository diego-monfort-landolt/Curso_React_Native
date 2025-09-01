import { Slot } from "expo-router";
import About from "../app/about";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Main from "../components/Main";

export default function Layout() {
  return (
    <SafeAreaView className="flex-1 bg-slate-700">
      <View className="items-center justify-center p-4">
        <Text className="text-white text-3xl font-bold mb-4">Free Games</Text>
        <Main />
      </View>
      {/* <Slot /> */}
    </SafeAreaView>
  );
}
