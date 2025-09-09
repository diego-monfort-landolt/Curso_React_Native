import * as Location from "expo-location"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import MapView, { Marker, Polyline } from "react-native-maps"
import { saveActivity } from "../utils/storage"

export default function TrackerScreen({ route, navigation }) {
  const { category } = route.params
  const [recording, setRecording] = useState(false)
  const [locations, setLocations] = useState([])
  const [distance, setDistance] = useState(0)

  // Distanzberechnung mit Haversine-Formel
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3 // Meter
    const φ1 = (lat1 * Math.PI) / 180
    const φ2 = (lat2 * Math.PI) / 180
    const Δφ = ((lat2 - lat1) * Math.PI) / 180
    const Δλ = ((lon2 - lon1) * Math.PI) / 180

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return (R * c) / 1000 // km
  }

  useEffect(() => {
    let subscription
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") return

      subscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 5 },
        (loc) => {
          if (recording) {
            setLocations((prev) => {
              if (prev.length > 0) {
                const last = prev[prev.length - 1]
                const newDist = getDistance(
                  last.latitude,
                  last.longitude,
                  loc.coords.latitude,
                  loc.coords.longitude
                )
                setDistance((d) => d + newDist)
              }
              return [...prev, loc.coords]
            })
          }
        }
      )
    })()

    return () => subscription?.remove()
  }, [recording])

  const handleStop = async () => {
    setRecording(false)
    if (locations.length > 0) {
      await saveActivity({
        category,
        distance: distance.toFixed(2),
        date: new Date().toLocaleString(),
      })
      navigation.navigate("History")
    }
  }

  return (
    <View className="flex-1">
      <MapView
        className="flex-1"
        initialRegion={{
          latitude: 48.137,
          longitude: 11.575,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {locations.length > 0 && (
          <>
            <Polyline
              coordinates={locations}
              strokeWidth={5}
              strokeColor="blue"
            />
            <Marker coordinate={locations[0]} title="Start" />
            <Marker coordinate={locations[locations.length - 1]} title="Ende" />
          </>
        )}
      </MapView>

      <View className="absolute bottom-12 w-full items-center px-6">
        <Text className="text-2xl font-bold text-gray-800">
          {distance.toFixed(2)} km
        </Text>
        {!recording ? (
          <TouchableOpacity
            className="bg-green-600 px-12 py-4 rounded-full shadow-lg"
            onPress={() => setRecording(true)}
          >
            <Text className="text-white text-lg font-semibold">Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-red-600 px-12 py-4 rounded-full shadow-lg"
            onPress={handleStop}
          >
            <Text className="text-white text-lg font-semibold">Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
