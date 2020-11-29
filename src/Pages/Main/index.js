import React from 'react';
import {View, Button, Text } from 'react-native';

import styles from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';


{/* Criando o serviço de inserção de dados - 19:33 */}
// Criando o formulário de entrada de lançamentos  - 08:01 
// funçao save transferida para NewEntry
// import {saveEntry} from '../../services/Entries';
import NewEntry from '../NewEntry';
import EntryListItem from '../../components/EntryList/EntryListIem';



const Main = ({navigation}) => {
    
    // const currentBalance = 2064.35;
    const currentBalance = 9999.99;
    
    // {/* Criando o serviço de inserção de dados - 19:05 */}

    // Criando o formulário de entrada de lançamentos - 08:01 
    // funçao save transferida para NewEntry

    // const save = () => {
    //     saveEntry();
    // }

    //  Adicionando as Props em Todos os Componentes - 04:00 
    /*
    // Aula: Editando dados de um lançamento - 01:35 - limpar os entries
    ***
    const entries = [
                    {key: '1', description: 'Padaria Asa Branca', amount: 10}
                    , {key: '2', description: 'SumerMercado CrisTal', amount: 190}
                    , {key: '3', description: 'Posto Ipiranga', amount: 291.66}
                    , {key: '4', description: 'Ponto Cristal', amount: 3000.11}
                ];
    */
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
            
            {/* Criando o serviço de inserção de dados - 19:05 */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 13:49 
                *** Retirar o botão ***
            */}
            {/* <Button title='Add' onPress={() => navigation.navigate('NewEntry')} />  */}
            {/* <Button title='Add' onPress={save} /> */}

            <EntrySummary entriesGrouped={entriesGrouped} />

            {/* // Adicionando as Props em Todos os Componentes - 05:26 */}

            {/* // Aula: Editando dados de um lançamento - 01:35 - limpar os entries */}
            {/* <EntryList entries={entries} /> */}
            {/* // Aula: Editando dados de um lançamento - 12:17 - navigation */}
            <EntryList navigation={navigation} />
            
        </View>
    );
};

export default Main;