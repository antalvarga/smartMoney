// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 04:11
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:18 - useState
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:02 - useEffect
import React, { useEffect, useState } from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 13:53 - Modal
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 07:39 - FlatList
import {View, TouchableOpacity, Modal, FlatList, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 01:31
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 07:47 - separar as categorias deb / cred
// import {getAllCategories} from '../../../services/Categories/';
import { getDebitCategories, getCreditCategories} from '../../../services/Categories';

import { getEntries } from '../../../services/Entries';



import styles from './styles';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 01:40 - Receber onChangeCatory
const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:00 - useState
    const [modalVisible, setModalVisible] = useState(false);

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 02:45 - allCategories
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 02:50 - debitCategories
    // const [allCategories, setAllCategories] = useState([]);
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 20:20
    // const [categories, setCategories] = useState([]);
    const [creditCategories, setCreditCategories] = useState([]);
    const [debitCategories, setDebitCategories] = useState([]);
    


    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:11
    useEffect( () => {
        async function loadCategories() {

            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 08:45 - separar as categorias deb / cred
            // const data = await getAllCategories();
            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 20:46
            //let data;

            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 20:45
            // if (debit <= 0 ) {
            //     data = await getDebitCategories();
            // } else {
            //     data = await getCreditCategories();
            // }

            const dataDebit = await getDebitCategories();
            const dataCredit = await getCreditCategories();
            
            setDebitCategories( dataDebit );
            setCreditCategories( dataCredit );

            //const dataLenght = data.length;            
            //console.log( `loadCategories :: data :: ${dataLenght}` );

            // setCategories(data);
        }

        loadCategories();
        console.log( 'NewEntryCategoryPicker :: useEffect');

    }, []);
    

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:10
    const onCategoryPress = item => {

        onChangeCategory(item);

        onClosePress();

    }


    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:10
    const onClosePress = () => {

        setModalVisible(false);

    }


    return(
        <View style={styles.container}>

            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable */}
            {/* <Text>NewEntryCategoryPicker</Text> */}
            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 10:32 - category.name */}
            <TouchableOpacity style={styles.pickerButton} onPress={() => {setModalVisible(true); }}>
                <Text style={styles.pickerButtonText}>{category.name}</Text>
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
                        // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 21:27 
                        // data={categories} - condicao ternaria - if aninhado
                        data = {debit ? debitCategories : creditCategories }
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (

                            <TouchableOpacity 
                                style={styles.modalItem}
                                // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:49
                                // onPress={() => {onChangeCategory(item)}}                            
                                onPress={() => onCategoryPress(item)}
                            >
                                <Text style={[styles.modalItemText, {color: item.color}]}>{item.name}</Text>
                            </TouchableOpacity>

                        )}
                    />


                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  17:02 */}
                    {/* <Text>Modal</Text> */}

                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  16:09*/}
                    {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:24 - onClosePress                             */}
                    <TouchableOpacity 
                        style={styles.closeButton}
                        // onPress={() => {setModalVisible(false); }}
                        onPress={onClosePress}
                    >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>

                </View>


            </Modal>

        </View>
    );
};


export default NewEntryCategoryPicker;

