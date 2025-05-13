import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "task";

const getData = async () => {
    
    let data= JSON.parse(await AsyncStorage.getItem(key))

    // se não houverem dados, preencher e salvar um array vazio
    if (data == null) {
        data = new Array()
        setData(data)
    }
   return data
}

const setData= async (value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export {
    getData,
    setData
}