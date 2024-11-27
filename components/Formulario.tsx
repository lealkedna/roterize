import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface FormularioProps {
  onSubmit?: (data: { origem: string; destino: string; ponto: string }) => void;
}

export default function Formulario({ onSubmit }: FormularioProps) {
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [ponto, setPonto] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ origem, destino, ponto });
    }
    setOrigem('');
    setDestino('');
    setPonto('');
    setDescricao('');
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.descricao}
        placeholder="Aqui escreva porque esse destino e quanto vai gastar"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  descricao: {
    height: 40,
    padding: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
