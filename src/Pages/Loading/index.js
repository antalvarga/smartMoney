// Aula: Integrando com o sistemas de rota dinâmica - 06:25 - useEffect
import React, {useEffect} from 'react';
// Aula: Integrando com o sistemas de rota dinâmica - 02:37
// Aula: Integrando com o sistemas de rota dinâmica - 05:46 - statusBar
import {StatusBar, View, ActivityIndicator, Text} from 'react-native';

// Aula: Integrando com o sistemas de rota dinâmica - 15:24
import {isInitialized} from '../../services/Welcome';

// Aula: Integrando com o sistemas de rota dinâmica - 03:17
import styles from './styles';

import Colors from '../../styles/Colors';





// Aula: Integrando com o sistemas de rota dinâmica - 16:34 - navigation
const Loadging = ({navigation}) => {

    // Aula: Integrando com o sistemas de rota dinâmica - 06:32 - useEffect
    useEffect( () => {
        // Aula: Integrando com o sistemas de rota dinâmica - 15:48 
        async function makeRedirect() {
            
            //const isInitialized = await isInitialized();
            
            
            // Aula: Integrando com o sistemas de rota dinâmica - 15:48 
            // Simplificando
            /*
            if (isInitialized ) {

                navigation.navigate('Main');

            } else {

                navigation.navigate('Welcome');

            }
            */
            (await isInitialized() ) 
                ? navigation.navigate('Main') 
                : navigation.navigate('Welcome');
        }

        makeRedirect();
 
    }, []);
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.background}/>

            <Text style={styles.text}>Loading...</Text>

            <ActivityIndicator color={Colors.blue} size={60}/> 
        </View>
    );
};



export default Loadging;