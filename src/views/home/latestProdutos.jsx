import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Item from '../productsRouter/products/item'

import Theme from '../../globals/style-guide'

export default function LatestProdutos() {
    return <View style={st.container}>
        <Text style={st.title}>Produtos</Text>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.itemContainer}
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </ScrollView>
    </View>
}

const st = StyleSheet.create({
    container: {
        paddingVertical: 20,
        gap: 10,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 26,
        paddingLeft: 20,
    },

    itemContainer: {
        paddingLeft: 20,
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
