import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';




const styles = StyleSheet.create({

    // Aula: Gráfico de lançamentos por categoria - Parte 3 - 13:55
    // Passou para src> components> EntrySummary> EntrySummaryList> EntrySummaryListItem> Styles
    container: {
        
        flex: 1
        , marginTop: 10
        , marginLeft: 5
        
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
        , 
    }
    , entryAmount: {
        color: Colors.metal
        , fontSize: 12
        , marginTop: 4
        , marginRight: 10
        ,
    }

});




export default styles;