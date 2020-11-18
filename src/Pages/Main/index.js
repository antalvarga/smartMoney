import React from 'react';
import {View, Button } from 'react-native';

import styles from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';


const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <BalancePanel />
            
            <Button title='Add' onPress={() => navigation.navigate('NewEntry')} />

            <EntrySummary />
            <EntryList />
            
        </View>
    );
};

export default Main;