// Aula: Gráfico de lançamentos por categoria - Parte 2 - 05:26
import {useEffect, useState} from 'react';

import {getBalanceSumByCategory} from '../services/Balance';



const useBalanceSumByCategory = (days = 7) => {

    const [balanceSum, setBalanceSum] = useState([]);

    useEffect(() => {

        async function loadBalanceSumByCategory() {

            const data = await getBalanceSumByCategory(days);

            setBalanceSum([...data]);

        };

        // Aula: Gráfico de lançamentos por categoria - Parte 2 - 07:11
        loadBalanceSumByCategory();

    }, [days]);

    return [balanceSum];
};



export default useBalanceSumByCategory;