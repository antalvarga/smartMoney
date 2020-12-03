import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 1 - 16:34
// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 06:11
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 04:06 - children
// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 06:11 - title
// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 08:33 - actionLabelText
// Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 09:29 - actionButtonText
const Container = ({title
                    , actionLabelText
                    , actionButtonText
                    , children
                    , onPressActionButton
                }) => {
    return(
        <View  style={styles.container}>
            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 07:47 - title*/} 
            {/* <Text style={styles.title}>Categorias</Text> */}

            {/* Aplicar condicao ternaria */}
            { title && (
                <Text style={styles.title}>{title}</Text>
            )}


            {children}


            {/* 
            // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 11:33 - Renderizar 
            // Caso o conteudo não seja nulo - condição ternária
            */}

            {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 06:00 */}
            { (actionLabelText || actionButtonText) && (

                <View style={styles.actionContainer}> 

                    {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 12:58 */}
                    {/* Condicao ternaria */}
                    {actionLabelText && (
                        <Text style={styles.actionLabel}>Últimos <Text style={styles.actionLabelDays}>{actionLabelText}</Text> dias</Text>
                        )}


                    {/* // Aula: Ajustando a Tela Principal (Main) - Resumo - Parte 2 - 13:23 */}
                    {actionButtonText && (
                        
                        <TouchableOpacity 
                            style={styles.actionButton}
                            onPress={onPressActionButton}
                        >
                            <Icon name='insert-chart' style={styles.actionButtonIcon} />
                            <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                        </TouchableOpacity>

                    )}
                </View>

            )}







        </View>
    );
}

export default Container;