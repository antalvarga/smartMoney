// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 01:01
import React from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 05:56 - TouchableOpacity
import {View, TouchableOpacity, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 02:40
import Colors from '../../../styles/Colors';

import styles from './styles';



// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 
export const ActionPrimaryButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 07:26
export const ActionSecondaryButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
            <Text style={styles.secondaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const ActionFooter = ({children}) => {
    return(
        // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 11:30 - inner
        <View style={styles.container}>

            <View style={styles.inner}>

                {children}

            </View>
        </View>

    );
};


export default ActionFooter;