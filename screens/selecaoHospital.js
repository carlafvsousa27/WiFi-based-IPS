import React, { useEffect, useState } from 'react';
import { getAllHospitals } from './baseAPI';
import { getAllDistricts } from './baseAPI';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import ImageMapper from 'react-native-image-mapper';



const styles = StyleSheet.create({
  page: {
    height: 844,
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  topContainer: {
    paddingBottom: 10,
    top: 50,
    left: 7
  },
  bottomContainer: {
    paddingBottom: 25,
    alignItems: 'center'
  },
  baseText: {
    fontSize: 26,
    color: '#001D6E'
  },
  titleText: {
    top: 30,
    left: 30,
    fontSize: 32,
    xHeight: 48,
    color: '#001253',
    paddingLeft: 20
  },
  secondTitleText: {
    top: 114,
    left: 30,
    fontSize: 30,
    fontWeight: 'bold',
    xHeight: 48,
    color: '#332FD0',
    paddingLeft: 20
  },
  Text: {
    fontSize: 18,
    alignItems: 'center',
    color: "#001253"
  },
  menu: {
    top: 50,
    left: 260,
    width: 108,
    height: 48,
    flexDirection: "row",
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
        <TouchableOpacity style={styles.icons} onPress={() => { navigation.navigate('tabBarHospitais'), console.log("ola") }}>
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
        containerStyle={{ alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}
        selectedAreaId={selectedAreaId}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.Text}>
          Selecione no mapa o distrito do hospital
        </Text>
        <Text style={styles.Text}>
          que irá visitar
        </Text>
        <Button
          onPress={() => navigation.navigate('trajeto')}
          title="Continuar"
          color="#001D6E"
        />
      </View>
    </View>
  );
}


export default SelecaoHospital;