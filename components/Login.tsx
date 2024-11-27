import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/viagem-removebg-preview.png')}
      />
      <Text style={styles.texto}>Descreva sua viagem de forma única e organizada, compartilhando detalhes como destinos, pontos turísticos</Text>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Formulario')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  texto: {
    fontSize: 15,
  },
  // button: {
  //   width: '70%',
  //   height: 50,
  //   backgroundColor: '#007BFF',
  //   borderRadius: 8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
});
