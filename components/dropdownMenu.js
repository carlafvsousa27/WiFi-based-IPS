import React from 'react';
import { View } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const styles = StyleSheet.create({
    outputContainer: {
        height: 35,
        width: 300,
        backgroundColor: "#D9D7F1",
        alignItems: 'left',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});

const DropdownMenu = ({ data }) => {
    const [selected, setSelected] = React.useState("");

    return (

        <View>
            <SelectList
                setSelected={setSelected} data={data}
                defaultOption={{ key: '1', value: 'Destino?' }}
                boxStyles={{ borderRadius: 6, backgroundColor: "#6EC2F7" }}
                inputStyles={{ color: "#001D6E", fontWeight: "bold" }}
            />
        </View>


    );
}

export default DropdownMenu;