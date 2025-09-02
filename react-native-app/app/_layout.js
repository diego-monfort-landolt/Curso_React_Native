import  Slot  from "expo-router";
import { View } from "react-native";
import  Main from "../components/Main";

export default function Layout() {
  return (
      <View className="flex-1 bg-slate-700 items-center justify-center p-4">
        <Main />
        {/* <Slot /> */}
      </View>
      
    
  );
}
