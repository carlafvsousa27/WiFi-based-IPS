import React, { useEffect } from 'react';
import { getAllLocals, getRoutes } from './baseAPI';
import { View, StyleSheet, Button } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'


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
    marginTop: 95,
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
  const [number, onChangeNumber] = React.useState(null);
  const [selectedStart, setSelectedStart] = React.useState("");
  const [selectedFinish, setSelectedFinish] = React.useState("");
  const [locals, setLocals] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [image, setImage] = React.useState("");

  useEffect(() => {
    getAllLocals().then(response => setLocals(response))
  }, [])
  useEffect(() => {
    console.log(selectedStart, selectedFinish)
  }, [selectedStart, selectedFinish])

  const getTrajeto = () => {
    getRoutes({ start: selectedStart, finish: selectedFinish }).then(response => { setImage(response.image), setShow(true), document.getElementById("image").src = response.image });
  }

  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <View>
          <SelectList
            setSelected={setSelectedStart} data={locals}
            boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 300, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
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
            boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 300, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
            inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            save="value"
            placeholder="Destino?"
            dropdownStyles={{ backgroundColor: "#FFFFFF" }}
          />
        </View>
        <View style={{ paddingHorizontal: 150, paddingTop: 20, borderRadius: 4, alignItems: "left" }}>
          <Button
            onPress={getTrajeto}
            title="OK"
            color="#ED6F6F"
          />
        </View>
        <View style={{ marginTop: 20, width: 300, height: 440 }}>
          {show ?
            <img id='image'
              style={{ width: "100%", height: "100%", resizeMode: "cover", size: { width: 300, height: 440 } }}>
            </img>
            : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ paddingHorizontal: 110, borderRadius: 4, alignItems: "left" }}>
          <Button
            onPress={() => navigation.goBack()}
            title="Go back"
            color="#ED6F6F"
          />
        </View>
      </View>

    </View>
  );
}

export default Trajeto;