
// Aula: Listando todos os lançamentos - 11:42 - useEffect
// Aula: Listando todos os lançamentos - 15:14 - useState
import React, {useEffect, useState} from 'react';

// Aula: Editando dados de um lançamento - 03:39 - Button
import {View, Text, Button, FlatList} from 'react-native';

import EntryListItem from './EntryListIem';

// Aula: Listando todos os lançamentos - 16:03
import {getEntries} from '../../services/Entries';

import styles from './styles';




// Adicionando as Props em Todos os Componentes - 04:00
// const EntryList = () => {
// Aula: Listando todos os lançamentos - 15:14 - retirar entries    
// const EntryList = ({entries}) => {
// Aula: Editando dados de um lançamento - 02:22 - navigation
const EntryList = ({navigation}) => {

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
                renderItem={({item}) => (
                    // Aula: Editando dados de um lançamento - 02:54 - View e button
                    <View>

                        <Text style={styles.entry}>
                            {item.description} - {item.amount}
                        </Text> 

                        <Button 
                            title={item.id}
                            onPress={() => {
                                navigation.navigate('NewEntry', {entry: item});
                            }}
                        />
                    </View>

                )}
            /> 


        </View>
    );
};


export default EntryList;
