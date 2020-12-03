import React from 'react';
import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        ,
    }
    , value: {
        fontSize: 28
        , color: Colors.white
        ,
    }
})

export default styles;