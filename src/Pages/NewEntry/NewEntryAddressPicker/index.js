// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 04:46
import React from 'react';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 11:28 - Alert
import {Alert, View, Text, TouchableOpacity} from 'react-native';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 05:38
import Geolocation from '@react-native-community/geolocation';

// Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:09
import Geocoder from 'react-native-geocoding'; 

// Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 05:49
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import styles from './styles';


// Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 00:46
const NewEntryAddressPicker = ({address, onChange}) => {

    // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:09
    // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 00:43 - trazer os metodos para dentro do component
    const getLocation = (latitude, longitude) => {
        
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 08:46
        // Chave copiada vide url abaixo
        // https://console.cloud.google.com/apis/credentials?project=devsamurai-avop&supportedpurview=project
        Geocoder.init('AIzaSyCxd3HmwKUzW1-eoYVHqmsXCAo05euiDGo');

            
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 10:11
        // Geocoder.from ({latitude, longitude}).then(json => {}).catch(error => {})
        Geocoder.from ({latitude, longitude})
            .then(json => {
                
                const formattedAddress = json.results[0].formatted_address;

                // ***
                Alert.alert('Endereço => ', formattedAddress, [
                    {
                        text: 'Cancelar'
                        , style: 'cancel'
                        , onPress: () => {}
                    }
                    , {
                        text: 'Confirmar'
                        , style: 'cancel'
                        , onPress: () => {
                            onChange({
                                latitude: latitude
                                , longitude: longitude
                                , address: formattedAddress
                            }); 
                        }
                    }
                ] );       

            })
            .catch(error => {

                // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 12:50
                console.error('NewEntryAddressPicker :: getLocation :: erro ao recuperar posicionamento', error);

                // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 11:54
                Alert.alert('Erro ao recuperar sua posição :: ');

            });

    };

    // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:09
    // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 00:43 - trazer os metodos para dentro do component
    const getPosition = () => {

        // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:34 vindo do metodo onButtonPress
        Geolocation.getCurrentPosition
        ( pos => {
            
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            
            // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:52 - remover 
            const position = ` Latitude: ${latitude} Logitude: ${longitude}`;

            //Alert.alert('Localização: ', position);

            // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 11:20 - recuperar o endereco
            getLocation(latitude, longitude);

        } 
        , error => {

            console.error('NewEntryAddressPicker :: getPosition :: erro ao recuperar posicionamento', error);

            // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 11:54
            Alert.alert('Erro ao recuperar posicionamento :: ');

        });

        
    }

    




    // Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 
    const onButtonPress = () => {
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 1 - 10:20
        // Geolocation.getCurrentPosition( pos , error);
        
        // Aula: Adicionando Geolocalização no Aplicativo - Parte 2 - 07:36 - transferir para getPosition
        /*
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

        */

        // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 04:21 - if
        if( address ) {

            // ***
            Alert.alert('Endereço => ', formattedAddress, [
                {
                    text: 'Apagar'
                    , style: 'cancel'
                    , onPress: () => {
                        onChange({latitude: null, longitude: null, address: '' });
                    }
                }
                , {
                    text: 'Ok'
                    , style: 'cancel'
                    , onPress: () => { console.log( 'ok pressed ')}
                }
            ] );       
         
        } else {

            getPosition();

        }


    };

    return(
        <View>
            
            <TouchableOpacity 
                // Aula: Adicionando Geolocalização no Aplicativo - Parte 3 - 05:49 - condicao ternaria
                style={[styles.button, address ? styles.buttonActived : '']}
                onPress={onButtonPress}
            >
                <Icon name='person-pin' size={30} color={Colors.white} />
            </TouchableOpacity>

        </View>
    );
};




export default NewEntryAddressPicker;