import React from 'react';

// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 24:18
import {View, Text, TouchableOpacity} from 'react-native';

// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 12:03
import Svg, {Circle, Rect} from 'react-native-svg';


// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 13:23
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 15:34
import Colors from '../../../styles/Colors';

import styles from './styles';



// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 07:09 - entry
// const EntryListItem = () => {
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 22:30 - isFirstItem, isLastItem
// Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 24:42 - onEntryPress
const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
//const EntryListItem = ({entry}) => {

    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 22:30 - vai controlar o Y do retangulo
    // 0 ou 25 que é a metade do 50
    // Condição ternária
    //const isFirstItem = true;    
    const bulletLineY = isFirstItem ? 25 : 0;
    
    // Controlar a altura da linha
    //const isLastItem = true;
    const bulletLineHeight = isLastItem ? 25 : 50;

    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 28:14
    const showBulletLine = !(isFirstItem && isLastItem);

    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 30:00
    // const bulletColor = entry.category.color || Colors.white
    // TODO: A propriedade color para category não existe no modelo
    //const bulletColor = entry.category || Colors.white
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 15:40
    // const bulletColor = Colors.blue;
    const bulletColor = entry.category.color || Colors.white;



    return (

        /* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 24:28 */
        // Executa a funcion onEntryPress se o parâmetro onEntryPress for != nulo
        <TouchableOpacity onPress={ () => { onEntryPress && onEntryPress(entry) } }>

        {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 07:05
        // <View>
        //     <Text>EntryListItem</Text>
        // </View>


        // Aula: Editando dados de um lançamento - 02:54 - View e button
        // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 02:04 - styles.primaryItemContainer */}

        <View style={styles.container}>




            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 12:03 */}
            {/* 
            <Text style={styles.entry}>
                {entry.description} - {entry.amount}
            </Text>  
            */}


            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 02:33 */}
            {/* Montando as 3 views */}

            {/* svg */}
            <View style={styles.bullet}>

                {/* 
                    // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 20:45
                    y= distância do teto 0 = teto / 50 = base
                    height = distância da base - 0 = base / 50 = topo

                    Se for o primeiro registro mexemos no teto
                    Se for o último mexemos na base
                */}
                <Svg height='50' width='30'>

                    { showBulletLine && (
                        <Rect 
                            x='9'   // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 32:42 - alterado pra 15
                            y={bulletLineY}
                            width='1.5'
                            height={bulletLineHeight}
                            // fill={Colors.white} // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 33:52 - alterado background
                            fill={Colors.background}
                        />
                    )}

                    {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 29:10 */}
                    <Circle 
                        cx='10'   // // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 2 - 32:42 - alterado pra 15
                        cy='25'
                        r={8}
                        stroke={Colors.background}
                        strokeWidth= '1.5'
                        fill={bulletColor}
                    />

                </Svg>

            </View>



            <View style={styles.description}>

                {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 19:27 */}
                {/* <Text style={styles.descriptionText}>Descrição</Text> */}
                <Text style={styles.descriptionText}>{entry.description}</Text>

                <View style={styles.details}>

                    <Icon style={styles.entryAtIcon} name='access-time' size={20} />
                    <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>

                    {/* Condição ternária */}
                    { entry.entryAt && (
                        <>                            
                            <Text style={styles.addressText} >{entry.address}</Text>
                            <Icon style={styles.addressIcon} name='person-pin' size={20} />
                        </>
                        
                    )}

                        
                        

                </View>
                        
            </View>


            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 3 - 05:49 */}
            <View style={styles.amount}>
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Valor - Parte 3 - 10:06 - {entry.amount} */}
                <Text style={styles.amountText}>{entry.amount}</Text>
            </View>







            {/* // Aula: Ajustando a Tela Principal (Main) - Listagem - Parte 1 - 03:00 - Retirar o button */}
            {/* 
            <Button 
                title={item.id}
                onPress={() => {
                    navigation.navigate('NewEntry', {entry: item});
                }}
            />
            */}

        </View>
        
    </TouchableOpacity>


    );
};

export default EntryListItem;

