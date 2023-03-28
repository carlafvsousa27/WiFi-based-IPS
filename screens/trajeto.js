import React, { useEffect } from 'react';
import { getAllLocals, getRoutes } from './baseAPI';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { ScrollView } from 'react-native-web';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4B56D2',
    height: 844,
    width: 391
  },
  topContainer: {
    paddingTop: 70,
    paddingBottom: 5,
    alignItems: 'center'
  },
  mediumContainer: {
    height: 'auto',
    paddingTop: 5,
    alignItems: 'center'
  },
  bottomContainer: {
    marginTop: 15,
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
    width: 300,
    backgroundColor: "#D9D7F1",
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  trajeto: {
    width: 300,
    height: 200
  }
});


const Trajeto = ({ navigation }) => {
  const [selectedStart, setSelectedStart] = React.useState("");
  const [selectedFinish, setSelectedFinish] = React.useState("");
  const [locals, setLocals] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [position, setPosition] = React.useState([]);
  const [arrayPositions, setArrayPosition] = React.useState([])
  let index = 0;

  const getTrajeto = () => {
    getRoutes({ start: selectedStart, finish: selectedFinish }).then(response => { setImage(response.image), setShow(true), setArrayPosition(response.arrow) /*, document.getElementById("image").src = response.image */ });
  }

  useEffect(() => {
    getAllLocals().then(response => setLocals(response))
  }, [])
  useEffect(() => {
    console.log("trajeto: ", selectedStart, selectedFinish)
  }, [selectedStart, selectedFinish])

  useEffect(() => { console.log("imagem: ", image) }, [image])

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(arrayPositions[index]);
      index = (index + 1);
    }, 5000);
    if (index >= arrayPositions.length) {
      return () => clearInterval(interval);
    }
  }, [arrayPositions]);

  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <SelectList
          setSelected={setSelectedStart} data={locals}
          boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 320, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
          inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
          save="value"
          placeholder="Onde se encontra?"
          dropdownStyles={{ backgroundColor: "#FFFFFF" }}
        />
      </View>
      <View style={styles.mediumContainer}>
        <SelectList
          setSelected={setSelectedFinish} data={locals}
          boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 320, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
          inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
          save="value"
          placeholder="Destino?"
          dropdownStyles={{ backgroundColor: "#FFFFFF" }}
        />
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            onPress={getTrajeto}
            style={{ paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8, backgroundColor: '#ED6F6F', marginTop: 10 }}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
        {show ?
          <View
            horizontal={true}
            contentContainerStyle={{ width: 340, height: 520, overflow: "hidden", }}
          >
            <Image id='image' source={{ uri: image }}
              style={{ width: 340, height: 520, resizeMode: 'cover', position: 'relative' }} />
            {position && <Image
              source={require('../assets/seta-direita.png')} style={{ width: 30, height: 30, position: 'absolute', left: position.x, top: position.y }} />}
          </View>
          : null}
        <View style={styles.bottomContainer}>
          <View style={{ paddingHorizontal: 110, borderRadius: 4, alignItems: "left" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8, backgroundColor: '#ED6F6F' }}
            >
              <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Go back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Trajeto;