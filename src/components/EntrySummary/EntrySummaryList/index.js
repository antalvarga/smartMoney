import React from 'react';
import { View, Text, FlatList} from 'react-native';

import styles from './styles';

// Adicionando as Props em Todos os Componentes - 07:38
const EntrySummaryList = ({entriesGrouped}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            {/* Adicionando as Props em Todos os Componentes - 09:49 */}
            {/* 
            <FlatList
                data={[
                    {key: 'Alimentação: $201'}
                    , {key: 'Combustível: $12'}
                    , {key: 'Aluguel: $120'}
                    , {key: 'Lazer: $250'}
                    , {key: 'Outros: $1200'}
                ]}
                renderItem={({item}) => <Text style={styles.TextList}>{item.key}</Text>}
            /> 
            */}
            <FlatList
                data={entriesGrouped}
                renderItem={({item}) => <Text style={styles.entry}>{item.description} - $ {item.amount}</Text>}
            /> 



        </View>
    )
};

export default EntrySummaryList;


