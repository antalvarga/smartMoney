import React from 'react';
import {StyleSheet} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Saldo - 
import Colors from '../../styles/Colors';


styles = StyleSheet.create({
    container: {
        flex: 1
        , backgroundColor: Colors.background
        , padding: 80
        ,
    }
    , input: {
        borderColor: '#000'
        , borderWidth: 1
        , 
    }
});

export default styles;