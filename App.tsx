import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <>
      <View style={styles.background}>

        <View style={styles.containerUpSide}>

          <Text style={styles.textTitle}>Bem vindo, Carlos</Text>
          <Text style={styles.textToDay}>Você gastou hoje</Text>
          <Text style={styles.textTitle}>R$ 500</Text>
          <Text style={styles.textToDay}>ESCOLHER PERÍODO:</Text>

          <View style={styles.containerWeek}>
            <Text style={styles.textWeek}>Hoje</Text>
            <Text style={styles.textWeek}>Essa semana</Text>
            <Text style={styles.textWeek}>Este mês</Text>
          </View>

        </View>

        <View style={styles.containerBotoes}>

          <Button icon={{ name: 'home', color: 'white' }} buttonStyle={{ backgroundColor: '#444140' }} />
          <Button icon={{ name: 'flight', color: 'white' }} buttonStyle={{ backgroundColor: '#444140' }} />
          <Button icon={{ name: 'local-dining', color: 'white' }} buttonStyle={{ backgroundColor: '#444140' }} />
          <Button icon={{ name: 'directions-car', color: 'white' }} buttonStyle={{ backgroundColor: '#444140' }} />
          <Button icon={{ name: 'build', color: 'white' }} buttonStyle={{ backgroundColor: '#444140' }} />

        </View>

        <View style={styles.compraPizza}>

          <Text>Pizza (R$ 30)</Text>
          <Text>20/01/2020</Text>

        </View>

        <View style={styles.compraCoca}>
          <Text>Coca-cola (R$ 10) </Text>
          <Text>20/01/2020</Text>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F7EBE8',
  },
  containerUpSide: {
    height: '50%',
    backgroundColor: '#E54B4B',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
  },
  containerDownSide: {

  },
  textTitle: {
    fontSize: 25,
    color: '#FFF',
  },
  textToDay: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 60
  },
  textWeek: {
    fontSize: 15,
    color: '#FFF',
  },
  containerWeek: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  containerBotoes: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  compraPizza: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 15,
    height: 50,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  compraCoca: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 15,
    height: 50,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }

});
