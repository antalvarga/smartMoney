import React from 'react';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 10:51 - importar modal
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 12:18 - FlatList
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 13:31 - TouchableOpacity
import { View, Modal, FlatList, TouchableOpacity, Text } from 'react-native';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 15:31 - 
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter'


import styles from './styles';


const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 11:51 - relativeDays
    const relativeDays = [1, 3, 7 ,15, 21, 30, 45, 60, 90, 180, 365];


    return(
        <Modal
            animationType='slide'
            transparent={false}
            visible={isVisible }
        >
            {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 16:41 - style */}            
            <View style={styles.modal}> 
                {/* <Text>RelativeDaysModal</Text> */}
                <FlatList 
                    data={relativeDays}
                    keyExtractor={item => item.toString() }
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.modalItem} onPress={() => onConfirm(item)} >
                            <Text style={styles.modalItemText}>{`${item} dias`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Data - Parte 2 - 16:11 */}
            <ActionFooter>
                <ActionPrimaryButton title='Fechar' onPress={onCancel} />
            </ActionFooter>
        </Modal>
    );
};


export default RelativeDaysModal;