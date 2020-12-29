// Aula: Hook useBalance - 
import {getRealm} from './Realm';

// Aula: Gráfico de evolução do saldo - Parte 2 - 05:43 - moment
import moment from '../vendors/moment';




// Aula: Gráfico de evolução do saldo - Parte 2 - 05:17 - untilDays
// export const getBalance = async () => {
export const getBalance = async (untilDays = 0) => {

    const realm = await getRealm();

    let entries = realm.objects('Entry');

    if(untilDays > 0) {

        const date = moment().subtract(untilDays, 'days').toDate();

        entries = entries.filtered('entryAt < $0', date);
    }


    return entries.sum('amount');
};

// Aula: Gráfico de evolução do saldo - Parte 2 - 01:44 - transpor saldo
// D -8 = Saldo do dia
// D -7 = Saldo do dia + D -8
// D -6 = Saldo do dia + D -7
// D -5 = Saldo do dia + D -6
// D -4 = Saldo do dia + D -5
// D -3 = Saldo do dia + D -4
// D -2 = Saldo do dia + D -3
// D -1 = Saldo do dia + D -2
export const getBalanceSumByDate = async days => {

    const realm = await getRealm();

    const startBalance = await getBalance();

    let entries = realm.objects('Entry'); 

    if (days > 0) {

        const date = moment().subtract( days, 'days').toDate();

        entries = entries.filtered('entryAt >= $0', date);
    }
    
};

