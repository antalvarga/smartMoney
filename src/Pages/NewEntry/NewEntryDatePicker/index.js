// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 13:16 - useState
import React, {useState} from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 09:00 - TouchableOpacity
import {Text, View, TouchableOpacity} from 'react-native';

import DateTimerPicker from 'react-native-modal-datetime-picker';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 09:35 - Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles.js';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 09:57 - Colors
import Colors from '../../../styles/Colors';


// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 15:06 - recebendo value
// Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 17:13 - onChange
const NewEntryDatePicker = ({value, onChange}) => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 13:33 - modalVisible
    const [modalVisible, setModalVisible] = useState(false);

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 17:00 - onChangeValue
    const onChangeValue = date => {

        onChange(date);

        onCancel();

    }
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 17:37 - onCancel
    const onCancel = () => {

        setModalVisible(false);
    }
    

    return(
        <View>
            {/* <Text>NewEntryDatePicker</Text> */}
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 09:00 - TouchableOpacity */}
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Data - 19:03 - onPress */}
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true) }>
                <Icon name='today' size={30} color={Colors.white} />
            </TouchableOpacity>

            <DateTimerPicker 
                mode='date'
                datePickerModeAndroid='calendar'
                titleIos='Data de Vencimento'
                cancelTextIOS='Cancelar'
                confirmTextIOS='Ok'
                date={value}
                isVisible={modalVisible}
                onConfirm={onChangeValue}
                onCancel={onCancel}
            />
        </View>
    );
};


export default NewEntryDatePicker;

