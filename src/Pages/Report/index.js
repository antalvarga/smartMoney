// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 09:00 - useState
import React, {useState} from 'react';

// EM 20201203 - Ocorreu um warning sobre o picker sugerindo que fosse utilizado
// o @react-native-community/picker
// import {View, Text, Picker, Button} from 'react-native';
//import {Picker} from '@react-native-community/picker';
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 03:42 - TouchableOpacity
import {View, Text, TouchableOpacity ,Button, SafeAreaView} from 'react-native';

//import {Picker} from '@react-native-picker/picker';

import { ScrollView } from 'react-native-gesture-handler';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 04:29
import Icon from 'react-native-vector-icons/MaterialIcons';


// Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 04:59
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter';

// Adicionando as Props em Todos os Componentes - 01:57
// import EntryLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';


// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 10:05
import RelativeDaysModal from '../../components/RelativeDaysModal';

import EntrySummaryList from '../../components/EntrySummary/EntrySummaryList';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 22:20
import CategoryModal from '../../components/CategoryModal';


import Colors from '../../styles/Colors';

import styles from './styles';


const Report = ({navigation}) => {

    const currentBalance = 2065.35;

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 08:45
    const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false);

   
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 05:26
    const [categoryModalVisible, setCategoryModalVisible]= useState(false);


    // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:04 - Retirar
    // Adicionando as Props em Todos os Componentes - 11:22
    /*
    const entries = [
                        {key: '1', description: 'Padaria Asa Branca', amount: 10}
                        , {key: '2', description: 'SumerMercado CrisTal', amount: 190}
                        , {key: '3', description: 'Posto Ipiranga', amount: 291.66}
                        , {key: '4', description: 'Ponto Cristal', amount: 3000.11}
                    ];
    */                
    // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:04 - Retirar
    // Adicionando as Props em Todos os Componentes - 11:22
    /* 
    const entriesGrouped = [
                                {key: '1', description:  'Alimentação', amount: 201}
                                , {key: '2', description:  'Combustível', amount: 11}
                                , {key: '3', description:  'Aluguel', amount: 120}
                                , {key: '4', description:  'Lazer', amount: 250}
                                , {key: '5', description:  'Outros', amount: 1200}
                            ];
    */   
   
   
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 20:32 - 
    const [relativeDays, setRelativeDays] = useState(7);
    
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 05:47
    const [category, setCategory] = useState( {id: null, name: 'Todas categorias'})                            

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 19:56 - 
    const onRelativeDaysPress = item => {

        setRelativeDays(item);

        onRelativeDaysClosePress();
    } ;

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 24:00
    const onCategoryPress = item => {

        setCategory(item);

        onCategoryClosePress();

    };


    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 21:22 
    const onRelativeDaysClosePress = () => {

        setRelativeDaysModalVisible(false);

    }

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 24:25 - 
    const onCategoryClosePress = () => {

        setCategoryModalVisible(false);
    }

    return(
        <View style={styles.container}>
            <Text>Report</Text>

            {/* // Adicionando as Props em Todos os Componentes - 01:57 */}
            {/* <EntryLabel /> */}
            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:16 */}
            {/* <BalanceLabel currentBalance={currentBalance} /> */}
            <BalanceLabel />

            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:20 - */}
            {/* 
            <View>
                <Button title='Salvar' />
                <Button title='Fechar' />
            </View> 
            */}
            <ActionFooter>
                <ActionPrimaryButton 
                    title='Fechar'
                    // onPress={() => {navigation.goBack(); }}
                    onPress={() => {navigation.navigate('Main'); }}
                />
            </ActionFooter>

            {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 03:53 - estilizar */}
            <View style={styles.filtersContainer}>

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 03:23 - Remover picker */}
                {/*                 
                <Picker>
                    <Picker.Item label='Todas as categorias' />                     
                    <Picker.Item label='Categoria 1' />
                    <Picker.Item label='Categoria 2' />
                    <Picker.Item label='Categoria 3' />
                    <Picker.Item label='Categoria 4' />
                    
                </Picker>

                <Picker>
                    <Picker.Item label='Últimos 7 dias' />                    
                    <Picker.Item label='Últimos 15 dias' />                    
                    <Picker.Item label='Últimos 21 dias' />                    
                </Picker>
                */}

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 03:50 - TouchableOpacity */}
                <TouchableOpacity  
                    onPress={() => {
                        setRelativeDaysModalVisible(true);
                    }}
                    style={styles.filterButton}
                >
                    <Text style={styles.filterButtonText}>{`Últimos ${relativeDays} dias`}</Text>

                    <Icon 
                        name='keyboard-arrow-down'
                        size={20}
                        color={Colors.champagneDark}
                    />

                </TouchableOpacity>

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 10:24  */}
                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 22:01 - onConfirm  */}
                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 22:10 - onCancel  */}
                <RelativeDaysModal 
                    isVisible={relativeDaysModalVisible}
                    onConfirm={onRelativeDaysPress}
                    onCancel={onRelativeDaysClosePress}
                /> 

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 03:31 -  */}
                <TouchableOpacity 
                    style={styles.filterButton}
                    onPress={() => {setCategoryModalVisible(true); }}                
                >

                    <Text style={styles.filterButtonText}>{category.name}</Text>

                    <Icon 
                        name='keyboard-arrow-down'
                        size={20}
                        color={Colors.champagneDark}
                    />

                </TouchableOpacity>

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 22:39 */}
                <CategoryModal 
                    categoryType='all'
                    isVisible={categoryModalVisible}
                    onConfirm={onCategoryPress}
                    onCancel={onCategoryClosePress}
                />

            </View>



            {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 08:04 - ScrollView  */}
            {/* Foi obrigatorio usar uma orientacao  */}
            <ScrollView horizontal = {true} >

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Ajustes iniciais - 02:20 - */}
                {/* <EntrySummary entriesGrouped={entriesGrouped}/> */}
                <EntrySummary />

                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 20:46 - days */}
                {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 27:04 - category */}
                <EntryList days={relativeDays} category={category}/>

            </ScrollView>

        </View>
    );
};


export default Report;

