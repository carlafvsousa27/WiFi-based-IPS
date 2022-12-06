import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllHospitals } from './baseAPI';
import { getAllDistricts } from './baseAPI';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native';
import ImageMapper from 'react-native-image-mapper';
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

  const [selectedArea, setSelectedArea] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState(null);

  useEffect(() => {
    console.log(selectedArea);
    console.log(screen.width);
  }, [selectedArea]);



  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Text style={styles.baseText}>
          Selecione o hospital
        </Text>
      </View>
      <ImageMapper
        imgHeight={450}
        imgWidth={200}
        imgSource={{
          uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/4720190-portugal-map-on-white-background-gratis-vetor.jpg',
        }}
        imgMap={districts}
        onPress={(item, idx, event) => {
          setSelectedArea(item.name), setSelectedAreaId(item.id);
        }}
        containerStyle={{ top: 10, alignItems: 'center' }}
        selectedAreaId={selectedAreaId}
      />
      <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
        <SelectList
          setSelected={setSelected} data={hospitals}
          defaultOption={{ key: '1', value: 'Hospital' }}
          boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7" }}
          inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('trajeto')}
        title="Continuar"
        color="#001D6E"
      />
    </View>
  );
}


export default selecaoHospital;