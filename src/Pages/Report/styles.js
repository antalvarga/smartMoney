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
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 04:13
    , filtersContainer: {
        flexDirection: 'row'
        , justifyContent: 'center'
        , marginVertical: 5
        , 
    }
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 05:47 - 
    , filterButton: {
        flexDirection: 'row'
        // Preferencia pessoal
        //, borderColor: Colors.champagneDark
        // , borderColor: Colors.green
        , borderColor: Colors.blue
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