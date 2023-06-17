import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Theme from '../../globals/style-guide'

import Add from './add'

export default function Lista() {
    return <View style={st.container}>
        <Text style={st.title}>Minhas Areas</Text>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <TouchableOpacity style={st.item}></TouchableOpacity>
        <Add />
    </View>
}

const st = StyleSheet.create({
    container: {
        gap: 20,
        padding: 20,
    },

    title: {
        fontSize: 20,
    },

    item: {
        width: '100%',
        height: 100,
        borderRadius: 20,
        backgroundColor: Theme.light.gray1
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 20,
        height: 110,
        width: '100%',
    },

    verMais: {
        height: 40,
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        color: '#444444',
        borderColor: Theme.light.gray1,
        backgroundColor: Theme.light.gray2,
    },
})
