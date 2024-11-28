import { Image, StyleSheet, Platform, View } from 'react-native';

import Formulario from '@/components/Formulario';
import Login from '@/components/Login';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
});

