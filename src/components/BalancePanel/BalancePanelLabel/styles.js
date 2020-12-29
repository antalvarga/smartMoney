
import {StyleSheet} from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Saldo - Parte 1 - 10:54
import Colors from '../../../styles/Colors';


const styles = StyleSheet.create({
    container : {
        // flex: 1
        // , padding: 80
        // , alignItems: "center"
        // , justifyContent: 'center'
    }
    , label: {
        fontSize: 14
        , color: Colors.white
        , alignSelf: 'center'
        ,
    }
    , value: {
        fontSize: 36
        , color: Colors.white
        , alignSelf: 'center'
        , 
    }
});

export default styles;

