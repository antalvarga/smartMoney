
import {Alert} from 'react-native';
import {getRealm} from './Realm';

// Aula: Editando dados de um lançamento - 19:59
//import {getUUID} from '../services/UUID';
import getUUID from '../services/UUID';


// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 11:06 - inclusao das linhas abaixo
// import moment from 'moment';
// import 'moment/locale/pt-br';
// moment.locale('pt-br');
// transferido para a pasta vendors/moment.js
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 15:10 - moment
import moment from '../vendors/moment';




// Aula: Listando todos os lançamentos - 07:15
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 00:58 - category
export const getEntries = async (days, category) => {
    
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 20:36 - let
    // será necessario pq iremos alterando os parâmetros
    // const realm = await getRealm();
    let realm = await getRealm();
    
    realm = realm.objects('Entry');
    
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 17:30 - if
    if( days > 0) {
        // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 11:06 - days
        // days  = data relativa ao now
        // Exemplo = agora - 7 dias
        // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 21:35 - transfere para dentro do if
        const date = moment().subtract(days, 'days').toDate();
        
        realm = realm.filtered('entryAt >= $0', date);

    }

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 01:20
    // Se category existe e se category.id existe
    if(category && category.id) {

        console.log( 'getEntries :: category ', JSON.stringify(category));

        realm = realm.filtered('category == $0', category);

    }

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 25:50 - sorted sendo true = desc
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 1 - 22:22 - retirar realm.objects
    // const entries = realm.objects('Entry').sorted('entryAt', true);
    const entries = realm.sorted('entryAt', true);

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

    //console.log( 'vai chamar getUUID ');
    const teste = getUUID();
    //console.log( `ChamOU getUUID :: teste -> ${teste}` );
           
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
            // Aula: Criando a tela de entrada de saldo inicial - Parte 2  > 06:38
            , amount: value.amount || entry.amount || 0

            // Aula: Criando a tela de entrada de saldo inicial - Parte 2  > 02:08
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 24:49
            , entryAt: value.entryAt || entry.entryAt || new Date()
            , description: value.category.name 
            // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 12:33
            , photo: value.photo 

            // Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 02:08
            // , isInit: false
            , isInit: value.isInit || false

            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 14:36
            , category: value.category || entry.category

            // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 10:30 - adrress
            , address: value.address || entry.address
            , latitude: value.latitude || entry.latitude
            , longitude: value.longitude || entry. longitude
            ,
        };
       
            //console.log( ' saveEntry :: ', data );
            
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