import { Text, ScrollView, Pressable } from "react-native"
import { Link } from "expo-router"
import { HomeIcon } from "../components/Icons"

export default function About() {
  return (
    <ScrollView>
      <Link className="text-xl mt-24 text-blue-500" href="/" asChild>
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        Sobre el proyecto
      </Text>
      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text clasName="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
    </ScrollView>
  )
}
