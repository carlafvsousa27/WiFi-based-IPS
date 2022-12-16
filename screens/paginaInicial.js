import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    height: 667,
  },
  topContainer: {
    paddingTop: 100,
    paddingBottom: 10,
    alignItems: 'center'
  },
  mediumContainer: {
    paddingTop: 50,
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 270,
    alignItems: 'center'
  },
  baseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#001D6E'
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    color: '#001D6E',
    paddingBottom: 50
  },
  mapa: {
    flex: 1,
    width: 150,
    height: 150,
    alignItems: 'center'
  }
});

const PaginaInicial = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Image
          source={require('../assets/logoEscuro.png')}
          style={{ width: 130, height: 130 }}
        />
      </View>
      <View style={styles.mediumContainer}>
        <Text style={styles.titleText}>
          Bem-vindo
        </Text>
        <ImageBackground
          source={require('../assets/mapaIndoor.png')}
          style={styles.mapa}>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.baseText}>
          Encontra o teu caminho
        </Text>
        <SafeAreaView style={{ paddingHorizontal: 130, paddingTop: 40 }}>
          <Button
            onPress={() => navigation.navigate('selecaoHospital')}
            title="Let's Go!"
            color="#001D6E"
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

export default PaginaInicial;