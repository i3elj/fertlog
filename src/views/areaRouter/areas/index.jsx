import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
 } from 'react-native'

import Theme from '../../../globals/style-guide'
import Line from '../../../globals/line'
import Header from '../../../globals/header'

import Lista from './lista'

export default function Areas({ navigation }) {
    return <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
        <Header />
        <Line />
        <Lista navigation={navigation} />
    </ScrollView>
}
