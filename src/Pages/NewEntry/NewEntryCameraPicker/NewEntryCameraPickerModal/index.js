// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 00:47
// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:54 - state
import React, {useState} from 'react'; 

// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:03
// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 05:58 - Alert
import {Alert, View, Modal, Text} from 'react-native';

// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:05 - Transferido do NewEntryCameraPicker
import {RNCamera} from 'react-native-camera';

// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:20
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:15
import Colors from '../../../../styles/Colors';





// Aula: Adicionando Câmera no Aplicativo - Parte 2 - 03:28 - props
const NewEntryCameraPickerModal = ({photo, isVisible, onChangePhoto, onDelete, onClose}) => {

    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:25 - Transferido de NewEntryCameraPicker
    const [camera, setCamera] = useState();

    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 01:51 - Transferido do NewEntryCameraPicker
    // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 04:06 - onTakePicture... 
    // const onTakePicture = () => {
    const onTakePicture = async () => {

        try {
            
            const {uri} = await camera.takePictureAsync({
                quality: 0.5
                , forceUpOrientation: true
                , fixOrientation: true
                , skipProcessing: true
            });

            // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 07:03             
            onChangePhoto( uri );

        } catch (error) {
            
            // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 06:08
            console.error("NewEntryCameraPickerModal :: onTakePicture :: Error on get picture! ", error);

            Alert.alert( "Erro!", "Houve um erro ao tirar foto!" );
            
        }

    };
    
    return (
        <View>
            {/* <Text>NewEntryCameraPickerModal </Text> */}

            {/* // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 02:13  - Transferido do NewEntryCameraPicker */}
            <Modal
                animationType='slide'
                transparent={false}

                // Aula: Adicionando Câmera no Aplicativo - Parte 2 - 04:06 - isVisible
                // visible={showModal}
                visible={isVisible}
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



export default NewEntryCameraPickerModal;