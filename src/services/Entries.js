
import {Alert} from 'react-native';
import {getRealm} from './Realm';

// Aula: Editando dados de um lançamento - 19:59
//import {getUUID} from '../services/UUID';
import getUUID from '../services/UUID';


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

    console.log( ' :: saveEntry :: ');
    const realm = await getRealm();

    let data = {};

    console.log( 'vai chamar getUUID ');
    const teste = getUUID();
    console.log( `ChamOU getUUID :: teste -> ${teste}` );
           
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
            // Aula: Editando dados de um lançamento - 20:22 - getUUID
            id: value.id || entry.id || teste
            // Aula: Editando dados de um lançamento - 11:08
            // , amount: amount
            , amount: value.amount || entry.amount
            , entryAt: value.entryAt || entry.entryAt
            , isInit: false
        };
       
            console.log( ' saveEntry :: ', teste );
            
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


// Aula: Editando dados de um lançamento - 
export const deleteEntry = async entry => {
    const realm = await getRealm();

    try {
        realm.write(() => {
            //realm.deleteall(entry);
            realm.delete(entry);
        })
    } catch (error) {
        console.error('deleteEntry :: error on delete ' + JSON.stringify( entry ));
        Alert.alert('Erro ao excluir');
        
    }
}