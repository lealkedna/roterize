import { StyleSheet, Image, View, ImageBackground } from 'react-native';

import Formulario from '@/components/Formulario';

export default function TabTwoScreen() {
  return (
   
      <View style={styles.container}>
        <Formulario></Formulario>
      </View>
   
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    alignItems: 'center',
  },
});
