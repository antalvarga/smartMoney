import React from 'react';
import {View, Button } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import styles from './styles';

const BalancePanel = () => {
    const currentBalance = '2.064,35';

    return(
        <View style={styles.container}>
            <BalancePanelLabel currentBalance={currentBalance}/>
            <BalancePanelChart />

            {/* <Button title='Add' /> */}
        </View>
    );
}


export default BalancePanel;