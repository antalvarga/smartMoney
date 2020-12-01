import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 16:34
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({entriesGrouped}) => {
    return(
        <View style={styles.container}> 
        
            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 08:25 */}
            <Text style={styles.title}>Categorias</Text>

            <EntrySummaryChart />

            <EntrySummaryList entriesGrouped={entriesGrouped} />


            <View style={styles.actionContainer}>

                <Text style={styles.actionLabel}>Últimos <Text style={styles.actionLabelDays}>7</Text> dias</Text>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name='insert-chart' style={styles.actionButtonIcon} />
                    <Text style={styles.actionButtonText}>Ver detalhes...</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default EntrySummary;