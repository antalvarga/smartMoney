
// Criando o formulário de entrada de lançamentos - 03:57
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './styles';

import BalanceLabel from '../../components/BalanceLabel';

// Criando o formulário de entrada de lançamentos  - 08:01 
import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
    
    const currentBalance = 2065.35;
    
    // Aula: Editando dados de um lançamento - 05:58
    const entry = navigation.getParam('entry', {
        id: null
        , amount: '0.00'
        , entryAt: new Date()
        , 
    });
    
    // Aula: Editando dados de um lançamento - 07:57
    // const [amount, setAmount] = useState( '0.00' );
    // const [amount, setAmount] = useState( entry.amount.toString() );
    const [amount, setAmount] = useState( `${entry.amount}` );
    
    const save = () => {

        // Criando o formulário de entrada de lançamentos - 13:41
        const data = {
            amount: parseFloat(amount)
            ,
        }

        console.log('NewEntry :: save ', data);

        saveEntry(data, entry);

        // Aula: Excluindo os lançamentos - 03:15
        goBack();
    }

    // Aula: Excluindo os lançamentos - 01:48
    const remove = () => {
        

        goBack();
    }
    
    // Aula: Excluindo os lançamentos - 02:48
    const goBack = () => {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            
            <BalanceLabel currentBalance={currentBalance}/>
            
            <View>
                <TextInput 
                    style={styles.input} placeholder='1'
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                />

                <TextInput style={styles.input} placeholder='2'/>


                <Button title='GPS' />

                <Button title='Câmera' />
            </View>

            <View>
                <Button title='Adicionar' onPress={save} />
                <Button title='Excluir'onPress={remove} />
                {/* // Aula: Excluindo os lançamentos - 03:25
                goBack()
                
            <Button title='Cancelar' onPress={() => navigation.goBack()} />                
            */}
            <Button title='Cancelar' onPress={goBack} />                
            </View>
        </View>
    );
};


export default NewEntry;

