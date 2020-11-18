import React from 'react';
import {View, Button } from 'react-native';

import styles from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';


const Main = ({navigation}) => {

    const currentBalance = 2064.35;

    // Adicionando as Props em Todos os Componentes - 04:00
    const entries = [
                    {key: '1', description: 'Padaria Asa Branca', amount: 10}
                    , {key: '2', description: 'SumerMercado CrisTal', amount: 190}
                    , {key: '3', description: 'Posto Ipiranga', amount: 291.66}
                    , {key: '4', description: 'Ponto Cristal', amount: 3000.11}
                ];
    
    // Adicionando as Props em Todos os Componentes - 08:01
    const entriesGrouped = [
                                {key: '1', description:  'Alimentação', amount: 201}
                                , {key: '2', description:  'Combustível', amount: 11}
                                , {key: '3', description:  'Aluguel', amount: 120}
                                , {key: '4', description:  'Lazer', amount: 250}
                                , {key: '5', description:  'Outros', amount: 1200}
                            ];
                
    return (
        <View style={styles.container}>
            
            <BalancePanel currentBalance={currentBalance} />
            
            <Button title='Add' onPress={() => navigation.navigate('NewEntry')} />

            <EntrySummary entriesGrouped={entriesGrouped} />

            {/* // Adicionando as Props em Todos os Componentes - 05:26 */}
            <EntryList entries={entries} />
            
        </View>
    );
};

export default Main;