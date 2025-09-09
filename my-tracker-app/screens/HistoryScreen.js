import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import ActivityItem from "../components/ActivityItem";
import { deleteActivity, getActivities } from "../utils/storage";

export default function HistoryScreen() {
  const [activities, setActivities] = useState([]);

  const load = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (index) => {
    await deleteActivity(index);
    load();
  };

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <Text className="text-3xl font-extrabold text-gray-800 mb-6">Meine Aktivitäten</Text>
      <FlatList
        data={activities}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <ActivityItem item={item} onDelete={() => handleDelete(index)} />
        )}
      />
    </View>
  );
}
