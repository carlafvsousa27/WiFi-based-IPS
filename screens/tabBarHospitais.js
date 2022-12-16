import React, { useEffect } from 'react';
import { getAllHospitals } from './baseAPI'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const styles = StyleSheet.create({
    page: {
        height: 844,
        backgroundColor: "#FFFFFF"
    },
    menu: {
        paddingTop: 55,
        paddingLeft: 250,
        width: 390,
        height: 100,
        flexDirection: "row"
    },
    icons: {
        paddingRight: 12,
        alignItems: "center"
    },
    dropDown: {
        paddingTop: 100,
        alignItems: "center"
    },
    titleText: {
        paddingTop: 30,
        fontSize: 32,
        xHeight: 48,
        color: '#001253'
    },
    topContainer: {
        paddingBottom: 10,
        paddingTop: 7,
        paddingLeft: 24
    },
    secondTitleText: {
        fontSize: 27,
        fontWeight: 'bold',
        xHeight: 48,
        color: '#4B56D2'
    }
});



const TabBarHospitais = ({ navigation }) => {
    const [hospitals, setHospitals] = React.useState([]);

    useEffect(() => {
        getAllHospitals().then(response => setHospitals(response))
    }, [])


    return (
        <View style={styles.page}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('selecaoHospital')}>
                    <Image
                        source={require('../assets/locationGrey.png')}
                        style={{ padding: 5, width: 24, height: 24 }}
                    />
                    <Text style={{ color: "#B2B2B2" }}>
                        Distrito
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <Image
                        source={require('../assets/menuBlue.png')}
                        style={{ padding: 5, width: 24, height: 24 }}
                    />
                    <Text style={{ color: "#001253", borderBottomWidth: 3, borderColor: "#001253" }}>
                        Hospitais
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>
                    Selecione o
                </Text>
                <Text style={styles.secondTitleText}>
                    Hospital
                </Text>
            </View>
            <View style={styles.dropDown}>
                <SelectList
                    setSelected={setHospitals} data={hospitals}
                    boxStyles={{ borderRadius: 6, backgroundColor: "#FFFFFF", height: 40, width: 300, alignItems: 'center', marginHorizontal: 10, marginVertical: 5, opacity: 1 }}
                    inputStyles={{ color: "#001D6E", fontWeight: "bold", backgroundColor: "#FFFFFF" }}
                    save="value"
                    placeholder="Selecione o hospital"
                    dropdownStyles={{ backgroundColor: "#FFFFFF" }}
                />

                <Button
                    onPress={() => navigation.navigate('trajeto')}
                    title="Continuar"
                    color="#ED6F6F"
                />
            </View>
        </View>
    );
}


export default TabBarHospitais;