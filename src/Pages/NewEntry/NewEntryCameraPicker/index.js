// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 11:48
import React, {useState} from 'react';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 04:38
// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 10:50 - modal
// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:00 - transferir modal para NewEntryCameraPickerModal
//import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {View, TouchableOpacity} from 'react-native';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 10:57 - RNCamera
// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:05 - Transferido para NewEntryCameraPickerModal
import {RNCamera} from 'react-native-camera';

// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:17 - Transferido para NewEntryCameraPickerModal
import Icon from 'react-native-vector-icons/MaterialIcons';


// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:58 
import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 04:45
import styles from './styles';

import Colors from '../../../styles/Colors';





// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 08:04
const NewEntryCameraPicker = ({photo, onChangePhoto}) => {

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 11:24 - 
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 08:44 - 
    // const [showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 13:43 
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:25 - Transferido para NewEntryCameraPickerModal
    // const [camera, setCamera] = useState();

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 17:09
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:51  - Transferido para NewEntryCameraPickerModal
    //const onTakePicture = () => {};
    
    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 17:09
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:04  - Transferido para NewEntryCameraPickerModal
    /*
    const onDelete = () => {
        
        setShowModal(false);
    };
    */

    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 09:07
    const onChangePhotoPress = ( newPhoto ) => {
        
        onChangePhoto( newPhoto ); 

        onClosePress();
    }
    
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 09:48
    const onDeletePicturePress = () => {

        onChangePhoto(null);

        onClosePress();
    } 

    const onClosePress = () => {

        setModalVisible( false );
    }



    return(
        <View>
            {/* <Text>NewEntryCameraPicker</Text> */}
            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 05:21 - TouchableOpacity */}
            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 14:35 - Condicao ternaria */}
            <TouchableOpacity   style={[ styles.button, photo ? styles.buttonActived : '' ]} 
                                onPress={ () => { setModalVisible(true) } }
            >

                <Icon name='photo-camera' size={30} color={Colors.white} />

            </TouchableOpacity>

            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 12:08 - Modal */}
            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:10  - Transferido para NewEntryCameraPickerModal */}
            {/* 

            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
            >
                <RNCamera
                    ref={ref => setCamera(ref)}
                    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 16:52
                    // style={{flex: 1, }}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    captureAudio={false}                    
                    androidCameraPermissionOptions={{
                        title: 'Permissão para usar a câmera'
                        , message: 'Precisamos da sua permissão'
                        , buttonPositive: 'OK'
                        , buttonNegative: 'Cancelar'
                        ,
                    }}
                >
                    <Icon 
                        name='photo-camera'
                        size={40}
                        color={Colors.white}
                        onPress={onTakePicture}
                        style={styles.buttonTakePicture}
                    />
                    <Icon 
                        name='close'
                        size={50}
                        color={Colors.white}
                        onPress={onDelete}
                        style={styles.buttonDeletePicture}
                    />
                    
                </RNCamera>

            </Modal>

            */}

            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 03:12 */}
            <NewEntryCameraPickerModal 
                photo={photo}
                isVisible={modalVisible}
                onChangePhoto={onChangePhotoPress}
                onDelete={onDeletePicturePress}
                onClose={onClosePress}
            
            />
        </View>
    );

};



export default NewEntryCameraPicker;
