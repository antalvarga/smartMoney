// Aula: Integrando com o sistemas de rota dinâmica - 10:30
import AsyncStorage from '@react-native-community/async-storage';

export const isInitialized = async () => {

    const openingBalance = await AsyncStorage.getItem('openingBalance');

    // Para retornar true / false visto que o AsyncStorage só aceita string
    return openingBalance !== null && openingBalance === 'true';

};

export const setInitialized = async () => {

    await AsyncStorage.setItem('openingBalance', 'true');
};

export const cleanInitialized = async () => {

    await AsyncStorage.removeItem('openingBalance');
}