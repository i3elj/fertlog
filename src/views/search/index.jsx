import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
 } from 'react-native'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'

import ListaUltimosItens from './listaUltimosItens'
import ListaNormativas from './listaNormativas'
import ListaAreas from './listaAreas'
import ListaInsumos from './listaInsumos'

export default function Pesquisa() {
    return <ScrollView>
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
