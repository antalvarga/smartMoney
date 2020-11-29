import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container: {
        // flex: 1
        // , alignItems: 'center'
        // ,
        // paddingVertical: 10
        
    }
    , panel: {
        paddingVertical: 10
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
        , 
    }
});

export default styles;