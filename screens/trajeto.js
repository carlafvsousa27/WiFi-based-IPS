import React, { useEffect } from 'react';
import { getAllLocals, getRoutes } from './baseAPI';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'



const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    height: 667,
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
    paddingTop: 10,
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
            boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7", height: 35, width: 300, alignItems: 'left', paddingHorizontal: 10, paddingVertical: 5 }}
            inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            save="value"
            placeholder="Onde se encontra?"
          />
        </View>
      </View>
      <View style={styles.mediumContainer}>
        <View>
          <SelectList
            setSelected={setSelectedFinish} data={locals}
            boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7", height: 35, width: 300, alignItems: 'left', paddingHorizontal: 10, paddingVertical: 5 }}
            inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            save="value"
            placeholder="Destino?"
          />
        </View>
        <View style={{ paddingHorizontal: 150, paddingTop: 20, borderRadius: 4, alignItems: "left" }}>
          <Button
            onPress={getTrajeto}
            title="OK"
            color="#001D6E"
          />
        </View>
        {show ? /* <Image
          style={styles.trajeto}
          source={require(image)}
        /> */
          <img id='image'>
          </img>
          : null}
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ paddingHorizontal: 110, borderRadius: 4, alignItems: "left" }}>
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

export default Trajeto;