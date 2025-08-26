import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"
import { getLatestGames } from "./lib/freeGamesFetcher"

export default function App() {
 return (
  <View style={styles.container}>
    <StatusBar style="light" />
    {/* <SafeAreaView style={{ margin: '24' }}/> solo para ios para android no funciona  */}
    <Main />
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    
  }
})

