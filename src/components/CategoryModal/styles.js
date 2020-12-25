import React from 'react';
import {StyleSheet} from 'react-native';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 11:06 - Colors
import Colors from '../../styles/Colors';



const styles = StyleSheet.create({
    container: {

    }
    , modal: {
        flex: 1
        , backgroundColor: Colors.background
        ,
    }
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 11:32 - transferido para ../components/CategoryModal */}
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

});


export default styles;