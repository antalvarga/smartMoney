// Aula: Gráfico de evolução do saldo - Parte 2 - 15:14
import {useEffect, useState} from 'react';

import {getBalanceSumByDate} from '../services/Balance';



const useBalanceSumByDate = (days = 7) => {

    const [balanceSum, setBalanceSum] = useState([]);

    // Aula: Gráfico de evolução do saldo - Parte 2 - 16:28
    useEffect(() => {
        async function loadBalanceSumByDate() {
            const data = await getBalanceSumByDate(days);

            setBalanceSum([...data]);
        }

        // Aula: Gráfico de evolução do saldo - Parte 2 - 17:30
        loadBalanceSumByDate();

    }, [days]);

    // Aula: Gráfico de evolução do saldo - Parte 2 - 17:40
    return [balanceSum];
};



export default useBalanceSumByDate;