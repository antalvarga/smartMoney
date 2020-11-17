import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './styles';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
    return (
        <View style={styles.container}>
            
            <BalanceLabel />
            
            <View>
                <TextInput style={styles.input} placeholder='1'/>
                <TextInput style={styles.input} placeholder='2'/>

                <Button title='GPS' />
                <Button title='Câmera' />
            </View>

            <View>
                <Button title='Adicionar' />
                <Button title='Cancelar' />                
            </View>
        </View>
    );
};


export default NewEntry;

