// *** Verificando a documentaCao oficial a escrita mudou 
// vide em https://www.npmjs.com/package/uuid
/*
import {v1 as uuidv1} from 'uuid';

// Aula: Editando dados de um lançamento - 19:50
// export const getUUID = () => {
//     const uuidv1 = require( 'uuid/v1' ) ;
//     return uuidv1();
// }

const getUUID = () => {

    const retorno = uuidv1();

    console.log( ` getUUID :: ${retorno} ` );

    return uuidv1();
};

export default getUUID;
*/

// import { v1 as uuidv1 } from 'uuid';
// import { v4 as uuidv4 } from 'uuid';

// export const getUUID = () => {
//     // const retorno = uuidv1();
//     const retorno = uuidv4();

//     //console.log( ` getUUID :: ${retorno} ` );
//     alert( retorno );

//     //return uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
//     return retorno;

// };


// Dica da rocketSeat
// https://www.facebook.com/rocketseat/videos/3527967290556161/
//import uuid from 'uuidv4';
// import uuid from 'uuid';
// import * as uuid from 'uuid';


// // RocketSeat
// export const getUUID = () => {

//     console.log( ' getUUID :: vai chamar uuid'  );
//     const myId = uuid.v4();

//     console.log( `getUUID :: chamou uuid ${myId}` );


//     return uuid();
// }

 

// Versao do prof devSamurai
// import {v1 as uuidv1} from 'uuid';

// export const getUUID = () => {

//     console.log( ' getUUID :: vai chamar uuid'  );
//     const myId = uuidv1();
//     console.log( `getUUID :: chamou uuid ${myId}` );

//     return myId;
//   };


// Versao stackoverflow
//https://stackoverflow.com/questions/42831397/how-to-create-uuid-for-reactnative

// import uuid from 'react-native-uuid';

// //usage 
// export const getUUID = () => {

//      console.log( ' getUUID :: vai chamar uuid'  );
//      let myId = uuid.v1();
//      console.log( `getUUID :: chamou uuid ${myId}` );

//      return myId;
//    };



/*
    bugou

// https://www.npmjs.com/package/react-native-create-guid

import createGuid from 'react-native-create-guid';

// export const getUUID = async () => {
const getUUID = () => {

    // const guid = await createGuid();
    const guid = createGuid();
    
    createGuid().then((guid) => console.log(guid));
    
    return guid;
}

export default getUUID;
*/


/*

    F U N F O U 
    https://stackoverflow.com/questions/42831397/how-to-create-uuid-for-reactnative/51077143


*/
import uuid from 'react-native-uuid';

const getUUID = () => {
    return uuid.v4();
}

export default getUUID;


