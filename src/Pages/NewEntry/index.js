// Criando o formulário de entrada de lançamentos - 03:57
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 04:17 - import 
// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 08:01 - import 
import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 06:46
import NewEntryInput from './NewEntryInput';

// Aula: Hook useEntries - 07:06 - Remover saveEntry, deleteEntry
/*
// Criando o formulário de entrada de lançamentos  - 08:01 
import {saveEntry} from '../../services/Entries';

// Aula: Excluindo os lançamentos - 07:36
import {deleteEntry} from '../../services/Entries';
*/

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 08:18 - importar NewEntryCategoryPicker
import NewEntryCategoryPicker from './NewEntryCategoryPicker';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Data -07:10
import NewEntryDatePicker from './NewEntryDatePicker';


// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 06:34
import NewEntryCameraPicker from './NewEntryCameraPicker';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 07:57
import NewEntryAddressPicker from './NewEntryAddressPicker';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 01:06
import NewEntryDeleteAction from './NewEntryDeleteAction';

// Aula: Hook useEntries - 06:23 
import useEntries from '../../hooks/useEntries';

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
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 07:11 - address
        , address: null
        , latitude: null
        , longitude: null
        , 
    });
    
    // Aula: Hook useEntries - 06:46
    // Aula: Hook useEntries - 07:39 - 
    // const [entries, saveEntry, deleteEntry] = useEntries()
    const [, saveEntry, deleteEntry] = useEntries()

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

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 15:26 - 
    const [entryAt, setEntryAt] = useState(entry.entryAt);

    // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 06:51 - address
    const [address, setAddress] = useState(entry.address);
    
    // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 007:30 - latitude, longitude
    const [latitude, setLatitude] = useState(entry.latitude);
    const [longitude, setLongitude] = useState(entry.longitude);




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
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 20:09 - entryAt
            , entryAt: entryAt
            // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 09:37 - 
            , address: address
            , latitude: latitude
            , longitude: longitude
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
            
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 23:09 - formContainer */}
            <View style={styles.formContainer}>

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

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 21:36 - View */}
                <View style={styles.formActionContainer}>

                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 07:10 */}
                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 16:06 - value */}
                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 18:50 - onChange */}
                    <NewEntryDatePicker value={entryAt} onChange={setEntryAt}/>
                    
                    {/* // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 06:54 */}
                    <NewEntryCameraPicker />


                    {/* // Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 08:24 */}
                    <NewEntryAddressPicker address={address} onChange={({latitude, longitude, address}) => {

                        setLatitude(latitude);
                        setLongitude(longitude);
                        setAddress(address);

                        console.log( 'NewEntry :: linha 190 :: ', latitude, address);

                    }} />

                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 01:29 */}
                    <NewEntryDeleteAction entry={entry} onOkPress={onDelete}/>

                </View>

 
                {/*                     
                // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 07:56 -retirar momentaneamente os botoes abaixo
                <Button title='GPS' />
                <Button title='Câmera' />
                */}


            </View>

           
            <View>
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 04:35 - substituir pelo component ActionFooter     */}
                {/* <Button title='Adicionar' onPress={onSave} /> */}
                {/*                  
                <Button 
                    title='Adicionar' 
                    onPress={() => {
                        isValid() && onSave()
                    }} 
                /> 
                */}

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 00:27     */}
                {/* <Button title='Excluir'onPress={onDelete} /> */}
                {/* // Aula: Excluindo os lançamentos - 03:25
                goBack()
                
                <Button title='Cancelar' onPress={() => navigation.goBack()} />                
                */}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 04:35 - substituir pelo component ActionFooter     */}
                {/* <Button title='Cancelar' onPress={onClose} />                 */}


                <ActionFooter>
                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 08:08 */}
                    {/* <Text>teste</Text> */}
                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 12:31 - condicao ternaria no title */}
                    <ActionPrimaryButton                         
                        // title='Salvar' 
                        title={entry.id ? 'Salvar' : 'Adicionar'}
                        onPress={() => {
                            isValid() && onSave();
                        }}
                    />

                    <ActionSecondaryButton 
                        title='Cancelar' 
                        onPress={onClose}                    
                    />

                </ActionFooter>
            </View> 
            
        </View>
    );
};


export default NewEntry;

