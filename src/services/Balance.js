// Aula: Hook useBalance - 
import {getRealm} from './Realm';

// Aula: Gráfico de evolução do saldo - Parte 2 - 10:34 - import lodash
import _ from 'lodash';

// Aula: Gráfico de evolução do saldo - Parte 2 - 05:43 - moment
import moment from '../vendors/moment';




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
    console.log( `getBalanceSumByDate :: startBalance :: funfou ->  ${JSON.stringify(startBalance)}` );


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
    console.log(JSON.stringify(entries));

    return entries;
};



