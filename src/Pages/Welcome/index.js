import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 08:33 - WelcomeMessage
import WelcomeMessage from './WelcomeMessage';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 11:35 - 
import WelcomeBalanceInput from './WelcomeBalanceInput';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 06:38 - logo
import Logo from '../../assets/logo-white.png';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 03:26
import styles from './styles';






// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 03:12 - navigation
const Welcome = ({navigation}) => {

    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 12:06
    const [amount, setAmount] = useState(0);

    return (
        <View style={styles.container}>

            <View style={styles.logo}>

                <Image source={Logo} />

            </View>

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 08:58 */}
            {/* <Text>Welcomes</Text> */}
            <WelcomeMessage />

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 11:47 */}
            <WelcomeBalanceInput amount={amount} onChangeValue={setAmount} />

        </View>
    );
};




export default Welcome;