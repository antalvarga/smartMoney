import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 13:17
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 00:53 
//import {getAllCategories} from './Categories';
import {getDefaultCategories} from './Categories';


 
export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema]
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 24:33
        // Todas as vezes que houver alteração no schema é necessário alterar a versão
        // , schemaVersion: 1
        , schemaVersion: 2
        ,
    });


    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 01:26 - como apagar todo o Bd
    //dropDb(realm);



    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 22:37
    initDb(realm);

    return realm;
}

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 07:57

// consultar a quantidade de categorias no bd
// se = 0 
//  popular as categorias
export const initDb = (realm) => {
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 09:40
    const categoriesLenght = realm.objects('Category').lenght;

    // não funfou - categoriesLenght is undefined
    //alert(`initDb :: ${categoriesLenght} :: categorires lenght `);

    //console.log( `initDb :: categorires lenght :: Quantidade de categorias no bd: ${categoriesLenght}`);

    if( categoriesLenght == 0 || null == categoriesLenght) {
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 13:58
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 00:53 
        // const categories = getAllCategories();
        const categories = getDefaultCategories();

        console.log( `initDb :: initing Db...` ); 

        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 1 - 20:00
        try {
            realm.write( () => {
                categories.forEach(category => {
                    console.log( `initDb :: creating category: ${JSON.stringify(category)} `);

                    realm.create( 'Category', category, true );
                });
            });
            
        } catch (error) {
            
        }
    } else {
        console.log( 'initDb :: categories already existing... ');
    };
};

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 01:08
export const dropDb = realm => {
    console.log( 'dropDb :: droping db...');

    realm.write( () => {
        realm.deleteAll();
    })
}