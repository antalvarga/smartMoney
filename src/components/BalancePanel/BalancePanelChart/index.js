import React from 'react';
import {View, Text} from 'react-native';

// Aula: Gráfico de evolução do saldo - Parte 1 - 00:39
// Aula: Gráfico de evolução do saldo - Parte 1 - 03:08 - Remover import Grid
import {BarChart} from 'react-native-svg-charts';

// Aula: Gráfico de evolução do saldo - Parte 2 - 18:37 - 
import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate';

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

    // Aula: Gráfico de evolução do saldo - Parte 2 - 19:05 - [balance]
    // Ativar o debug *** não funfou ***
    const [balanceSum] = useBalanceSumByDate();
    console.log(`BalancePanelChart :: balanceSum -> ${balanceSum}`);

    const fill = 'rgb(134, 65, 244)'
    
    // Aula: Gráfico de evolução do saldo - Parte 2 - 01:44 - transpor saldo
    // D -8 = Saldo do dia 8
    // D -7 = Saldo do dia -7 + D -8
    // D -6 = Saldo do dia -6 + D -7
    // D -5 = Saldo do dia -5 + D -6
    // D -4 = Saldo do dia -4 + D -5
    // D -3 = Saldo do dia -3 + D -4
    // D -2 = Saldo do dia -2 + D -3
    // D -1 = Saldo do dia -1 + D -2

    return(
        
        <View style={styles.container} >
        
            {/* // Aula: Gráfico de evolução do saldo - Parte 1 - 01:02 */}
            {/* // Aula: Gráfico de evolução do saldo - Parte 1 - 03:48 - svg */}
            <BarChart 
                style={styles.chart} 
                // Aula: Gráfico de evolução do saldo - Parte 2 - 29:00 - trocar data por balanceSum
                data={data}
                //data={balanceSum}
                svg={{fill: 'rgba(0,0,0, .1)', stroke: 'rgba(0,0,0, .1)' , strokeWidth: 1, }}
                contentInset={{top: 0, bottom: 0}}
            />

        </View>
    );
};



export default BalancePanelChart;