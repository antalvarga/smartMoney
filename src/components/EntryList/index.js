import React from 'react';
import {View, Text, FlatList} from 'react-native';

import EntryListItem from './EntryListIem';

import styles from './styles';


const EntryList = () => {
    return(
        <View>
            
            {/* <EntryListItem /> */}
            <Text style={styles.title}>Últimos Lançamentos</Text>

            <FlatList
                data={[
                    {key: 'Padaria Asa Branca: 10'}
                    , {key: 'SumerMercado CrisTal: 190'}
                    , {key: 'Posto Ipiranga: 190'}
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />

        </View>
    );
};


export default EntryList;
