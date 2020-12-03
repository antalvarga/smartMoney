import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
        , flexDirection: 'row'
        ,
    }
    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 04:00
    , bullet: {
        // backgroundColor: Colors.yellow
        // ,
    }
    , description: {
        // backgroundColor: Colors.blue
        // , 
        flex: 1
        , justifyContent: 'center'
        , 
    }
    , descriptionText: {
        fontSize: 14
        , color: Colors.white
//        , fontWeight: 'bold'
        ,
    }
    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 12:24
    , details: {
        flexDirection: 'row'
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 15:39
    , entryAtIcon: {
        color: Colors.metal
        , marginTop: 0
        , marginRight: 2
        , 
    }
    , entryAtText: {
        color: Colors.metal
        , fontSize: 12
        , marginTop: 4
        , marginRight: 10
        ,
    }
    , addressIcon: {
        color: Colors.metal
        , marginTop: 0
        , marginRight: 2
        , 
    }
    , addressText: {
        color: Colors.metal
        , fontSize: 12
        , marginTop: 4
        , marginRight: 10
        , 
    }
    , amount: {
        //backgroundColor: Colors.green
        //,
        justifyContent: 'center'
        ,
    }
    , amountText: {
        fontSize: 14
        , fontWeight: 'bold'
        , color: Colors.white
        , 
    }
    
});


export default styles;