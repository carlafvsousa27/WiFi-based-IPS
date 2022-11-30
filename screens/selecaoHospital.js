import React, { useEffect } from 'react';
import axios from 'axios';
import { getAllHospitals } from './baseAPI';
import { getAllDistricts } from './baseAPI';
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

const selecaoHospital = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const [hospitals, setHospitals] = React.useState([]);
  useEffect(() => {
    getAllHospitals().then(response => setHospitals(response))
  }, [])
  useEffect(() => {
    console.log(hospitals)
  }, [hospitals])

  const [districts, setDistricts] = React.useState([]);
  useEffect(() => {
    getAllDistricts().then(response => setDistricts(response))
  }, [])
  useEffect(() => {
    console.log(districts)
  }, [districts])




  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Text style={styles.baseText}>
          Selecione o hospital
        </Text>
      </View>
      <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
        <SelectList
          setSelected={setSelected} data={districts}
          defaultOption={{ key: '1', value: 'Distrito' }}
          boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7" }}
          inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
        />
      </View>
      <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
        <SelectList
          setSelected={setSelected} data={hospitals}
          defaultOption={{ key: '1', value: 'Hospital' }}
          boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7" }}
          inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
        />
      </View>
      <View>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 110, paddingTop: 50, borderRadius: 4 }}>
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