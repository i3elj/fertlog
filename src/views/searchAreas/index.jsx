import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
 } from 'react-native'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'

import Lista from './lista'

export default function SearchAreas() {
    return <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Header />
        <View style={{
            marginHorizontal: 20,
            borderBottomWidth: 3,
            borderColor: Theme.light.gray2
        }} />
        <Lista />
    </ScrollView>
}
