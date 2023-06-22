import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Theme from './src/globals/style-guide'
import SearchIcon from './src/globals/icons/search'
import LocationIcon from './src/globals/icons/locationIcon'
import LeafIcon from './src/globals/icons/leafIcon'
import ReportIcon from './src/globals/icons/reportIcon'
import HomeIcon from './src/globals/icons/homeIcon'

import GlobalSearch from './src/views/search'
import ProductsRouter from './src/views/productsRouter'
import AreaRouter from './src/views/areaRouter'
import NormativaRouter from './src/views/normativaRouter'
import Home from './src/views/home'

const Tab = createBottomTabNavigator()

export default function App() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: st.bar,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
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
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AreaRouter" component={AreaRouter} />
            <Tab.Screen name="GlobalSearch" component={GlobalSearch} />
            <Tab.Screen name="ProductsRouter" component={ProductsRouter} />
            <Tab.Screen name="NormativaRouter" component={NormativaRouter} />
        </Tab.Navigator>
    </NavigationContainer>
}

const st = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        bottom: 20,
        height: 80,
        marginHorizontal: 20,
        borderRadius: 16,
        position: 'absolute',
        backgroundColor: Theme.light.green1,
    },

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
