import React from 'react';
import { View, Text, FlatList} from 'react-native';

import styles from './styles';


const EntrySummaryList = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

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
        </View>
    )
};

export default EntrySummaryList;


