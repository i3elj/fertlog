import { Text, ScrollView, StyleSheet } from 'react-native'

import Lista from './lista'

import Header from '../../globals/header'
import Line from '../../globals/line'

export default function Normativas() {
    return <ScrollView contentContainerStyle={st.container}>
        <Header />
        <Line />
        <Lista />
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
})
