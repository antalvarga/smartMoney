import React from 'react';
import {View, Button } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import styles from './styles';

const BalancePanel = () => {
    return(
        <View style={styles.container}>
            <BalancePanelLabel />
            <BalancePanelChart />

            <Button title='Add' />
        </View>
    );
}


export default BalancePanel;