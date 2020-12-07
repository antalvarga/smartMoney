// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 04:11
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:18 - useState
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:02 - useEffect
import React, { useEffect, useState } from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 13:53 - Modal
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 07:39 - FlatList
import {View, TouchableOpacity, Modal, FlatList, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 01:31
import {getAllCategories} from '../../../services/Categories/';
import { getEntries } from '../../../services/Entries';



import styles from './styles';


const NewEntryCategoryPicker = () => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:00 - useState
    const [modalVisible, setModalVisible] = useState(false);

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 02:45 - allCategories
    const [allCategories, setAllCategories] = useState([]);
    
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:11
    useEffect( () => {
        async function loadCategories() {
            const data = await getAllCategories();

            const dataLenght = data.length;
            
            console.log( `loadCategories :: data :: ${dataLenght}` );
            setAllCategories(data);
        }

        loadCategories();
        console.log( 'NewEntryCategoryPicker :: useEffect');

    }, []);
    


    return(
        <View style={styles.container}>

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

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 -     */}
                <View style={ styles.modal }>

                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 08:00 */}
                    <FlatList 
                        data={allCategories}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (

                            <TouchableOpacity style={styles.modalItem}>
                                <Text style={[styles.modalItemText, {color: item.color}]}>{item.name}</Text>
                            </TouchableOpacity>

                        )}
                    />


                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  17:02 */}
                    {/* <Text>Modal</Text> */}

                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  16:09*/}
                    <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={() => {setModalVisible(false); }}
                    >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>


                </View>


            </Modal>

        </View>
    );
};


export default NewEntryCategoryPicker;

