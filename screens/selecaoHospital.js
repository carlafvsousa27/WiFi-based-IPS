import React, { useEffect, useState } from 'react';
import { getAllHospitals } from './baseAPI';
import { getAllDistricts } from './baseAPI';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import ImageMapper from 'react-native-image-mapper';
import SelectList from 'react-native-dropdown-select-list';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    height: 844,
    backgroundColor: "#FFFFFF"
  },
  topContainer: {
    paddingBottom: 10,
    paddingTop: 7,
    paddingLeft: 24
  },
  bottomContainer: {
    paddingBottom: 35,
    alignItems: 'center'
  },
  baseText: {
    fontSize: 26,
    color: '#001D6E'
  },
  titleText: {
    paddingTop: 30,
    fontSize: 32,
    xHeight: 48,
    color: '#001253'
  },
  secondTitleText: {
    fontSize: 27,
    fontWeight: 'bold',
    xHeight: 48,
    color: '#4B56D2'
  },
  Text: {
    fontSize: 16,
    paddigLeft: 20,
    alignItems: 'center',
    color: "#001253",
    paddingBottom: 20,
    xHeight: 5
  },
  menu: {
    paddingTop: 65,
    paddingLeft: 250,
    width: 390,
    height: 100,
    flexDirection: "row"
  },
  icons: {
    paddingRight: 12,
    alignItems: "center"
  }
});

const SelecaoHospital = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const [hospitals, setHospitals] = React.useState([]);
  useEffect(() => {
    getAllHospitals().then(response => setHospitals(response))
  }, [])


  const [districts, setDistricts] = React.useState([]);
  useEffect(() => {
    getAllDistricts().then(response => setDistricts(response))
  }, [])

  const [selectedArea, setSelectedArea] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState(null);


  return (
    <View style={styles.page}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.icons}>
          <Image
            source={require('../assets/locationBlue.png')}
            style={{ padding: 5, width: 24, height: 24 }}
          />
          <Text style={{ color: "#001253", borderBottomWidth: 3, borderColor: "#001253" }}>
            Distrito
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('tabBarHospitais')}>
          <Image
            source={require('../assets/menuGrey.png')}
            style={{ padding: 5, width: 24, height: 24 }}
          />
          <Text style={{ color: "#B2B2B2" }}>
            Hospitais
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>
          Selecione o
        </Text>
        <Text style={styles.secondTitleText}>
          Distrito
        </Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior='always'>
        <View style={{ height: height * 0.75, marginBottom: 90 }}>
          <ImageMapper
            imgHeight={440}
            imgWidth={240}
            imgSource={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Mapa_de_Portugal_-_Distritos_plain.png',
            }}
            imgMap={districts}
            onPress={(item, idx, event) => {
              setSelectedArea(item.name), setSelectedAreaId(item.id);
            }}
            containerStyle={{ alignItems: 'center', paddingTop: 15, paddingBottom: 10 }}
            selectedAreaId={selectedAreaId}
          />
          <View style={styles.bottomContainer}>
            {selectedArea ?
              <View style={{
                backgroundColor: "#ED6F6F", width: 340, height: 140, borderRadius: 8,
              }}>
                <Text style={{ color: "#FFFFFF", fontSize: 20, marginLeft: 15, fontWeight: 'bold', marginTop: 15 }}>
                  {selectedArea}
                </Text>
                <SelectList
                  setSelected={setHospitals} data={hospitals}
                  boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 300, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
                  inputStyles={{ color: "#001D6E", fontWeight: "bold", backgroundColor: "#FFFFFF" }}
                  save="value"
                  placeholder="Selecione o hospital"
                  dropdownStyles={{ backgroundColor: "#FFFFFF" }}
                />
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('trajeto')}>
                    <Image
                      source={require('../assets/continuar.png')}
                      style={{ width: 45, height: 45, marginBottom: 5 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              : <>
                <Text style={styles.Text}>
                  Selecione no mapa o distrito do
                </Text>
                <Text style={styles.Text}>
                  hospital que irá visitar
                </Text>
              </>}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


export default SelecaoHospital;