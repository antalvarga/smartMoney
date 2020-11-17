import React from 'react';
import {View } from 'react-native';

import styles from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';


const Main = () => {
    return (
        <View style={styles.container}>
            
            <BalancePanel />
            <EntrySummary />
            <EntryList />
            
        </View>
    );
};

export default Main;