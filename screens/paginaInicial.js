import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#C4DDFF',
    height: 667,
  },
  topContainer: {
    paddingTop: 110,
    paddingBottom: 30,
    backgroundColor: '#C4DDFF',
    alignItems: 'center'
  },
  mediumContainer: {
    paddingTop: 40,
    backgroundColor: '#C4DDFF',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 20,
    backgroundColor: '#C4DDFF',
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

const paginaInicial = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>
          Welcome
        </Text>
      </View>
      <View style={styles.mediumContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/Wips.png')}>
        </Image>
      </View>
      <View style={styles.topContainer}>
        <SafeAreaView>
          <View>
           <Button onPress={() => navigation.navigate('selecaoHospital')}
             title="Let's Go!"
             color="#DAEAF1"
           />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

export default paginaInicial;