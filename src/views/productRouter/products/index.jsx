import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
 } from 'react-native'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'
import Line from '../../globals/line'
import SearchIcon from '../../globals/icons/search'

import Item from './item'

// <TouchableOpacity style={st.searchButton}>
//     <SearchIcon />
// </TouchableOpacity>

export default function Products() {
    return <>
        <ScrollView contentContainerStyle={st.container}>
            <Header />
            <Line />
             <View style={st.main}>
                <Text style={st.title}>Produtos</Text>
                <View style={st.scroll}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </View>
        </View>
        </ScrollView>
    </>
}

const st = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingBottom: 100,
    },

    main: {
        padding: 20,
        gap: 10,
    },

    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        position: 'absolute',
        bottom: 120,
        right: 40,
        zIndex: 1,
        elevation: 10,
        borderRadius: 20,
        backgroundColor: Theme.light.green1,
    },

    title: {
        fontSize: 20,
    },

    scroll: {
        gap: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    seeMoreButton: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '110%',
        height: 120,
    },

    verMais: {
        height: 40,
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        color: '#444444',
        borderColor: Theme.light.gray1,
        backgroundColor: Theme.light.gray2,
    },
})
