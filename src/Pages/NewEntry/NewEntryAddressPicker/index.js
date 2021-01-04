// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 04:46
import React from 'react';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 11:28 - Alert
import {Alert, View, Text, TouchableOpacity} from 'react-native';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 05:38
import Geolocation from '@react-native-community/geolocation';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 05:49
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import styles from './styles';



const NewEntryAddressPicker = () => {

    // Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 
    const onButtonPress = () => {
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 10:20
        // Geolocation.getCurrentPosition( pos , error);
        Geolocation.getCurrentPosition
        ( pos => {

            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;

            const position = ` Latitude: ${latitude} Logitude: ${longitude}`;

            Alert.alert('Localização: ', position);
        } 
        , error => {

            console.error('NewEntryAddressPicker :: erro ao recuperar posicionamento', error);


        });

    };

    return(
        <View>
            
            <TouchableOpacity 
                style={styles.button}
                onPress={onButtonPress}
            >
                <Icon name='person-pin' size={30} color={Colors.white} />
            </TouchableOpacity>

        </View>
    );
};




export default NewEntryAddressPicker;