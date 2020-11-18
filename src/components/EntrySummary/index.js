import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({entriesGrouped}) => {
    return(
        <View style={styles.container}> 
        
            <EntrySummaryChart />

            <EntrySummaryList entriesGrouped={entriesGrouped} />

        </View>
    );
};


export default EntrySummary;