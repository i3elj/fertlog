import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'

export default function LatestNormativas() {
    return <View style={st.container}>
        <Text style={st.title}>Normativas</Text>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.itemContainer}
        >
            <View style={st.item}></View>
            <View style={st.item}></View>
            <View style={st.item}></View>
            <View style={st.item}></View>
            <View style={st.item}></View>
            <View style={st.item}></View>
            <View style={st.item}></View>
        </ScrollView>
    </View>
}

const st = StyleSheet.create({
    container: {
        gap: 10,
        paddingLeft: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 26,
    },

    itemContainer: {
        flexDirection: 'row',
        gap: 10,
        paddingRight: 20,
    },

    item: {
        height: 84,
        width: 84,
        borderRadius: 8,
        backgroundColor: Theme.light.gray1,
    },
})
