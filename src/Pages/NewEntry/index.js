import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import styles from './styles';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
    
    const currentBalance = 2065.35;
        
    return (
        <View style={styles.container}>
            
            <BalanceLabel currentBalance={currentBalance}/>
            
            <View>
                <TextInput style={styles.input} placeholder='1'/>
                <TextInput style={styles.input} placeholder='2'/>

                <Button title='GPS' />
                <Button title='Câmera' />
            </View>

            <View>
                <Button title='Adicionar' />
                <Button title='Cancelar' onPress={() => navigation.goBack()} />                
            </View>
        </View>
    );
};


export default NewEntry;

