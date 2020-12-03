
// Aula: Listando todos os lançamentos - 11:42 - useEffect
// Aula: Listando todos os lançamentos - 15:14 - useState
import React, {useEffect, useState} from 'react';

// Aula: Editando dados de um lançamento - 03:39 - Button
import {View, Text, Button, FlatList} from 'react-native';

import EntryListItem from './EntryListIem';

// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 03:38
import Container from '../../components/Core/Container';

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
const EntryList = ({onEntryPress, onPressActionButton}) => {

    // Aula: Listando todos os lançamentos - 15:14 - useState
    [entries, setEntries] = useState([]);

    // Aula: Listando todos os lançamentos - 11:42 - useEffect
    useEffect( () => {

        // Aula: Listando todos os lançamentos - 17:00
        // loadEntries => () {
        //     const data = await getEntries();
        //     setEntries(data);
        // };
        // 17:52
        async function loadEntries() {
            const data = await getEntries();
            setEntries(data);
        }

        loadEntries();

        console.log( 'EntryList :: useEffect' );
    }, []);

    return(
        // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 04:00 
        // Substituir a View pelo Container
        // <View>
        <Container
            title= 'Últimos lançamentos'
            actionLabelText='7 dias'
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
