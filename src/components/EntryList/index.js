
// Aula: Listando todos os lançamentos - 11:42 - useEffect
// Aula: Listando todos os lançamentos - 15:14 - useState
// Aula: Hook useEntries - 05:57 - Remover - useEffect , useState pois estamos usando useEntries
// import React, {useEffect, useState} from 'react';
import React from 'react';

// Aula: Editando dados de um lançamento - 03:39 - Button
import {View, Text, Button, FlatList} from 'react-native';

import EntryListItem from './EntryListIem';

// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 03:38
import Container from '../../components/Core/Container';

// Aula: Hook useEntries - 04:44
import useEntries from '../../hooks/useEntries';

// Aula: Listando todos os lançamentos - 16:03
import {getEntries} from '../../services/Entries';

import styles from './styles';




// Adicionando as Props em Todos os Componentes - 04:00
// const EntryList = () => {
// Aula: Listando todos os lançamentos - 15:14 - retirar entries    
// const EntryList = ({entries}) => {
// Aula: Editando dados de um lançamento - 02:22 - navigation
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - Retirar o navigation
// const EntryList = ({navigation}) => {
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 26:40 - onEntryPress    
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 29:23 - onPressActionButton    
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 06:52 - days
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 26:23 - category
const EntryList = ({days = 7, category, onEntryPress, onPressActionButton}) => {

    // Aula: Listando todos os lançamentos - 15:14 - useState
    // Aula: Hook useEntries - 05:12 - substituir useState por useEntries
    // [entries, setEntries] = useState([]);
    // Aula: Hook useEntries - 05:29 days, category
    const [entries] = useEntries(days, category);

    // Aula: Listando todos os lançamentos - 11:42 - useEffect
    // Aula: Hook useEntries - 05:20 - Remover useEffect
    /*
    useEffect( () => {

        // Aula: Listando todos os lançamentos - 17:00
        // loadEntries => () {
        //     const data = await getEntries();
        //     setEntries(data);
        // };
        // 17:52
        async function loadEntries() {
            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 22:51 - days
            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 26:27 - category
            const data = await getEntries( days, category );
            setEntries(data);
        }

        loadEntries();

        console.log( 'EntryList :: useEffect' );


        // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 25:11 - days    
        // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 26:37 - category
    }, [days, category]);
    */

    return(
        // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 04:00 
        // Substituir a View pelo Container
        // <View>
        <Container
            title= 'Últimos lançamentos'
            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 08:30 - days
            actionLabelText= {`Últimos ${days} dias`}
            actionButtonText='Ver mais'
            onPressActionButton={onPressActionButton}
        >
            
            {/* <EntryListItem /> */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 03:00 */}
            {/* <Text style={styles.title}>Últimos Lançamentos</Text> */}

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
                // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 09:40 - keyExtrator
                keyExtractor={ item => item.id}

                // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 26:36 - index
                renderItem={({item, index}) => (

                    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 07:05
                    // copiado para EntryListItem
                    // Aula: Editando dados de um lançamento - 02:54 - View e button

                    // <View>

                    //     <Text style={styles.entry}>
                    //         {item.description} - {item.amount}
                    //     </Text> 

                    //     {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 03:00 - Retirar o button */}
                    //     {/* 
                    //     <Button 
                    //         title={item.id}
                    //         onPress={() => {
                    //             navigation.navigate('NewEntry', {entry: item});
                    //         }}
                    //     />
                    //     */}

                    // </View>

                    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 27:25
                    // isFirstItem, isLastItem
                    <EntryListItem 
                        entry={item}
                        isFirstItem={ index === 0}
                        isLastItem={ index === entries.length - 1 } 
                        // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 26:40 - onEntryPress
                        onEntryPress={onEntryPress}
                    /> 
                )}
            /> 


        </Container>
    );
};


export default EntryList;
