import React from 'react';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 15:41 - TouchableOpacity
// import {View, Button } from 'react-native';
import {View, TouchableOpacity, Text } from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 04:40
import LinearGradient from 'react-native-linear-gradient'; 

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';


// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 17:47
// import Icon from 'react-native-vector-icons/Feather';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

/*

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;



google
react-native+react-native-vector-icons/FontAwesome+ erro+unreconized font family 'FontAwesome'
*/


import Colors from '../../styles/Colors';
import styles from './styles';


// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:15
// const BalancePanel = ({currentBalance, onNewEntryPress}) => {
const BalancePanel = ({onNewEntryPress}) => {
    
    // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:13
    const currentBalance = 2064.35;

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

            <TouchableOpacity 
                style={styles.button}
                onPress={onNewEntryPress}
            >
                {/* // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 18:15 */}
                {/* <Text>++</Text> */}                
                {/* <Icon name="add" size={30} color="#900" /> */}                
                <Icon name='add' size={40} color={Colors.white} />
            </TouchableOpacity>

        </View>
    );
}


export default BalancePanel;