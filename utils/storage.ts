import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeObj(key:string, value: {}): Promise<void> {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.error("OBJECT SAVING ERROR")
    }
}

export async function storeStr(key: string, value: string): Promise<void> {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.error("STRING SAVING ERROR")
    }
}


export async function getObj(key: string): Promise<any> {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.error("OBJECT GETTING ERROR")
    }
}


export async function getStr(key: string): Promise<any> {
    try {
        return await AsyncStorage.getItem(key)
    } catch(e) {
        console.error("STRING GETTING ERROR")
    }
}
