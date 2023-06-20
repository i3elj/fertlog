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

import LastSearched from './lastSearched'
import Highlights from './highlights'
import General from './general'
import Recents from './recents'

export default function SearchProducts() {
    return <>
        <TouchableOpacity style={st.searchButton}>
            <SearchIcon />
        </TouchableOpacity>
        <ScrollView>
            <Header />
            <Line />
            <LastSearched />
            <General />
            <Highlights />
            <Recents />
        </ScrollView>
    </>
}

const st = StyleSheet.create({
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        position: 'absolute',
        bottom: 40,
        right: 40,
        zIndex: 1,
        elevation: 10,
        borderRadius: 20,
        backgroundColor: Theme.light.green1,
    },
})