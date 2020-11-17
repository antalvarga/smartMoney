import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const BalanceLabel = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>R$ 2.064,35</Text>
        </View>
    );
};

export default BalanceLabel;