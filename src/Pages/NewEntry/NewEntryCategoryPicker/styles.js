import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignContent: 'center'
        , justifyContent: 'center'
        ,
    }
    , pickerButton: {
        backgroundColor: Colors.asphalt
        , borderRadius: 15
        , marginVertical: 10
        , marginHorizontal: 20
        , padding: 20
        , 
    }
    , pickerButtonText: {
        fontSize: 28
        , color: Colors.white
        , textAlign: 'center'
        , 
    }
    , pickerButtonText2: {
        fontSize: 28
        , color: Colors.white
        , textAlign: 'center'
        , justifyContent: 'center'
        , alignSelf: 'center'
        , marginTop: 100
        ,
    }


});



export default styles;