import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 24:34 - ActionFooter
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 08:33 - WelcomeMessage
import WelcomeMessage from './WelcomeMessage';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 11:35 - 
import WelcomeBalanceInput from './WelcomeBalanceInput';

// Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 02:46 - 
import useCategories from '../../hooks/useCategories';

// Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 00:36
import {saveEntry} from '../../services/Entries';


// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 06:38 - logo
import Logo from '../../assets/logo-white.png';

// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 03:26
import styles from './styles';






// Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 03:12 - navigation
const Welcome = ({navigation}) => {

    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 12:06
    const [amount, setAmount] = useState(0);

    // Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 03:38
    const [ ,,, initCategories] = useCategories();
    
    // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 25:09
    // Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 00:55
    const onSavePress = () => {

        // Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 00:56
        saveEntry({
            amount: amount
            , isInit: true
            , category: initCategories
            , 
        }); 
        
        // Aula: Criando a tela de entrada de saldo inicial - Parte 2 - 04:26
        navigation.navigate('Main');
    };


    return (
        <View style={styles.container}>

            <View style={styles.logo}>

                <Image source={Logo} />

            </View>

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 08:58 */}
            {/* <Text>Welcomes</Text> */}
            <WelcomeMessage />

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 11:47 */}
            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 17:18 */}
            <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />

            {/* // Aula: Criando a tela de entrada de saldo inicial - Parte 1 - 25:05 - ActionFooter */}
            <ActionFooter>
                <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
            </ActionFooter>

        </View>
    );
};




export default Welcome;