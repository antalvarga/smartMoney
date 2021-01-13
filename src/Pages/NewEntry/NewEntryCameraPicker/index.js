// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 11:48
import React, {useState} from 'react';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 04:38
// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 10:50 - modal
import {View, Modal, Text, TouchableOpacity} from 'react-native';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 10:57 - RNCamera
import {RNCamera} from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Aula: Adicionando Câmera no Aplicativo - Parte 1 - 04:45
import styles from './styles';

import Colors from '../../../styles/Colors';




const NewEntryCameraPicker = () => {

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 11:24 - 
    const [showModal, setShowModal] = useState(false);

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 13:43 
    const [camera, setCamera] = useState();

    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 17:09
    const onTakePicture = () => {
        
    };
    
    // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 17:09
    const onDelete = () => {
        
        setShowModal(false);
    };


    return(
        <View>
            {/* <Text>NewEntryCameraPicker</Text> */}
            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 05:21 - TouchableOpacity */}
            <TouchableOpacity style={styles.button} onPress={() => {setShowModal(true)}}>

                <Icon name='photo-camera' size={30} color={Colors.white} />

            </TouchableOpacity>

            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 1 - 12:08 - Modal */}
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
        </View>
    );

};



export default NewEntryCameraPicker;
