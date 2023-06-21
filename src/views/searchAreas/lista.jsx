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
        paddingBottom: 120,
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
})
