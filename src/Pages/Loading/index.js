// Aula: Integrando com o sistemas de rota dinâmica - 06:25 - useEffect
import React, {useEffect} from 'react';
// Aula: Integrando com o sistemas de rota dinâmica - 02:37
// Aula: Integrando com o sistemas de rota dinâmica - 05:46 - statusBar
import {StatusBar, View, ActivityIndicator, Text} from 'react-native';

// Aula: Integrando com o sistemas de rota dinâmica - 03:17
import styles from './styles';

import Colors from '../../styles/Colors';





const Loadging = () => {

    // Aula: Integrando com o sistemas de rota dinâmica - 06:32 - useEffect
    useEffect( () => {

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