// Aula: Hook useBalance - 09:28 - useState
import React, {useState} from 'react';
import {View, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 02:02
import LinearGradient from 'react-native-linear-gradient';

// Aula: Hook useBalance - 09:13
import useBalance from '../../hooks/useBalance';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 02:02
import Colors from '../../styles/Colors';
import styles from './styles';



// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
// const BalanceLabel = ({currentBalance}) => {
const BalanceLabel = () => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
    // Aula: Hook useBalance - 09:35 - remover currentBalance
    // const currentBalance = 'R$ 2.065,35';

    // Aula: Hook useBalance - 09:35 -
    const [balance] = useBalance();
    
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>

            <LinearGradient style={styles.panel} colors={[Colors.violet, Colors.blue]}>
                {/* // Aula: Hook useBalance - 09:35 - trocar currentBalance por balance */}
                {/* <Text style={styles.value}>{currentBalance}</Text> */}
                <Text style={styles.value}>{balance}</Text>
            </LinearGradient>

        </View>
    );
};

export default BalanceLabel;