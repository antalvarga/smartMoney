// Aula: Criando a tela de entrada de saldo inicial - Parte 1
// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 14:33 - 
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 1 - 04:15
import {TextInputMask} from 'react-native-masked-text';

import styles from './styles';




// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 14:15 - props
// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 18:46 - startWithDebit
const InputMoney = ({value, startWithDebit, onChangeDebit, onChangeValue}) => {    


    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 19:30
    const setDefaultDebit = () => {

        if ( value == 0 ) {

            return startWithDebit ? -1 : 1;    

        } else {

            return value <= 0 ? -1 : 1;

        }        
    };

    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 20:57
    const setDefatulDebitPrefix = () => {

        if ( value == 0 ) {

            return startWithDebit ? '-' :  '+';    

        } else {

            return value <= 0 ? '-' : '+';

        }
    };
    
    
    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 14:17 - 
    // Abaixo foi copiado do src> pages> NewEntry> NewEntryInput
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 12:10
    // const [ debit, setDebit] = useState(-1); condicao ternaria
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 18:15 - value <= 0
    
    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 19:58 - 
    // const [ debit, setDebit] = useState( (value <= 0) ? -1: 1 );
    const [ debit, setDebit] = useState( setDefaultDebit() );
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 12:10
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 18:15 - value <= 0
    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 21:01
    // const [ debitPrefix, setDebitPrefix] = useState( (value <= 0) ? '-' : '+');
    const [ debitPrefix, setDebitPrefix] = useState( setDefatulDebitPrefix() );

    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 02:25
    const onChangeDebitCredit = () => {
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 17:00
        // Como o useState é uma funcao assincorna usamos um if mais didatico
        if(debit < 0) {

            setDebit(1);
            setDebitPrefix('+');
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 18:34 - substituir 1 por false
            // onChangeDebit(1);

            // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 17:44 - condicao ternaria &&
            onChangeDebit && onChangeDebit(false);
            
        } else {

            setDebit(-1);
            setDebitPrefix('-');
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 18:34 - substituir -1 por true
            // onChangeDebit(-1);

            // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 17:44 - condicao ternaria &&
            onChangeDebit && onChangeDebit(true);
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



export default InputMoney;