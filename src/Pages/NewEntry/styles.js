import React from 'react';
import {StyleSheet} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 
import Colors from '../../styles/Colors';


styles = StyleSheet.create({
    container: {
        flex: 1
        //, marginTop: 40
        , marginVertical: 0
        , backgroundColor: Colors.background
        , padding: 5
        // , alignItems: 'center'
        , justifyContent: 'center'
        , 
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 22:18 - Retirou o input
    , input: {
        borderColor: '#000'
        , borderWidth: 1
        , 
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 23:22 - formContainer
    , formContainer: {
        flex: 1 
        , paddingVertical: 20
        ,
    }
    , formActionContainer: {
        flexDirection: 'row'
        , justifyContent: 'center'
        , marginVertical: 10
        , 
    }
});

export default styles;