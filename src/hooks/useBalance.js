// Aula: Hook useBalance - 03:53 - logicHook
import {useEffect, useState} from 'react';

import {getBalance} from '../services/Balance';



const useBalance = () => {

    const [balance, setBalance] = useState();

    useEffect( () => {

        async function loadBalance() {

            const value = await getBalance();

            setBalance( value );
        }

        loadBalance();

    }, []);

    return [balance];
};



export default useBalance;
