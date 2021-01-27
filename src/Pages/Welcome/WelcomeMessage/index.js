import React from 'react';
import {View, Text} from 'react-native';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 09:15 - style
import styles from './styles';




const WelcomeMessage = () => {
    return(
        <View>
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.message}>Para usar o Smart Money você precisa informar o saldo atual</Text>
            <Text style={styles.message2}>Simba? </Text>
        </View>
    )
}



export default WelcomeMessage;