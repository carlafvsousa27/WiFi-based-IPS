import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'


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
    paddingTop: 70,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingTop: 20,
    backgroundColor: '#DFF6FF',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120
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

const selecaoHospital = ({navigation}) => {
  const [selected, setSelected] = React.useState("");
  const data = [{key:'2', value:'Porto'}, {key:'3', value:'Lisboa'}];
  const data2 = [{key:'4', value:'São João'}, {key:'5', value:'Santo António'}];

  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Text style={styles.baseText}>
          Selecione o hospital
        </Text>
      </View>
      <View style={{paddingHorizontal:30, paddingTop:30}}>
        <SelectList 
        setSelected={setSelected} data={data}
        defaultOption={{ key:'1', value:'Distrito' }} 
        boxStyles={{borderRadius:6, backgroundColor:"#6EC2F7"}}
        inputStyles={{color:"#001D6E", fontWeight: "bold"}}
        />
      </View>
      <View style={{paddingHorizontal:30, paddingTop:20}}>
        <SelectList 
        setSelected={setSelected} data={data2}
        defaultOption={{ key:'1', value:'Hospital' }} 
        boxStyles={{borderRadius:6, backgroundColor:"#6EC2F7"}}
        inputStyles={{color:"#001D6E", fontWeight: "bold"}}
        />
      </View>
      <View>
        <SafeAreaView>
          <View style={{paddingHorizontal:110, paddingTop:50, borderRadius:4 }}>
           <Button
            onPress={() => navigation.navigate('trajeto')}
            title="OK"
            color="#001D6E"
           />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.mediumContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/Wips4.png')}>
        </Image>
      </View>
    </View>
  );
}


export default selecaoHospital;