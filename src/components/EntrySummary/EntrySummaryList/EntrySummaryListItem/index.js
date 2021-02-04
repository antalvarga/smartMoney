// Aula: Gráfico de lançamentos por categoria - Parte 3 - 05:32
import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle} from 'react-native-svg';


// Aula: Formatacação de moedas e data - 08:19
import Currency from '../../../Core/Currency';

import Colors from '../../../../styles/Colors';

import styles from './styles';





const EntrySummaryListItem = ({entry}) => {

    // Aula: Gráfico de lançamentos por categoria - Parte 3 - 10:23
    const bulletColor = entry.category.color || Colors.white;

    return(
        <View style={styles.containerNew}>

            <Svg height="20" width="22">
                <Circle 
                    cx="10"
                    cy="10"
                    r="8"
                    stroke={Colors.background}
                    strokeWidth="0.5"
                    fill={bulletColor}
                />

            </Svg>

            {/* // Aula: Gráfico de lançamentos por categoria - Parte 3 -  */}
            {/* // Preferencia pessoal */}
            {/* <Text style={styles.name}>{entry.category.name}</Text> */}
            <Text style={styles.entry}>{entry.category.name}</Text>

            {/* <Text style={styles.value}>{entry.amount}</Text> */}
            {/* // Aula: Formatacação de moedas e data - 08:10 */}
            {/* <Text style={styles.entryAmount}>R$ {entry.amount}</Text> */}
            <Text style={styles.entryAmount}>
                <Currency value={entry.amount} />
            </Text>

        </View>
    );
};



export default EntrySummaryListItem;