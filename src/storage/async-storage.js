import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "task";

const getData = async () => {
    return await AsyncStorage.getItem(key);
}

const setData= async (value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export {
    getData,
    setData
}