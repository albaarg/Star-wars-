import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem("favorites list", JSON.stringify(favorites));
  } catch (e) {
    console.log('Error saving favorites to AsyncStorage: ', e);
  }
};``

export const loadFavorites = async () => {
  try {
    const value = await AsyncStorage.getItem("favorites list");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Error loading favorites from AsyncStorage: ', e);
  }
};