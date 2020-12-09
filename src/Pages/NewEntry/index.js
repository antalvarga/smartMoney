
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

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 08:18 - importar NewEntryCategoryPicker
import NewEntryCategoryPicker from './NewEntryCategoryPicker';


import styles from './styles';




const NewEntry = ({navigation}) => {
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 00:41
    // const currentBalance = 2065.35;
    
    // Aula: Editando dados de um lançamento - 05:58
    const entry = navigation.getParam('entry', {
        id: null
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 17:31    
        // , amount: '0.00'
        , amount: 0
        , entryAt: new Date()
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 09:11 - category
        , category: {id: null, name: 'Selecione'}
        , 
    });
    

    // Aula: Editando dados de um lançamento - 07:57
    // const [amount, setAmount] = useState( '0.00' );
    // const [amount, setAmount] = useState( entry.amount.toString() );
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 15:07
    // const [amount, setAmount] = useState( `${entry.amount}` );
    const [amount, setAmount] = useState( entry.amount);
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 04:16 - debit
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 17:57 
    // const [debit, setDebit] = useState( entry.amount <= 0 ? -1 : 1);
    const [debit, setDebit] = useState( entry.amount <= 0 );
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 05:36 - debit
    const [category, setCategory] = useState(entry.category);


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
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 14:10
            , category: category
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
                    onChangeDebit={setDebit}
                    onChangeValue={setAmount}
                />

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 08:18 - importar NewEntryCategoryPicker */}
                {/* <TextInput style={styles.input} placeholder='2'/> */}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 05:16 -  */}
                <NewEntryCategoryPicker 
                    debit={debit} 
                    category={category} 
                    onChangeCategory={setCategory}
                /> 

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

