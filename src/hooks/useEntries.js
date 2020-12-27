
// Aula: Hook useEntries - 00:37
import {useEffect, useState} from 'react';


// Aula: Hook useEntries - 02:12
// Aula: Hook useEntries - 03:00 - saveEntry, deleteEntry
import {getEntries, saveEntry, deleteEntry} from '../services/Entries';



// Aula: Hook useEntries - 03:49 days, category
const useEntries = (days = 7, category) => {

    // Aula: Hook useEntries - 01:12
    // Aula: Hook useEntries - 
    const [ entries, setEntries ] = useState();

    // Aula: Hook useEntries - 01:31
    useEffect( () => {

        // Aula: Hook useEntries - 01:44 //
        async function loadEntries() {
            // Aula: Hook useEntries - 04:03 - days, category
            const data = await getEntries();

            // Aula: Hook useEntries - 02:27
            setEntries(data);            
        }

        // Aula: Hook useEntries - 02:31
        loadEntries();

    }, [days, category] );

    // Aula: Hook useEntries - 02:46
    // Aula: Hook useEntries - 03:15 - saveEntry, deleteEntry
    return [entries, saveEntry, deleteEntry];
};



export default useEntries;