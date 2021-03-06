import { random } from 'lodash';
import React from 'react';
import {View, Text} from 'react-native';

// Aula: Gráfico de lançamentos por categoria - Parte 1 - 01:59
import {PieChart} from 'react-native-svg-charts';

import styles from './styles';



// Aula: Gráfico de lançamentos por categoria - Parte 2 - renomear data_ por data
// const EntrySummaryChart = ({data_}) => {
const EntrySummaryChart = ({data}) => {

    // Aula: Gráfico de lançamentos por categoria - Parte 1 - 03:04
    // Aula: Gráfico de lançamentos por categoria - Parte 2 - 18:27 - remover
    /*
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
    
    // Aula: Gráfico de lançamentos por categoria - Parte 1 - 05:09 - gerar cores aleatórias
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    */

    // Aula: Gráfico de lançamentos por categoria - Parte 1 - 04:28
    // Aula: Gráfico de lançamentos por categoria - Parte 2 - reconstruir o data
    /*
    const chartData = data
    .filter(value => value > 0)
    .map((value, index) => ({
        value
        , svg: {
            fill: randomColor()
            
            // Aula: Gráfico de lançamentos por categoria - Parte 1 - 06:00 - remover o onPress
            // , onPress: () => console.log( 'EntrySummaryChart :: press', index)
            , 
        }
        , key: `pie-${index}`
        , 
    }));
    */
    const chartData = data.map(({category, amount}) => ({
        key: category.id
        , value: amount
        , svg: {
            fill: category.color
            , 
        }
        , arc: {
            outerRadius: '100%'
            , innerRadius: '80%'
            , 
        }
    }));

    return(
        <View style={styles.container}>

            <Text>(o)</Text>

            <PieChart 
                style={styles.chart}
                // Aula: Gráfico de lançamentos por categoria - Parte 1 - 05:16 - data por chartData
                // data={data}
                data={chartData}
            />

        </View>
    );
};




export default EntrySummaryChart;

