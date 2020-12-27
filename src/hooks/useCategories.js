// Aula: Hook useCategories - 00:50
import {useEffect, useState} from 'react';

import { getDebitCategories
            , getCreditCategories
            , getAllCategories
            , getInitCategories     
        } from '../services/Categories';



const useCategories = () => {

    // Aula: Hook useCategories - 07:09     
    const [debitCategories, setDebitCategories] = useState()
    const [creditCategories, setCreditCategories] = useState()
    const [allCategories, setAllCategories] = useState()
    const [initCategory, setInitCategory] = useState()
    

    // Aula: Hook useCategories - 03:35 - 
    useEffect( () => {

        const loadDebitCategories = async () => {

            const data = await getDebitCategories();

            setDebitCategories(data);
        };


        const loadCreditCategories = async () => {

            const data = await getCreditCategories();

            setCreditCategories(data);
        };


        // Aula: Hook useCategories - 04:51
        const loadAllCategories = async () => {

            const data = await getAllCategories();

            setAllCategories(data);
        };


        // Aula: Hook useCategories - 05:11       
        const loadInitCategory = async () => {

            const data = await getInitCategories();

            setInitCategory(data);
        };




        loadDebitCategories();

        loadCreditCategories();

        loadAllCategories();

        loadInitCategory();

    }, []);

    return [debitCategories, creditCategories, allCategories, initCategory];
};



export default useCategories;