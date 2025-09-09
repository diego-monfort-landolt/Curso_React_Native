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
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Meine Aktivitäten</Text>
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
