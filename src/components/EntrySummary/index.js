import React from 'react';

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 06:25 - 
// Retirar as importacoes desnecessarias
//import {View, Text, TouchableOpacity} from 'react-native';
// Aula: Gráfico de lançamentos por categoria - Parte 1 - 07:59 
import {View} from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 16:34
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 01:51
import Container from '../Core/Container';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

// Aula: Gráfico de lançamentos por categoria - Parte 2 - 08:08 - importar hook
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

import styles from './styles';



// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 00:31
// Aula: Gráfico de lançamentos por categoria - Parte 2 - 09:01 - remover entreisGrouped
/*
const entriesGrouped = [
    {key: '1', description:  'Alimentação', amount: 201}
    , {key: '2', description:  'Combustível', amount: 11}
    , {key: '3', description:  'Aluguel', amount: 120}
    , {key: '4', description:  'Lazer', amount: 250}
    , {key: '5', description:  'Outros', amount: 1200}
];
*/

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 00:31
// const EntrySummary = ({entriesGrouped}) => {
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 30:33 - onPressActionButton    
// Aula: Gráfico de lançamentos por categoria - Parte 1 - 08:58 - days
const EntrySummary = ({days = 7, onPressActionButton}) => {

    // Aula: Gráfico de lançamentos por categoria - Parte 2 - 08:37
    const [balanceSum] = useBalanceSumByCategory( days );

    return(
    
        // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 03:00
        // Container
        // <View style={styles.container}> 
        // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 04:58
        // <Container style={styles.container}> 
        // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 07:47 - title
        //<Container title='Categoriass' actionLabelText='Últimos 70 dias' actionButtonText='Ver mais detalhes...'> 
        <Container 
            title='Categorias' 
            // Aula: Gráfico de lançamentos por categoria - Parte 1 - 09:00 - actionLabelText
            // actionLabelText='Últimos 7 dias' 
            actionLabelText={`Últimos ${days} dias`}
            actionButtonText='Ver mais detalhes...'
            onPressActionButton={onPressActionButton}
        > 
        
            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 08:25 */}
            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 05:05 */}
            {/* Text transferido para o component> core> Container */}
            {/* <Text style={styles.title}>Categorias</Text> */}
            {/* // Aula: Gráfico de lançamentos por categoria - Parte 1 - 06:59 - View */}
            <View style={styles.inner}>

                {/* // Aula: Gráfico de lançamentos por categoria - Parte 2 - 08:52 - data */}
                {/* <EntrySummaryChart /> */}
                <EntrySummaryChart data={balanceSum} />

                {/* // Aula: Gráfico de lançamentos por categoria - Parte 2 - 08:57 - data */}
                {/* <EntrySummaryList entriesGrouped={entriesGrouped} /> */}
                <EntrySummaryList data={balanceSum} />

            </View>

            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 05:05 */}
            {/* Text transferido para o component> core> Container */}

            {/* 
                <View style={styles.actionContainer}> 

                    <Text style={styles.actionLabel}>Últimos <Text style={styles.actionLabelDays}>7</Text> dias</Text>

                    <TouchableOpacity style={styles.actionButton}>
                        <Icon name='insert-chart' style={styles.actionButtonIcon} />
                        <Text style={styles.actionButtonText}>Ver detalhes...</Text>
                    </TouchableOpacity>
                </View>
            */}

        </Container>
    );
};


export default EntrySummary;