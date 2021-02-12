import React from 'react';
import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center'
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 13:30
        , padding: 15
        // Aula: Gráfico de evolução do saldo - Parte 1 - 07:33 - zIndex
        , zIndex: 1
        // Preferencia pessoal
        , marginTop: 40
        ,

    }
    , label: {
        fontSize: 14
        , color: Colors.white
        ,
    }
    , panel: {
        borderRadius: 8
        , paddingHorizontal: 30
        , paddingVertical: 10
        , marginVertical: 10
        // Aula: Hook useBalance - 11:31 - Evitar a piscada que 
        // dá no useEffect
        , minWidth: 200
        // Aula: Hook useBalance - 11:51
        , justifyContent: 'center'
        , alignContent: 'center'
        ,
    }
    , value: {
        fontSize: 28
        , color: Colors.white
        // Aula: Hook useBalance - 12:33
        , textAlign: 'center'
        ,
    }
})

export default styles;