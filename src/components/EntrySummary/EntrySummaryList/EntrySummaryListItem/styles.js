// Aula: Gráfico de lançamentos por categoria - Parte 3 - 07:10
import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../../styles/Colors';



const styles = StyleSheet.create({
    containerNew: {
        flexDirection: 'row'
        , 
    }
    , nameNew: {
        fontSize: 12
        , color: Colors.white
        , marginTop: 2
        , 
    }
    , valueNew: {
        flex: 1
        , fontSize: 12
        , color: Colors.white
        , textAlign: 'right'
        , marginTop: 2
        ,
    }
    , containerOld: {
        flex: 1
        , marginTop: 30
        , marginLeft: 10
    }
    , title: {
        fontSize: 22
        , fontWeight: 'bold'
        , marginTop: 10
        , marginBottom: 10
        ,
    }
    , entry: {
        color: Colors.champagne
        , fontSize: 12
        , marginTop: 2
        ,
    }
    , entryAmount: {
        color: Colors.metal
        , fontSize: 12
        , marginTop: 2
        , marginLeft: 10
        ,
    }
    ,

})


export default styles;