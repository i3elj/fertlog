import { TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from './style-guide'

export default function ListaUltimasPesquisas() {
    return <>
        <TouchableOpacity style={st.style}>
            <Text>zetta beta max</Text>
        </TouchableOpacity>
        <TouchableOpacity style={st.style}>
            <Text>AgroBio 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={st.style}>
            <Text>Zapper Plus 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={st.style}>
            <Text>F35C04</Text>
        </TouchableOpacity>
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
