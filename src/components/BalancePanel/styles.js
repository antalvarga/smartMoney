import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container: {
        //marginTop: 50
        //,
        // Aula: Gráfico de evolução do saldo - Parte 2 - 00:25
        //marginBottom: -23
        // marginBottom: 3
        // , 
        
        marginTop: 30
        //, backgroundColor: Colors.asphaltDark
        , backgroundColor: Colors.blue
        , margin: 5
        , padding: 0
        //, marginTop: -18
        , marginBottom: 25
        , borderRadius: 5
        //, borderStyle: 'solid'
        //, borderWidth: 1
        // , borderColor: 'rgba(255, 255, 255, 0.2)'   // Colors.white
        // Preferencia pessoal
        //, borderColor: Colors.blueDark



    }
    , panel: {
        // Aula: Gráfico de evolução do saldo - Parte 1 - 05:36
        //paddingVertical: 3        
        //,
        
    }
    // Aula: Gráfico de evolução do saldo - Parte 2 - 00:35
    // Configuração do button *** TODO : Não ficou ok 
    , button: {
        // backgroundColor: Colors.green
        //backgroundColor: Colors.blue
        backgroundColor: Colors.blueDark
        , borderRadius: 30
        , alignSelf: 'flex-end'
        , alignItems: 'center'
        , justifyContent: 'center'
        , width: 50
        , height: 50
        // Aula: Gráfico de evolução do saldo - Parte 2 - 00:25
        , shadowColor: Colors.black
        , elevation: 5
        , marginTop: -25
        , marginRight: 10
        ,
    }
});

export default styles;