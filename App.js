import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#C4DDFF',
    height: 896,
  },
  topContainer: {
    paddingTop: 200,
    paddingBottom: 50,
    backgroundColor: '#C4DDFF',
    alignItems: 'center'
  },
  mediumContainer: {
    paddingTop: 100,
    backgroundColor: '#C4DDFF',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 50,
    backgroundColor: '#C4DDFF',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  baseText: {
    fontSize: 26,
    color: '#001D6E'
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#001D6E'
  }
});

const App = () => {
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
          source={require('./assets/logo.png')}>
        </Image>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.baseText}>
          Let's Go!
        </Text>
      </View>
    </View>

  );
}

export default App;
