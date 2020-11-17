import React from 'react';
import {View, Text, Picker, Button} from 'react-native';
//import {Picker} from 'react-native-picker';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import styles from './styles';
import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';



const Report = () => {
    return(
        <View style={styles.container}>
            <Text>Report</Text>

            <EntryLabel />

            <View>
                <Picker>
                    <Picker.Item label='Categoria 1' />
                    <Picker.Item label='Categoria 2' />
                    <Picker.Item label='Categoria 3' />
                    <Picker.Item label='Categoria 4' />
                    <Picker.Item label='Todas as categorias' />
                </Picker>

                <Picker>
                    <Picker.Item label='Últimos 7 dias' />                    
                </Picker>

            </View>

            <EntrySummary />
            <EntryList />

            <View>
                <Button title='Salvar' />
                <Button title='Fechar' />
            </View>
        </View>
    );
};


export default Report;

