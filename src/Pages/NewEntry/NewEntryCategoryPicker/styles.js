import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background
        ,

    }
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 10:38 - transferido para ../components/CategoryModal */}
    /*
    , modal: {
        flex: 1
        , backgroundColor: Colors.background
        ,
    }
    */
    , pickerButton: {
        backgroundColor: Colors.asphalt
        , borderRadius: 15
        , marginVertical: 10
        , marginHorizontal: 20
        , padding: 20
        , 
    }
    , pickerButtonText: {
        fontSize: 28
        , color: Colors.white
        , textAlign: 'center'
        , 
    }
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 11:32 - transferido para ../components/CategoryModal */}
    /*
    , modalItem: {
        backgroundColor: Colors.asphalt
        , borderRadius: 15
        , marginVertical: 10
        , marginHorizontal: 20
        , padding: 20
        , 
    }
    , modalItemText: {
        fontSize: 20
        , color: Colors.white
        , textAlign: 'center'
        , 
    }
    */
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 15:43 - pode apagar
    /*
    , closeButton: {
        backgroundColor: Colors.background
        , borderColor: Colors.green
        , borderWidth: 2
        , borderRadius: 15
        , marginVertical: 10
        , marginHorizontal: 20
        , padding: 10
        , alignSelf: 'center'
        , paddingVertical: 8
        , paddingHorizontal: 160
        ,
    }
    */
    , closeButtonText: {
        color: Colors.green
        , textAlign: 'center'
        , fontSize: 14
        ,

    }


});



export default styles;