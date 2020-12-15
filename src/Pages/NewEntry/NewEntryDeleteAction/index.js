// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 00:48
import React from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 02:33 - TouchableOpacity
// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 05:29 - Alert
import {Alert, View, Text, TouchableOpacity} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 02:33 - TouchableOpacity
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import styles from './styles.js'


// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 06:33 - onOkPress
// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 07:22 - desconstrucao do onOkPress
// Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 08:28 - entry
const NewEntryDeleteAction = ({entry, onOkPress}) => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 05:18 - onDelete
    const onDelete = () => {
        Alert.alert(
            'Apagar'
            , 'Deseja realmente apagar?'
            , [
                {text: 'Não', style: 'cancel'}
                , {text: 'Sim', onPress: () => onOkPress() }
            ]
            , {cancelable: false}
            , 
        );
    }
    
    return(

        // Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 08:44 - condicao ternaria
        // Quando for inclusao o id é null então não devo exibir o botao de excluir
        entry.id && (

            <View>
                {/* <Text>NewEntryDeleteAction</Text> */}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Excluir - 07:05 onDelete */}
                <TouchableOpacity style={styles.button} onPress={onDelete}>
                    <Icon name='delete' size={30} color={Colors.white} />
                </TouchableOpacity>
            </View>

        )
        
    );
};

export default NewEntryDeleteAction;