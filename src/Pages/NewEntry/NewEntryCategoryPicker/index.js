// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 04:11
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:18 - useState
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:02 - useEffect
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 19:14 - remover import useEffect
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 09:47 - Touchable
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 13:53 - Modal
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 07:39 - FlatList
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 18:15 - remover import Modal, FlatList foi transferido para ../components/CategoryModal 
// import {View, TouchableOpacity, Modal, FlatList, Text} from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 14:17 
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 18:15 - remover import ActionFooter foi transferido para ../components/CategoryModal 
// import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from '../../../components/Core/ActionFooter'

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 01:31
// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 07:47 - separar as categorias deb / cred
// import {getAllCategories} from '../../../services/Categories/';
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 18:55 - remover import foi transferido para ../components/CategoryModal 
// import { getDebitCategories, getCreditCategories} from '../../../services/Categories';

import { getEntries } from '../../../services/Entries';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 19:23 - import CategoryModal
import CategoryModal from '../../../components/CategoryModal';


import styles from './styles';

// Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 01:40 - Receber onChangeCatory
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 11:50 - transferir props para ../components/CategoryModal 
const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
// const NewEntryCategoryPicker = ({}) => {

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 - 15:00 - useState
    const [modalVisible, setModalVisible] = useState(false);

    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 02:45 - allCategories
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 02:50 - debitCategories
    // const [allCategories, setAllCategories] = useState([]);
    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 20:20
    // const [categories, setCategories] = useState([]);
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 14:14 - Transferir creditCategories e debitCategories para ../components/CategoryModal 
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 18:32 - Limpeza de creditCategories e debitCategories para ../components/CategoryModal 
    //const [creditCategories, setCreditCategories] = useState([]);
    // const [debitCategories, setDebitCategories] = useState([]);
    


    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:11
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 13:55 - transferido para ../components/CategoryModal 
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 18:50 - Limpeza do useEffect pois foi transferido para ../components/CategoryModal 
    /*
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
    */

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
            {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 09:16 - transferir o modal para ../components/CategoryModal */}
            {/* Modal ... */}

            {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 19:37 - CategoryModal */}
            <CategoryModal 
                categoryType={ debit ? 'debit' : 'credit' }
                isVisible={modalVisible}
                onConfirm={onCategoryPress}
                onCancel={onClosePress}
            />

        </View>
    );
};


export default NewEntryCategoryPicker;

