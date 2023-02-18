import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  page: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF',
    height: 844
  },
  topContainer: {
    marginTop: 100,
    marginBottom: 10,
    alignItems: 'center'
  },
  mediumContainer: {
    marginTop: 50,
    alignItems: 'center',

  },
  bottomContainer: {
    marginTop: 100,
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
    marginBottom: 50
  },
  mapa: {
    width: 150,
    height: 150,
    alignItems: 'center'
  },
  Video: {
    width: 50,
    height: 50,
    alignItems: 'center',
    marginTop: 10
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
        <Image
          source={require('../assets/mapaIndoor.png')}
          style={styles.mapa}>
        </Image>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.baseText}>
          Encontra o teu caminho
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('selecaoHospital')}>
          <Image
            source={require('../assets/video.png')}
            style={styles.Video}
          />
        </TouchableOpacity>


      </View>
    </View>
  );
}

export default PaginaInicial;