
import {StyleSheet} from 'react-native';

// Aula: Criando a base de estilo - 05:19
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container : {
        //flex: 1
        padding: 80
        //, alignItems: "center"
        //, justifyContent: 'center'


        // Aula: Criando a base de estilo - 05:19
        , backgroundColor: Colors.background
        ,
    }
    , label: {
        fontSize: 20
        ,
    }
});

export default styles;

