import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = {
  set: async (key: string, object: string) => {
    await AsyncStorage.setItem(key, object);
  },
  get: async (key: string) => {
    return await AsyncStorage.getItem(key);
  },
  remove: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};
export {storage};
