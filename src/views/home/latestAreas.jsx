import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'

export default function LatestAreas() {
    return <View style={st.container}>
        <Text style={st.title}>Areas</Text>
        <View style={st.itemContainer}>
            <View style={st.item}></View>
            <View style={st.item}></View>
        </View>
    </View>
}

const st = StyleSheet.create({
    container: {
        gap: 10,
        padding: 20,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 26,
    },

    itemContainer: {
        flexDirection: 'column',
        gap: 10,
    },

    item: {
        height: 84,
        borderRadius: 8,
        backgroundColor: Theme.light.gray1,
    },
})
