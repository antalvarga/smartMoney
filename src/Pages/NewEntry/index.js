
// Criando o formulário de entrada de lançamentos - 03:57
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';


import BalanceLabel from '../../components/BalanceLabel';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 06:46
import NewEntryInput from './NewEntryInput';

// Criando o formulário de entrada de lançamentos  - 08:01 
import {saveEntry} from '../../services/Entries';

// Aula: Excluindo os lançamentos - 07:36
import {deleteEntry} from '../../services/Entries';


import styles from './styles';


const NewEntry = ({navigation}) => {
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
    // const currentBalance = 2065.35;
    
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
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 15:07
    // const [amount, setAmount] = useState( `${entry.amount}` );
    const [amount, setAmount] = useState( entry.amount);
    
    const isValid = () => {

        if( parseFloat(amount) != 0 ){
            return true;
        }
        return false;
    }

    const onSave = () => {

        // Criando o formulário de entrada de lançamentos - 13:41
        const data = {
            amount: parseFloat(amount)
            ,
        }

        console.log('NewEntry :: save ', data);

        saveEntry(data, entry);

        // Aula: Excluindo os lançamentos - 03:15
        onClose();
    }

    // Aula: Excluindo os lançamentos - 01:48
    const onDelete = () => {

        deleteEntry(entry);

        onClose();
    }
    
    // Aula: Excluindo os lançamentos - 02:48
    const onClose = () => {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41 */}
            {/* <BalanceLabel currentBalance={currentBalance}/> */}
            <BalanceLabel />
            

            <View>

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 07:03 - Substituir o TextInput por NewEntruInput*/}
                {/* 
                <TextInput 
                    style={styles.input} placeholder='1'
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                />
                */}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 15:04 */}
                <NewEntryInput 
                    value={amount}
                    onChangeValue={setAmount}
                />

                <TextInput style={styles.input} placeholder='2'/>


                <Button title='GPS' />

                <Button title='Câmera' />
            </View>

            <View>
                {/* <Button title='Adicionar' onPress={onSave} /> */}
                <Button 
                    title='Adicionar' 
                    onPress={() => {
                        isValid() && onSave()
                    }} 
                />

                <Button title='Excluir'onPress={onDelete} />
                {/* // Aula: Excluindo os lançamentos - 03:25
                goBack()
                
            <Button title='Cancelar' onPress={() => navigation.goBack()} />                
            */}
            <Button title='Cancelar' onPress={onClose} />                
            </View>
        </View>
    );
};


export default NewEntry;

