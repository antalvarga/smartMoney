
// Aula: Gráfico de evolução do saldo - Parte 2 - 10:34 - import lodash
import _ from 'lodash';

// Aula: Gráfico de evolução do saldo - Parte 2 - 05:43 - moment
import moment from '../vendors/moment';

// Aula: Hook useBalance - 
import {getRealm} from './Realm';

// Aula: Gráfico de lançamentos por categoria - Parte 3 - 17:34
//import {getUUID} from './UUID';
//import getUUID from '../services/UUID';
import getUUID from '../services/UUID';

import Colors from '../styles/Colors';




// Aula: Gráfico de evolução do saldo - Parte 2 - 05:17 - untilDays
// export const getBalance = async () => {
export const getBalance = async (untilDays = 0) => {

    const realm = await getRealm();

    let entries = realm.objects('Entry');

    //console.log( `getBalance :: untilDays ${untilDays}`);
    
    // Aula: Gráfico de evolução do saldo - Parte 2 - 05:36 
    if(untilDays > 0) {
        
        // Aula: Gráfico de evolução do saldo - Parte 2 - 06:03 - date
        const date = moment().subtract( untilDays, 'days').toDate();
        
        // Aula: Gráfico de evolução do saldo - Parte 2 - 06:40 - entries
        entries = entries.filtered('entryAt < $0', date);
        
        //console.log( `getBalance :: untilDays > 0 :: entries -> ${ JSON.stringify(entries) }`);
    }

    return entries.sum('amount');
};

// Aula: Gráfico de evolução do saldo - Parte 2 - 01:44 - transpor saldo
// D -8 = Saldo do dia 8
// D -7 = Saldo do dia -7 + D -8
// D -6 = Saldo do dia -6 + D -7
// D -5 = Saldo do dia -5 + D -6
// D -4 = Saldo do dia -4 + D -5
// D -3 = Saldo do dia -3 + D -4
// D -2 = Saldo do dia -2 + D -3
// D -1 = Saldo do dia -1 + D -2
// Aula: Gráfico de evolução do saldo - Parte 2 - 04:35
export const getBalanceSumByDate = async days => {

    const realm = await getRealm();

    // Aula: Gráfico de evolução do saldo - Parte 2 - 04:59 - days
    const startBalance = await getBalance(days) || 0;
    //console.log( `getBalanceSumByDate :: startBalance :: funfou ->  ${JSON.stringify(startBalance)}` );


    // Aula: Gráfico de evolução do saldo - Parte 2 - 07:40
    let entries = realm.objects('Entry');

    // Aula: Gráfico de evolução do saldo - Parte 2 - 08:20
    if (days > 0 ) {
        const date = moment().subtract(days, 'days').toDate();

        entries = entries.filtered('entryAt >= $0', date);
    }

    // Aula: Gráfico de evolução do saldo - Parte 2 - 08:58
    entries = entries.sorted('entryAt');

    // Agrupar por dia. Exemplo:
    // Salario  1000 - 19/11
    // Aluguel  -900 - 19/11
    // ----------------------
    // Saldo     100 - 19/11
    // para isso usaremos a lib lodash
    // Aula: Gráfico de evolução do saldo - Parte 2 - 10:55 - transformar entries em um array lodash
    // entries = _(entries);
    
    // Aula: Gráfico de evolução do saldo - Parte 2 - 11:16 - agrupar por dia, Categoria, amount...
    // usar o moment para agrupar por entryAt desprezando a hora. Exemplo 20191119
    // Sera criado um outro array contendo 2 objetos por exemplo dia 19/11
    // [
    //      {Salario, 1000 }   
    //      {Aluguel, -900 }   
    // ]
    entries = _(entries)
        .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
        // Aula: Gráfico de evolução do saldo - Parte 2 - 21:45 map
        .map(entry => _.sumBy(entry, 'amount'))
        // Aula: Gráfico de evolução do saldo - Parte 2 - 25:40 map
        .map((amount, index, collection) => {
            return(
                (index === 0 ? startBalance : 0 ) +
                    // Aula: Gráfico de evolução do saldo - Parte 2 - 27:40 - soma o dia anterior
                    _.sum(_.slice(collection, 0, index)) +
                    amount
            );
        });


    // Aula: Gráfico de evolução do saldo - Parte 2 - 14:35 - console.log
    //console.log(` getBalanceSumByDate :: entries => ${JSON.stringify(entries)} `);
    //console.log(JSON.stringify(entries));

    return entries;
};


// Aula: Gráfico de lançamentos por categoria - Parte 2 - 0:24 - 
export const getBalanceSumByCategory = async (days, showOthers = true) => {
    
    const realm = await getRealm();
    
    let entries = realm.objects('Entry');
    
    if (days > 0 ) {
        const date = moment().subtract(days, 'days').toDate();

        entries = entries.filtered('entryAt >= $0', date);
    }
    
    // Aula: Gráfico de lançamentos por categoria - Parte 2 - 03:52 - 
    entries = _(entries)
                .groupBy(({category: {id}}) => id)
                // Aula: Gráfico de lançamentos por categoria - Parte 2 - 12:47 - map
                .map(entry => ({
                    category: _.omit(entry[0].category, 'entries')                    
                    // Aula: Gráfico de lançamentos por categoria - Parte 2 - 17:00
                    // Ele diz pra usar valor absoluto e que não se deve usar valor negativo no grafico rs
                    , amount: Math.abs(_.sumBy(entry, 'amount'))
                    ,
                }))
                // Aula: Gráfico de lançamentos por categoria - Parte 2 - 17:23 - filter
                .filter(({amount}) => amount > 0)
                .orderBy('amount', 'desc');
    
    // Aula: Gráfico de lançamentos por categoria - Parte 3 - 15:45
    const otherLimit = 4;

    if( showOthers && _.size(entries) >= otherLimit) {

        

        console.log( 'vai chamar getUUID ');
        const getId = getUUID();
        console.log( `ChamOU getUUID :: teste -> ${getId}` );
    
        const data1 = _(entries).slice(0, otherLimit);
        const data2 = [
            {
                // Aula: Gráfico de lançamentos por categoria - Parte 3 - 17:51
                category: {id: getId, name: 'Outros', color: Colors.metal}
                , amount: _(entries).slice(otherLimit).map(({amount}) => amount ).sum()
                , 
            },
        ];

        // Aula: Gráfico de lançamentos por categoria - Parte 3 - 20:38
        entries = [ ...data1, ...data2];
    }
    
    // Aula: Gráfico de lançamentos por categoria - Parte 2 - 01:52 - 
    console.log(` getBalanceSumByCategory :: entries => ${JSON.stringify(entries)} `);

    return entries;

};

