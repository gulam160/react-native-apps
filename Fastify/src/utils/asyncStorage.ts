import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItems = async (key : string, value : string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.error((error as Error).message);
    }
}

export const getItems = async (key : string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error((error as Error).message);
    }
}

export const removeItems = async (key : string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.error((error as Error).message);
    }
}