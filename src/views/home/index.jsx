import { View, Text, ScrollView, StyleSheet } from 'react-native'

import News from './news'
import LatestNormativas from './latestNormativas'
import LatestAreas from './latestAreas'
import LatestProdutos from './latestProdutos'

import ScrollBack from '../../globals/scrollBack'
import Header from '../../globals/header'
import Line from '../../globals/line'

export default function Home() {
    return <ScrollView contentContainerStyle={st.container}>
        <Header />
        <Line />
        <News />
        <LatestNormativas />
        <LatestAreas />
        <LatestProdutos />
        <ScrollBack />
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        paddingBottom: 120,
        backgroundColor: '#fff',
    },
})
