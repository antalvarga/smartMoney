// Aula: Hook useBalance - 08:19 - useState
import React, {useState} from 'react';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 15:41 - TouchableOpacity
// import {View, Button } from 'react-native';
import {View, Text, TouchableOpacity, StatusBar } from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 04:40
import LinearGradient from 'react-native-linear-gradient'; 

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';


// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 17:47
// import Icon from 'react-native-vector-icons/Feather';
//import Icon from 'react-native-vector-icons/MaterialIcons';

// import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';


// import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

/*
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

google
react-native+react-native-vector-icons/FontAwesome+ erro+unreconized font family 'FontAwesome'
*/


// Aula: Hook useBalance - 08:06 - useBalance
import useBalance from '../../hooks/useBalance';

import Colors from '../../styles/Colors';
import styles from './styles';



// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:15
// const BalancePanel = ({currentBalance, onNewEntryPress}) => {
const BalancePanel = ({onNewEntryPress}) => {
    
    // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:13
    // Aula: Hook useBalance - 08:28 - Remover currentBalance
    // const currentBalance = 2064.35;

    // Aula: Hook useBalance - 08:28 - 
    const [balance] = useBalance();

    return(
        // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 15:00
        <View style={styles.container}>

            {/* // Aula: Integrando com o sistemas de rota dinâmica - 22:53 */}
            <StatusBar barStyle="light-content" backgroundColor={Colors.background}/>


            <LinearGradient 
                // colors={['#4c669f', '#192f69']}
                // Preferencia pessoal
                // colors={[Colors.violet, Colors.blue]}
                
                // colors={['#4c669f', '#192f69']}
                colors={[Colors.background, Colors.blue]}
                style={styles.panel}
            >
                {/* // Aula: Hook useBalance - 08:38 - trocar currentBalance por balance */}
                {/* <BalancePanelLabel currentBalance={currentBalance}/> */}
                <BalancePanelLabel currentBalance={balance}/>
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
                <Icon name='add' size={30} color={Colors.white} /> 
                {/* <Icon name='plus' size={40} color={Colors.white} />  */}
                {/* <Text>+</Text> */}
            </TouchableOpacity>

        </View>
    );
}


export default BalancePanel;