/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

// RocketSeat para TSX
// const App: React.FC = () => {
const App = () => {


/*
  <Text>Alimentação $200,00</Text>
  <Text>Combustível $12,00</Text>
  <Text>Aluguel $120,00</Text>
  <Text>Lazer $250,00</Text>
  <Text>Outros $1200,00</Text>

  const data = {[
    {key: 'Alimentação $200,00'}
    , {key: 'Combustível $12,00'}
    , {key: 'Aluguel $120,00'}
    , {key: 'Lazer $250,00'}
    , {key: 'Outros $1200,00'}
    
  ]}
*/

  const addEntry = () => {
    alert( 'addEntry' );
  };


  return(
    <View style={styles.container}>
      <Text>Hello world!!!</Text>

      <Text 
        style={{
                fontSize: 22
                , fontWeight: "bold"
                , marginTop: 10
                , marginBottom: 10
                ,
              }}
      >
        Saldo: $2.102,45
      </Text>

      <Button onPress={addEntry} title='Adicionar'></Button>
      
      
      <Text
        style={{
          fontSize: 22
          , fontWeight: "bold"
          , marginTop: 10
          , marginBottom: 10
          ,
        }}
      >
        Categorias
      </Text>

      <FlatList
          data = {[
            {key: 'Alimentação $200,00'}
            , {key: 'Combustível $12,00'}
            , {key: 'Aluguel $120,00'}
            , {key: 'Lazer $250,00'}
            , {key: 'Outros $1200,00'}    
          ]}     
          renderItem={({item}) => <Text>{item.key}</Text>}
      >
      </FlatList>

      
      <Text
        style={{
          fontSize: 22
          , fontWeight: "bold"
          , marginTop: 10
          , marginBottom: 10
          ,
        }}
      >
        Últimos lançamentos
      </Text>

      <FlatList
          data = {[
            {key: 'Padaria Asa Branca $10,00'}
            , {key: 'Supermercado $190,00'}
            , {key: 'Posto Ipiranga $190,00'}
          ]}     
          renderItem={({item}) => <Text>{item.key}</Text>}
      >
      </FlatList>




    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
    //, alignItems: 'center'
    , justifyContent: 'center'
    , padding: 20
    , marginTop: 80
  }
});

export default App;
