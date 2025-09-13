import {
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native"
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

      <Text className="text-white font-bold mb-6 text-current">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-current">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://pixabay.com/de/images/search/strand/")
        }
        className="mb-6"
      >
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/04/16/01/36/woman-7135489_640.jpg",
          }}
          className="w-full h-screen object-cover rounded-lg"
        />
      </TouchableOpacity>

      <Text className="text-white font-bold mb-6 text-1xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <Text className="text-white font-bold mb-6 text-1xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <Text className="text-white font-bold mb-6 text-1xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <Text className="text-white font-bold mb-6 text-1xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_1280.jpg",
        }}
        className="w-full h-screen object-cover bottom-0 mb-6 rounded-lg"
      />

      <Text className="text-white font-bold mb-6 text-1xl">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2014/03/24/10/17/beach-293826_1280.jpg",
        }}
        className="w-full h-screen object-cover bottom-0 mb-6 rounded-lg"
      />

      <Text className="text-white font-bold mb-6 text-current">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-current">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>

      <Text className="text-white font-bold mb-6 text-current">
        This is a simple app to show free games using React Native and Expo.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis lorem
      </Text>
    </ScrollView>
  )
}
