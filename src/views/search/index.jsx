import {
    View,
    ScrollView,
    StatusBar,
    StyleSheet,
 } from 'react-native'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'

import ListaUltimosItens from './listaUltimosItens'
import ListaNormativas from './listaNormativas'
import ListaAreas from './listaAreas'
import ListaInsumos from './listaInsumos'

export default function GlobalSearch() {
    return <ScrollView contentContainerStyle={st.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Header />
        <View style={{
            marginHorizontal: 20,
            borderBottomWidth: 3,
            borderColor: Theme.light.gray2
        }} />
        <ListaUltimosItens />
        <ListaNormativas />
        <ListaInsumos />
        <ListaAreas />
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        paddingBottom: 100,
        backgroundColor: '#fff',
    },
})
