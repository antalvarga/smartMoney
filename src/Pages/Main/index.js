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
    
    // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:05 - 
    // const currentBalance = 2064.35;
    
    
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

    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 00:31
    // transferir essa constante para a EntrySumary
    /*
    const entriesGrouped = [
                                {key: '1', description:  'Alimentação', amount: 201}
                                , {key: '2', description:  'Combustível', amount: 11}
                                , {key: '3', description:  'Aluguel', amount: 120}
                                , {key: '4', description:  'Lazer', amount: 250}
                                , {key: '5', description:  'Outros', amount: 1200}
                            ];
    */            
    return (
        <View style={styles.container}>
            
            {/* // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 28:38 - passando funcao como propriedade */}
            {/* <BalancePanel currentBalance={currentBalance} /> */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 2 - 30:19 */}
            <BalancePanel                 
                onNewEntryPress={() => {navigation.navigate('NewEntry')}}
            />
            
            {/* Criando o serviço de inserção de dados - 19:05 */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 13:49 
                *** Retirar o botão ***
            */}
            {/* <Button title='Add' onPress={() => navigation.navigate('NewEntry')} />  */}
            {/* <Button title='Add' onPress={save} /> */}

            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 00:31 */}
            {/* <EntrySummary entriesGrouped={entriesGrouped} /> */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 30:14 - onPressActionButton */}
            <EntrySummary 
                onPressActionButton={() => navigation.navigate( 'Report' )}
            />

            {/* // Adicionando as Props em Todos os Componentes - 05:26 */}

            {/* // Aula: Editando dados de um lançamento - 01:35 - limpar os entries */}
            {/* <EntryList entries={entries} /> */}
            {/* // Aula: Editando dados de um lançamento - 12:17 - navigation */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 02:24 - retirar o navigation */}
            {/* <EntryList navigation={navigation} /> */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 27:40 - onEntryPress */}
            {/* quem está esperando o parametro entry é a pag NewEntry */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 29:34 - onPressActionButton */}
            <EntryList 
                onEntryPress={(entry) => navigation.navigate('NewEntry', {entry: entry})  }
                onPressActionButton={() => navigation.navigate( 'Report' )}
            />
            
        </View>
    );
};

export default Main;