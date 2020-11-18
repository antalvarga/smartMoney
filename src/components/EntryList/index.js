import React from 'react';
import {View, Text, FlatList} from 'react-native';

import EntryListItem from './EntryListIem';

import styles from './styles';

// Adicionando as Props em Todos os Componentes - 04:00
// const EntryList = () => {
const EntryList = ({entries}) => {
    return(
        <View>
            
            {/* <EntryListItem /> */}
            <Text style={styles.title}>Últimos Lançamentos</Text>

            {/* // Adicionando as Props em Todos os Componentes - 05:32 */}
            {/*             
            <FlatList
                data={[
                    {key: 'Padaria Asa Branca: 10'}
                    , {key: 'SumerMercado CrisTal: 190'}
                    , {key: 'Posto Ipiranga: 190'}
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            /> */}

            <FlatList
                data={entries}
                renderItem={({item}) => <Text style={styles.entry}>{item.description} -> $ {item.amount}</Text>}
            /> 


        </View>
    );
};


export default EntryList;
