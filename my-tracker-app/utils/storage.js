import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "activities";

export const getActivities = async () => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
};

export const saveActivity = async (activity) => {
  const data = await getActivities();
  data.push(activity);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const deleteActivity = async (index) => {
  const data = await getActivities();
  data.splice(index, 1);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
