import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#D0C4F2',
    height: 667,
  },
  topContainer: {
    paddingTop: 110,
    paddingBottom: 30,
    backgroundColor: '#D0C4F2',
    alignItems: 'center'
  },
  mediumContainer: {
    paddingTop: 40,
    backgroundColor: '#D0C4F2',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 20,
    backgroundColor: '#D0C4F2',
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
    color: '#201743'
  }
});

const trajeto = ({navigation}) => {
    const [selected, setSelected] = React.useState("");
    return (
      <View style={styles.page}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>
            trajeto
          </Text>
        </View>
      </View>
    );
  }
  
  export default trajeto;