import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'

export default function ListaUltimasPesquisas() {
    return <>
        <View style={st.style}>
            <Text>zetta beta max</Text>
        </View>
        <View style={st.style}>
            <Text>AgroBio 3</Text>
        </View>
        <View style={st.style}>
            <Text>Zapper Plus 2</Text>
        </View>
        <View style={st.style}>
            <Text>F35C04</Text>
        </View>
    </>
}

const st = StyleSheet.create({
    style: {
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: Theme.light.gray1
    }
})
