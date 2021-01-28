// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 11:19
import React from 'react';
import {View, Text} from 'react-native';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 15:11
import InputMoney from '../../../components/Core/InputMoney';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 15:50
import styles from './styles';




// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 17:13 - substituir amount -> Value
const WelcomeBalanceInput = ({value, onChangeValue}) => {
    return (
        <View style={styles.label}>
            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 15:41 */}
            <Text>Informe seu saldo</Text>

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 17:04 */}
            <InputMoney value={value} startWithDebit={false} onChangeValue={onChangeValue} />
        </View>
    );
};



export default WelcomeBalanceInput;