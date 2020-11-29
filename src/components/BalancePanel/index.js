import React from 'react';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 15:41 - TouchableOpacity
// import {View, Button } from 'react-native';
import {View, TouchableOpacity, Text } from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 04:40
import LinearGradient from 'react-native-linear-gradient'; 

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';
import styles from './styles';


const BalancePanel = ({currentBalance}) => {
    
    return(
        // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 15:00
        <View style={styles.container}>

            <LinearGradient 
                // colors={['#4c669f', '#192f69']}
                colors={[Colors.violet, Colors.blue]}
                style={styles.panel}
            >
                <BalancePanelLabel currentBalance={currentBalance}/>
                <BalancePanelChart />

                {/* <Button title='Add' /> */}
            </LinearGradient>

            <TouchableOpacity style={styles.button}>
                <Text>+</Text>
            </TouchableOpacity>

        </View>
    );
}


export default BalancePanel;