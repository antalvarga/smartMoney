import React from 'react';

// EM 20201203 - Ocorreu um warning sobre o picker sugerindo que fosse utilizado
// o @react-native-community/picker
// import {View, Text, Picker, Button} from 'react-native';
//import {Picker} from '@react-native-community/picker';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';


// Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 04:59
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter';


// Adicionando as Props em Todos os Componentes - 01:57
// import EntryLabel from '../../components/BalanceLabel';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';
import { ScrollView } from 'react-native-gesture-handler';



const Report = ({navigation}) => {

    const currentBalance = 2065.35;
   
    // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:04 - Retirar
    // Adicionando as Props em Todos os Componentes - 11:22
    /*
    const entries = [
                        {key: '1', description: 'Padaria Asa Branca', amount: 10}
                        , {key: '2', description: 'SumerMercado CrisTal', amount: 190}
                        , {key: '3', description: 'Posto Ipiranga', amount: 291.66}
                        , {key: '4', description: 'Ponto Cristal', amount: 3000.11}
                    ];
    */                
    // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:04 - Retirar
    // Adicionando as Props em Todos os Componentes - 11:22
    /* 
    const entriesGrouped = [
                                {key: '1', description:  'Alimentação', amount: 201}
                                , {key: '2', description:  'Combustível', amount: 11}
                                , {key: '3', description:  'Aluguel', amount: 120}
                                , {key: '4', description:  'Lazer', amount: 250}
                                , {key: '5', description:  'Outros', amount: 1200}
                            ];
    */                        
    return(
        <View style={styles.container}>
            <Text>Report</Text>

            {/* // Adicionando as Props em Todos os Componentes - 01:57 */}
            {/* <EntryLabel /> */}
            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:16 */}
            {/* <BalanceLabel currentBalance={currentBalance} /> */}
            <BalanceLabel />

            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:20 - */}
            {/* 
            <View>
                <Button title='Salvar' />
                <Button title='Fechar' />
            </View> 
            */}
            <ActionFooter>
                <ActionPrimaryButton 
                    title='Fechar'
                    // onPress={() => {navigation.goBack(); }}
                    onPress={() => {navigation.navigate('Main'); }}
                />
            </ActionFooter>

            <View>
                <Picker>
                    {/* 
                    <Picker.Item label='Categoria 1' />
                    <Picker.Item label='Categoria 2' />
                    <Picker.Item label='Categoria 3' />
                    <Picker.Item label='Categoria 4' />
                     */}
                    <Picker.Item label='Todas as categorias' />
                </Picker>

                <Picker>
                    <Picker.Item label='Últimos 7 dias' />                    
                </Picker>

            </View>



            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 08:04 - ScrollView  */}
            {/* Foi obrigatorio usar uma orientacao  */}
            <ScrollView horizontal = {true} >

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:20 - */}
                {/* <EntrySummary entriesGrouped={entriesGrouped}/> */}
                <EntrySummary />

                <EntryList />

            </ScrollView>

        </View>
    );
};


export default Report;

