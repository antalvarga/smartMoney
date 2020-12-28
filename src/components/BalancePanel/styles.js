import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container: {
        
    }
    , panel: {
        // Aula: Gráfico de evolução do saldo - Parte 1 - 05:36
        paddingVertical: 3        
        ,
        
    }
    , button: {
        backgroundColor: Colors.green
        , alignSelf: 'flex-end'
        , alignItems: 'center'
        , justifyContent: 'center'
        , width: 50
        , height: 50
        , borderRadius: 30
        , marginTop: -25
        , marginRight: 10
        , shadowColor: Colors.black
        ,
    }
});

export default styles;