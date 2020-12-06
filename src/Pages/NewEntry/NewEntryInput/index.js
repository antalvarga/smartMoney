
// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 03:51
import React from 'react';
import {View, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 04:15
import {TextInputMask} from 'react-native-masked-text';


import styles from './styles';


// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 09:26
const NewEntryInput = ({value, onChangeValue}) => {
    return(
        <View>
            {/* <Text>NewEntryInput</Text> */}
            <TextInputMask 
                style={styles.input}
                type={'money'}
                options={{
                    precision: 2
                    , separator: ','
                    , delimiter: '.'
                    , unit: ''
                    , suffixUnit: ''
                    ,
                }}
                value={value}
                includeRawValueInChangeText={true}
                            // 1.000,00     1000  
                onChangeText={(maskedValue, rawValue) => {
                    // IF LOGICO OU CONDICAO TERNARIA
                    onChangeValue && onChangeValue(rawValue);
                }}
            />

        </View>
    );
};


export default NewEntryInput;