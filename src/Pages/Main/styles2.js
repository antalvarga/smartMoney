
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
        , backgroundColor: '#fff'
       
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    , containerImage: {
        width: '100%'
        , flex: 1
        , marginTop: 64
    }
    , containerButton: {
        flex: 2
        , alignItems: 'center'
    }
    , textHeader: {
        fontWeight: '100'
        , fontSize: 32
    }
    , textButton: {
        color: '#fff'
    }
    , button: {
        marginTop: 32
        , backgroundColor: "#23a6d9"
        , paddingVertical: 12
        , width: 250
        , borderRadius: 12
        , alignItems: 'center'
      }
    , imageHome: {
        width: 200
        , height: 240
        , flex: 1
    }
 
});

export default styles;
