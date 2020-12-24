import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1
        , backgroundColor: Colors.background
        //, padding: 10
        , 
    }
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 05:47 - 
    , filterButton: {
        flexDirection: 'row'
        //, borderColor: Colors.champagneDark
        , borderColor: Colors.green
        , borderWidth: 1
        , borderRadius: 150
        , paddingVertical: 5
        , paddingHorizontal: 10
        , marginHorizontal: 5
        , 
    }
    , filterButtonText: {
        color: Colors.champagneDark
        , textAlign: 'center'
        , 
    }
});

export default styles;