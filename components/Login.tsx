import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/images/oculos-removebg-preview.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.paragraph}>
        Descreva sua viagem de forma única e organizada, compartilhando detalhes como destino e pontos turísticos.
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffff',
    padding: 20,
  },
  logo:{          
    marginTop: 100,  
    resizeMode: 'contain',
  },
   textContainer: {
    flex: 1,  
     marginTop: 100,                         
    alignItems: 'center',   
  },

  paragraph: {
    fontSize: 24,    
    fontWeight: 'bold',      
    textAlign: 'center',      
    color: '#263A29',        
    fontFamily: 'sans-serif',
  },
});
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
