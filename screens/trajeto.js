import React from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput  } from 'react-native';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#DFF6FF',
    height: 667,
  },
  topContainer: {
    paddingTop: 50,
    paddingBottom: 5,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  mediumContainer: {
    height: 500,
    paddingTop: 10,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 10,
    backgroundColor: '#DFF6FF',
  },
  logo: {
    width: 200,
    height: 200
  },
  baseText: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#201743',
    textAlignVertical: 'auto',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 15,
    color: '#201743',
    alignItems: 'center'
  },
  outputContainer: {
    height: 35,
    width: 300,
    backgroundColor: "#D9D7F1",
    alignItems: 'left',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  input: {
    height: 35,
    width:300,
    backgroundColor: "#D9D7F1",
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

});

const trajeto = ({navigation}) => {
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.page}>
            <View style={styles.topContainer}>
                <View style={styles.outputContainer}>
                    <Text style={styles.baseText}>
                        Localização atual
                    </Text>
                </View>
            </View>
            <View style={styles.mediumContainer}>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Destino?"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{paddingHorizontal:110, borderRadius:4, alignItems: "left" }}>
                    <Button
                        onPress={() => navigation.goBack()}
                        title="Go back"
                        color="#001D6E"
                    />
                </View>
            </View>
    
        </View>
    );
  }
  
  export default trajeto;