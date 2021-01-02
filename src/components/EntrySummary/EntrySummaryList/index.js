import React from 'react';
import { View, Text, FlatList} from 'react-native';

import styles from './styles';

// Adicionando as Props em Todos os Componentes - 07:38
// Aula: Gráfico de lançamentos por categoria - Parte 2 - 09:11 - substituir entriesGrouped por data
// const EntrySummaryList = ({entriesGrouped}) => {
    const EntrySummaryList = ({data}) => {
        return(
            <View style={styles.container}>
            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 08:22 */}
            {/* <Text style={styles.title}>Categorias</Text> */}

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
            
            {/* // Aula: Gráfico de lançamentos por categoria - Parte 2 - 09:26 - remover FlatList */}
            {/* 
            <FlatList
                // Aula: Gráfico de lançamentos por categoria - Parte 2 - 09:11 - substituir entriesGrouped por data
                // data={entriesGrouped}
                data={data}
                renderItem={({item}) => <Text style={styles.entry}>{item.description} - <Text style={styles.entryAmount}>$ {item.amount}</Text> </Text>}
            /> 
            */}



        </View>
    )
};

export default EntrySummaryList;


