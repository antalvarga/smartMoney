// Aula: Formatacação de moedas e data - 02:49
import React from 'react';
import {View, Text} from 'react-native';

// Aula: Formatacação de moedas e data - 03:06 - 
import NumberFormat from 'react-number-format';




const Currency = ({value}) => {
    return(
        <NumberFormat 
            value={ parseFloat(value)}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            fixedDecimalScale={true}
            decimalScale={2}
            prefix={'R$ '}
            renderText={item => <Text>{item}</Text>}
        />
    );
};




export default Currency;