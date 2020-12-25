// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 07:50
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 14:04 - importar useEffect
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 14:21 - importar useState
import React, { useState, useEffect } from 'react';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 09:34 - Importar Modal, FlatList, TouchableOpacity
import {Modal, View, FlatList, TouchableOpacity, Text} from 'react-native';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 09:34 - Importar Modal, FlatList, TouchableOpacity
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 14:33 - import
import {getDebitCategories, getCreditCategories, getAllCategories } from '../../services/Categories';


import styles from './styles';



// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 11:52 - recebido de NewEntryCategoryPicker as props
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 12:29 - isVisible substituindo category
// const CategoryModal = ({debit, isVisible, }) => {

// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 12:50 - substituir onChangeCategory para onConfirm
// const CategoryModal = ({debit, category, isVisible, onChangeCategory}) => {
    
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 12:52 - onCancel
// Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 16:10 - substituir debit por categoryType
// const CategoryModal = ({debit, isVisible, onConfirm, onCancel}) => {
const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 14:16 - creditCategories e debitCategories recebido de NewEntryCategoryPicker
    const [creditCategories, setCreditCategories] = useState([]);
    const [debitCategories, setDebitCategories] = useState([]);

    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 15:45 - AllCategories
    const [allCategories, setAllCategories] = useState([]);


    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 03:11
    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 13:58 - recebido de NewEntryCategoryPicker
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


            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 15:53
            setAllCategories( await getAllCategories());            

            //const dataLenght = data.length;            
            //console.log( `loadCategories :: data :: ${dataLenght}` );

            // setCategories(data);
        }

        loadCategories();
        console.log( 'NewEntryCategoryPicker :: useEffect');

    }, []);
 

    return(
        
        // <View>
        //     <Text>CategoryModal</Text>
        // </View>
        
        // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 09:16 - transferir o modal para ../components/CategoryModal 
        <Modal
            animationType='slide'
            transparent={false}
        
            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 12:29 - isVisible substituindo modalVisible
            // visible={modalVisible}
            visible={isVisible}
        >

            {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 -     */}
            <View style={ styles.modal }>

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 3 - 08:00 */}
                <FlatList 
                    // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 21:27 
                    // data={categories} - condicao ternaria - if aninhado
                    // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 16:26 - if aninhado novamente
                    // data = {debit ? debitCategories : creditCategories }
                    data = { categoryType === 'all' ? allCategories : categoryType === 'debit' ? debitCategories : creditCategories }

                    keyExtractor={item => item.id} 
                    renderItem={({item}) => (

                        <TouchableOpacity 
                            style={styles.modalItem}
                            // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:49
                            // onPress={() => {onChangeCategory(item)}}       
                            // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 13:26 - substituir onCategoryPress por onConfirm                     
                            // onPress={() => onCategoryPress(item)}
                            onPress={() => onConfirm(item)}
                        >
                            <Text style={[styles.modalItemText, {color: item.color}]}>{item.name}</Text>
                        </TouchableOpacity>

                    )}
                />


                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  17:02 */}
                {/* <Text>Modal</Text> */}

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 2 -  16:09*/}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Categorias - Parte 4 - 12:24 - onClosePress                             */}
                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 15:36 */}
                {/*                     
                <TouchableOpacity 
                    style={styles.closeButton}
                    // onPress={() => {setModalVisible(false); }}
                    onPress={onClosePress}
                >
                    <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity> 
                */}

                {/* // Aula: Ajustando a Tela de Entrada (NewEntry) - Botões de Ação - 15:06 */}
                <ActionFooter>
                    {/* // Aula: Ajustando a Tela de Relatório (Report) - Filtro de Categoria - 13:29 - onCancel */}
                    {/* <ActionPrimaryButton title='Fechar' onPress={onClosePress} /> */}
                    <ActionPrimaryButton title='Fechar' onPress={onCancel} />
                </ActionFooter>

            </View>


        </Modal>

    );
};


export default CategoryModal;