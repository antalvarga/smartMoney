import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const styles = StyleSheet.create({

    // // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 04:37
    // Estilos copiado de EntrySummary> styles.js
    container: {
        // flex: 1
        // ,
        // Preferencia pessoal
        // backgroundColor: Colors.asphalt
        backgroundColor: Colors.asphaltDark
        , margin: 5
        , padding: 10
        , marginTop: -18
        , marginBottom: 25
        , borderRadius: 5
        , borderStyle: 'solid'
        , borderWidth: 1
        // , borderColor: 'rgba(255, 255, 255, 0.2)'   // Colors.white
        // Preferencia pessoal
        , borderColor: Colors.blueDark
        ,
    }
    // Preferencia pessoal
    , divider: {
        // borderBottomColor: '#fff'
        borderBottomColor: Colors.blueDark
        , borderBottomWidth: 2
        , width: 170
        , marginTop: 8
        , marginBottom: 25
        , marginRight: 0
      }    
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 08:52
    , title: {
        
        // Preferencia pessoal
        fontSize: 16
        //, fontWeight: 'bold'
        // Preferencia pessoal
        // , color: Colors.white
        , color: Colors.blueDark
        , marginTop: 10
        , marginBottom: 5
        , 
    }
    // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 14:01
    , actionContainer: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'center'
        , marginTop: 20
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
