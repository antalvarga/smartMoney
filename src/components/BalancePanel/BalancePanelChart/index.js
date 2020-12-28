import React from 'react';
import {View, Text} from 'react-native';

// Aula: Gráfico de evolução do saldo - Parte 1 - 00:39
// Aula: Gráfico de evolução do saldo - Parte 1 - 03:08 - Remover import Grid
import {BarChart} from 'react-native-svg-charts';

import styles from './styles';



/*

            <BarChart 
                style={styles.chart}
                data={data}
                svg= {{fill}}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid /> 

            </BarChart>

ou 

            <BarChart data={data} />

*/



const BalancePanelChart = () => {

    // Aula: Gráfico de evolução do saldo - Parte 1 - 01:21
    const data = [ 100, 80, -30, 200, 10, 35, 70];

    const fill = 'rgb(134, 65, 244)'
    
    
    return(
        
        <View style={styles.container} >
        
            {/* // Aula: Gráfico de evolução do saldo - Parte 1 - 01:02 */}
            {/* // Aula: Gráfico de evolução do saldo - Parte 1 - 03:48 - svg */}
            <BarChart 
                style={styles.chart} 
                data={data}
                svg={{fill: 'rgba(0,0,0, .1)', stroke: 'rgba(0,0,0, .1)' , strokeWidth: 1, }}
                contentInset={{top: 0, bottom: 0}}
            />

        </View>
    );
};



export default BalancePanelChart;