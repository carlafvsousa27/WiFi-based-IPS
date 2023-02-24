import React, { useEffect } from 'react';
import { getAllLocals, getRoutes } from './baseAPI';
import { View, StyleSheet, TouchableOpacity, Image, Text, useWindowDimensions, ScrollView } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4B56D2',
    height: 844,
    width: 391
  },
  topContainer: {
    paddingTop: 50,
    paddingBottom: 5,
    alignItems: 'center'
  },
  mediumContainer: {
    height: 500,
    paddingTop: 10,
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
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    getAllLocals().then(response => setLocals(response))
  }, [])
  useEffect(() => {
    console.log(selectedStart, selectedFinish)
  }, [selectedStart, selectedFinish])

  useEffect(() => { console.log(image) }, [image])

  const getTrajeto = () => {
    getRoutes({ start: selectedStart, finish: selectedFinish }).then(response => { setImage(response.image), setShow(true) /*, document.getElementById("image").src = response.image */ });
  }

  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <View>
          <SelectList
            setSelected={setSelectedStart} data={locals}
            boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 320, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
            inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            save="value"
            placeholder="Onde se encontra?"
            dropdownStyles={{ backgroundColor: "#FFFFFF" }}
          />
        </View>
      </View>
      <View style={styles.mediumContainer}>
        <View>
          <SelectList
            setSelected={setSelectedFinish} data={locals}
            boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 320, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
            inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            save="value"
            placeholder="Destino?"
            dropdownStyles={{ backgroundColor: "#FFFFFF" }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={getTrajeto}
            style={{ paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8, backgroundColor: '#ED6F6F', marginTop: 7 }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          {show ?
            <Image id='image' source={{ uri: image }}
              style={{ width: 340, height: 520, overflow: "hidden" }}>
            </Image>
            : null}
        </View>
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