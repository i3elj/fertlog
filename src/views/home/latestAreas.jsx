import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Item from '../areaRouter/areas/item'

import Theme from '../../globals/style-guide'

export default function LatestAreas() {
    return <View style={st.container}>
        <Text style={st.title}>Areas</Text>
        <View style={st.itemContainer}>
            <Item />
            <Item />
            <Item />
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
