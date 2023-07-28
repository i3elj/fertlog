import { View, StyleSheet } from 'react-native'

import Theme from './src/globals/style-guide'

import SearchIcon from './src/globals/icons/search'
import LocationIcon from './src/globals/icons/locationIcon'
import LeafIcon from './src/globals/icons/leafIcon'
import ReportIcon from './src/globals/icons/reportIcon'
import HomeIcon from './src/globals/icons/homeIcon'

export default function tabBarIcon(focused, route) {
    switch (route.name) {
    case 'Home':
        return focused ?
            <View style={[st.routeButton, st.focusedRoute]}>
                <HomeIcon />
            </View>
        :
            <View style={st.routeButton}>
                <HomeIcon />
            </View>
    case 'AreaRouter':
        return focused ?
            <View style={[st.routeButton, st.focusedRoute]}>
                <LocationIcon />
            </View>
        :
            <View style={st.routeButton}>
                <LocationIcon />
            </View>
    case 'GlobalSearch':
        return focused ?
            <View style={[st.routeButton, st.focusedRoute]}>
                <SearchIcon />
            </View>
        :
            <View style={st.routeButton}>
                <SearchIcon />
            </View>
    case 'ProductsRouter':
        return focused ?
            <View style={[st.routeButton, st.focusedRoute]}>
                <LeafIcon />
            </View>
        :
            <View style={st.routeButton}>
                <LeafIcon />
            </View>
    case 'NormativaRouter':
        return focused ?
            <View style={[st.routeButton, st.focusedRoute]}>
                <ReportIcon />
            </View>
        :
            <View style={st.routeButton}>
                <ReportIcon />
            </View>
    }
}

const st = StyleSheet.create({
    routeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 62,
        width: 62,
        borderRadius: 10,
        backgroundColor: Theme.light.gray2,
    },

    focusedRoute: {
        top: -12,
        elevation: 8,
        backgroundColor: Theme.light.gray4,
    },
})
