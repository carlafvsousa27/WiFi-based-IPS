import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'


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
  },
  dropDown: {
    width: 100,
    color: '#C4DDFF'
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
      <View>
        <SelectList 
        style={styles.dropDown}
        setSelected={setSelected} data={data}
        defaultOption={{ key:'1', value:'Distrito' }} 
        />
      </View>
      <View>
        <SelectList 
        style={styles.dropDown}
        setSelected={setSelected} data={data2}
        defaultOption={{ key:'1', value:'Hospital' }} 
        />
      </View>
      <View>
        <SafeAreaView>
          <View>
           <Button 
            onPress={() => navigation.navigate('selecaoHospital')}
            title="OK"
            color="#001D6E"
           />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}


export default selecaoHospital;