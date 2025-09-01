import  Slot  from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  Main from "../components/Main";

export default function Layout() {
  return (
      <View className="flex-1 bg-slate-700 items-center justify-center p-4">
        <Main />
        {/* <Slot /> */}
      </View>
      
    
  );
}
