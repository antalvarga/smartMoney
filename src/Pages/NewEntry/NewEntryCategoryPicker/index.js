// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 04:11
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:18 - useState
import React, { useState } from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 13:53 - Modal
import {View, TouchableOpacity, Modal, Text} from 'react-native';

import styles from './styles';


const NewEntryCategoryPicker = () => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:00 - useState
    const [modalVisible, setModalVisible] = useState(false);


    return(
        <View>
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable */}
            {/* <Text>NewEntryCategoryPicker</Text> */}
            <TouchableOpacity style={styles.pickerButton} onPress={() => {setModalVisible(true); }}>
                <Text style={styles.pickerButtonText}>Alimentação</Text>
            </TouchableOpacity>

            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 14:12 - modal */}
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
                
            >

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  17:02 */}
                <Text>Modal</Text>


                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  16:09*/}
                <TouchableOpacity 
                    style={styles.pickerButtonText2}
                    onPress={() => {setModalVisible(false); }}
                >
                    <Text>Fechar</Text>
                </TouchableOpacity>


            </Modal>

        </View>
    );
};


export default NewEntryCategoryPicker;

