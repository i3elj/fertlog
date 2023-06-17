import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from './style-guide'
import AppTitle from './AppTitle'
import SearchIcon from './icons/search'

import ListaUltimasPesquisas from './ultimasPesquisas'

export default function Header() {
    return <View style={st.container} >
        <View style={st.searchContainer}>
            <View style={st.searchButton}>
                <SearchIcon />
            </View>
            <AppTitle fontSize={40} />
        </View>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.scroll}
        >
            <ListaUltimasPesquisas />
        </ScrollView>
    </View>
}

const st = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 28,
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    searchButton: {
        width: 60,
        height: 60,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.light.gray2,
    },

    scroll: {
        gap: 14,
    }
})
