import { Text, ScrollView, Pressable } from "react-native"
import { Link } from "expo-router"
import { HomeIcon } from "../components/Icons"

import { styled } from "nativewind"

const StyledPresasable = styled(Pressable)

export default function About() {
  return (
    <ScrollView>
      <Link className="text-xl mt-24 text-blue-500" href="/" asChild>
        <StyledPresasable
          className={`opacity-90 data-[active=true]:opacity-3  border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4 w-20 justify-center flex-shrink items-center`}
        >
          <HomeIcon />
        </StyledPresasable>
      </Link>

      <Text className="text-white font-bold mb-6 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-2xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
    </ScrollView>
  )
}
