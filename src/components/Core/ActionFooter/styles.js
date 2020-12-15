import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor
        , paddingVertical: 10
        , 
    }
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 11:41 - inner
    , inner: {
        flexDirection: 'row'
        , justifyContent: 'center'
        ,
    }
    , primaryButton: {
        borderRadius: 50
        , borderWidth: 1
        , borderColor: Colors.green
        , paddingVertical: 10
        , paddingHorizontal: 20
    }
    , primaryButtonText: {
        fontSize: 18
        , textAlign: 'center'
        , color: Colors.green
        ,
    }
    // // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 10:46 
    , secondaryButton: {        
        paddingVertical: 10
        , paddingHorizontal: 20
    }
    , secondaryButtonText: {
        fontSize: 18
        , textAlign: 'center'
        , color: Colors.white
        ,
    }    
});

export default styles;
