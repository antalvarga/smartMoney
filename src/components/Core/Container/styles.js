import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const styles = StyleSheet.create({

    // // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 04:37
    // Estilos copiado de EntrySummary> styles.js
    container: {
        // flex: 1
        // ,
        backgroundColor: Colors.asphalt
        , margin: 5
        , padding: 10
        , marginTop: -18
        , marginBottom: 25
        , borderRadius: 5
        , borderStyle: 'solid'
        , borderWidth: 1
        , borderColor: 'rgba(255, 255, 255, 0.2)'   // Colors.white
        ,
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 08:52
    , title: {
        fontSize: 12
        //, fontWeight: 'bold'
        , color: Colors.white
        , marginTop: 10
        , marginBottom: 5
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 14:01
    , actionContainer: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'center'
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 15:26
    , actionLabel: {
        fontSize: 12
        , color: Colors.white
        //, padding: 10
        , marginRight: 20
        , flex: 1
        , 
    }
    , actionLabelDays: {
        fontSize: 12
        , color: Colors.blue
        , padding: 0
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 16:53
    , actionButton: {
        flexDirection: 'row'
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 19:37
    , actionButtonIcon: {
        //fontSize: 12
        color: Colors.white
        , marginTop: 0
        , marginRight: 2
        , 

    }
    , actionButtonText: {
        fontSize: 12
        , color: Colors.white

    }

});

export default styles;
