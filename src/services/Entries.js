
import {Alert} from 'react-native';
import {getRealm} from './Realm';


// Aula: Listando todos os lançamentos - 07:15
export const getEntries = async () => {
    const realm = await getRealm();

    const entries = realm.objects('Entry');

    // Aula: Listando todos os lançamentos - 18:38
    // console.log( 'getEntries :: entries',  entries );
    console.log( 'getEntries :: entries', JSON.stringify(entries) );

    return entries;
};

// Aula: Editando dados de um lançamento - 10:06 
// export const saveEntry = async (value) => {
export const saveEntry = async (value, entry = {}) => {

    const realm = await getRealm();

    let data = {};


    // Criando o formulário de entrada de lançamentos - 11:23
    // Aula: Editando dados de um lançamento - 11:02 - Nào usar a linha abaixo
    // const {amount} = value;

    // Criando o serviço de inserção de dados   
    try {

        // (await realm).write( () => {
        realm.write( () => {

            // Aula: Editando dados de um lançamento - 10:19
            /*
            data = {
                id: 'ABC'
                , amount: amount
                , entryAt: new Date()
                , isInit: false
            };
            */
           data = {
            // Se o value.id for nulo pego o entry.id ...   
            id: value.id || entry.id || 'ABC'
            // Aula: Editando dados de um lançamento - 11:08
            // , amount: amount
            , amount: value.amount || entry.amount
            , entryAt: value.entryAt || entry.entryAt
            , isInit: false
        };
       
            
            realm.create('Entry', data, true);
        });
        
        console.log('saveEntry :: on save data ' + JSON.stringify( data));
    
    } catch( error ) {
        // alert( 'babou' );
        console.error('saveEntry :: error on save ' + JSON.stringify( data));
        Alert.alert('Erro');

    }

    // usando o reactroton
    //console.tron.log( data );

    return data;
};
