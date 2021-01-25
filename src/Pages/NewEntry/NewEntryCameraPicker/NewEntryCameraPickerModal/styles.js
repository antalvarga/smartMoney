// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 04:45
// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:25 - Transferido de NewEntryCameraPicker/styles.js
import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';



const styles = StyleSheet.create({

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 07:13
    button: { 
        justifyContent: 'center'
        , alignItems: 'center'
        , borderRadius: 30
        , backgroundColor: Colors.asphalt
        , width: 59
        , height: 59
        , marginHorizontal: 5
        , marginVertical: 5
    }
    , camera: {
        flex: 1
        ,
    }
    , buttonTakePicture: {
        flex: 0
        , alignSelf: 'center'
        , position: 'absolute'
        , bottom: 20
        ,
    }
    , buttonDeletePicture: {
        flex: 0
        , position: 'absolute'
        , top: 20
        , right: 20
        ,
    }
});



export default styles;