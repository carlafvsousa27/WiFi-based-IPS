import React, { useEffect } from 'react';
import { getAllDistritos } from './baseAPI'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const styles = StyleSheet.create({
    page: {
        height: 844,
        backgroundColor: "#FFFFFF"
    },
    menu: {
        top: 30,
        left: 260,
        width: 108,
        height: 48,
        flexDirection: "row",
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
        paddingLeft: 30,
        fontSize: 32,
        xHeight: 48,
        color: '#001253',
        paddingTop: 30
    }
});



const TabBarHospitais = ({ navigation }) => {
    const [Distritos, setDistritos] = React.useState([]);

    useEffect(() => {
        getAllDistritos().then(response => setDistritos(response))
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
            <View>
                <Text style={styles.titleText}>
                    Selecione o Distrito
                </Text>
            </View>
            <View style={styles.dropDown}>
                <SelectList
                    setSelected={setDistritos} data={Distritos}
                    boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7", height: 35, width: 300, alignItems: 'left', paddingHorizontal: 10, paddingVertical: 5, opacity: 1 }}
                    inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
                    save="value"
                    placeholder="Selecione o distrito"
                />
            </View>
        </View>
    );
}


export default TabBarHospitais;