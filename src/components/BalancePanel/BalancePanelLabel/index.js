import React from 'react';
import {View, Text} from 'react-native';

// Aula: Formatacação de moedas e data - 06:51
import Currency from '../../Core/Currency';

import styles from './styles';





const BalancePanelLabel = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo s atual</Text>
            {/* // Aula: Formatacação de moedas e data -  */}
            {/* <Text style={styles.value}>{currentBalance}</Text> */}
            <Text style={styles.value}>
                <Currency value={currentBalance}/>
            </Text>
        </View>
    );

};





export default BalancePanelLabel;