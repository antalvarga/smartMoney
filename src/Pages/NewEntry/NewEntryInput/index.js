// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 03:51
import React, { useState } from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 00:31 - TouchableOpacity
import {View, TouchableOpacity , Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 04:15
import {TextInputMask} from 'react-native-masked-text';


import styles from './styles';


// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 09:26
const NewEntryInput = ({value, onChangeValue}) => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 12:10
    // const [ debit, setDebit] = useState(-1); condicao ternaria
    const [ debit, setDebit] = useState( (value < 0) ? -1: 1 );
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 12:10
    const [ debitPrefix, setDebitPrefix] = useState( (value < 0) ? '-' : '+');
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    const onChangeDebitCredit = () => {
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 17:00
        // Como o useState é uma funcao assincorna usamos um if mais didatico
        if(debit < 0) {
            setDebit(1);
            setDebitPrefix('+');
        } else {
            setDebit(-1);
            setDebitPrefix('-');
        }    

        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 13:36
        onChangeValue(value * -1);

    }    
    
    return(
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 02:00 - Estilizando a view
        <View style={styles.container}>
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 2 - 00:41 - TouchableOpacity*/}
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 03:19 - onChangeDebit */}
            <TouchableOpacity 
                style={styles.debitButton} 
                onPress={onChangeDebitCredit}        
            >
                <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
                <Text style={styles.debitButtonText}>R$</Text>
            </TouchableOpacity>

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
                    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 05:34 rawValue * debit)
                    onChangeValue && onChangeValue(rawValue * debit);
                }}
            />

        </View>
    );
};


export default NewEntryInput;