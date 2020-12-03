import React from 'react';
import {View, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 02:02
import LinearGradient from 'react-native-linear-gradient';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 02:02
import Colors from '../../styles/Colors';


import styles from './styles';



// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
// const BalanceLabel = ({currentBalance}) => {
const BalanceLabel = () => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
    const currentBalance = 'R$ 2.065,35';

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>

            <LinearGradient style={styles.panel} colors={[Colors.violet, Colors.blue]}>
                <Text style={styles.value}>{currentBalance}</Text>
            </LinearGradient>

        </View>
    );
};

export default BalanceLabel;