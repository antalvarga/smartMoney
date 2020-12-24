import React from 'react';
import {StyleSheet} from 'react-native';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 17:21 - Colors
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    modal: {
        flex: 1
        , backgroundColor: Colors.background
        , 
    }
    , modalItem: {
        backgroundColor: Colors.asphalt
        , borderRadius: 15
        , marginVertical: 10
        , marginHorizontal: 20
        , paddingVertical: 20
        , paddingHorizontal: 20
        , 
    }
    , modalItemText: {
        fontSize: 22
        , color: Colors.white
        , textAlign: 'center'
        , 
    }

});


export default styles;