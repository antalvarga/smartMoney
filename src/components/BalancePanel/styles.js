import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container: {
        // Aula: Gráfico de evolução do saldo - Parte 2 - 00:25
        // marginBottom: -23
        // marginBottom: 3
        // , 
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
        // Aula: Gráfico de evolução do saldo - Parte 2 - 00:25
        , marginTop: -25
        , marginRight: 10
        , shadowColor: Colors.black
        ,
    }
});

export default styles;