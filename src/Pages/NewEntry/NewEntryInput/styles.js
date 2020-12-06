
import React from 'react';
import {StyleSheet} from 'react-native';


import Colors from '../../../styles/Colors';


const styles = StyleSheet.create({
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 12:08
    input: {
        fontSize: 28
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 02:41
        // , backgroundColor: Colors.asphalt
        // , borderRadius: 15
        // , marginHorizontal: 20
        // , marginVertical: 10
        , color: Colors.white
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 04:13
        // , textAlign: 'center'
        , textAlign: 'right'
        //, backgroundColor: Colors.red
        , flex: 1
        , paddingLeft: 0
        , paddingRight: 20
        ,
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 02:01
    , container: {
        flexDirection: 'row' 
        , backgroundColor: Colors.asphalt
        , borderRadius: 15
        , marginHorizontal: 20
        , marginVertical: 10
        ,
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 03:08
    , debitButton: {
        flexDirection: 'row'
        //, backgroundColor: Colors.green
        , paddingVertical: 20
        , paddingHorizontal: 20
        , 
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 06:02
    , debitButtonPrefix: {
        fontSize: 18
        , color: Colors.white
        , minWidth: 12
        , marginTop: 5   // usei por minha conta
        ,
        
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 06:10
    , debitButtonText: {
        fontSize: 28
        , color: Colors.white
        
    }
});


export default styles;