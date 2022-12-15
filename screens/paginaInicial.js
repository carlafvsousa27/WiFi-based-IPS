import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#DFF6FF',
    height: 667,
  },
  topContainer: {
    paddingTop: 110,
    paddingBottom: 30,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  mediumContainer: {
    paddingTop: 40,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  baseText: {
    fontSize: 26,
    color: '#001D6E'
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#001D6E'
  }
});

const PaginaInicial = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>
          Bem-vindo
        </Text>
      </View>
      <View style={styles.mediumContainer}>
      </View>
      <View>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 30, paddingTop: 110, alignItems: 'center', backgroundColor: '#DFF6FF', borderRadius: 4 }}>
            <Button
              onPress={() => navigation.navigate('selecaoHospital')}
              title="     Let's Go!     "
              color="#001D6E"
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

export default PaginaInicial;