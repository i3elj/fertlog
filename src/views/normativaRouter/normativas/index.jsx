import { Text, ScrollView, StyleSheet } from 'react-native'

import Lista from './lista'

import Header from '../../../globals/header'
import Line from '../../../globals/line'

export default function Normativas({ navigation }) {
    return <ScrollView contentContainerStyle={st.container}>
        <Header />
        <Line />
        <Lista navigation={navigation} />
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
})
