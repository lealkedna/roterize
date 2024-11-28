import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

interface FormularioProps {
  onSubmit?: (data: { origem: string; destino: string; ponto: string }) => void;
}

export default function Formulario({ onSubmit }: FormularioProps) {
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [ponto, setPonto] = useState<string>('');


  const handleSubmit = () => {
    const formData = { origem, destino, ponto };

    // Exibir o alerta com os dados em JSON
    Alert.alert('Dados do Formulário', JSON.stringify(formData, null, 2));

    // Se existir uma função `onSubmit`, chamá-la
    if (onSubmit) {
      onSubmit(formData);
    }
    setOrigem('');
    setDestino('');
    setPonto('');
  };

  return (
    <View style={styles.inicial}>
      <View style={styles.imagem}>
      <Image
        style={styles.logo}
        source={require('../assets/images/viagem-removebg-preview.png')}
      />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite a origem"
        value={origem}
        onChangeText={setOrigem}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destino}
        onChangeText={setDestino}
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite um ponto turístico"
        value={ponto}
        onChangeText={setPonto}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inicial: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 50, 
    backgroundColor: '#f5f5f5', 
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 700, 
    padding: 25,
  },
  button: {
    width: 700,
    height: 50,
    backgroundColor: '#272727',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  imagem: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
