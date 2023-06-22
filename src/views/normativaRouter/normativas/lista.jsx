import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Item from './item'

import Theme from '../../../globals/style-guide'

export default function Lista({ navigation }) {
    return <View style={st.container}>
        <Text style={st.title}>Normativas</Text>
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
        <Item navigation={navigation} />
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
})
