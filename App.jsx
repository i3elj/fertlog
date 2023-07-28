import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Theme from './src/globals/style-guide'

import GlobalSearch from './src/views/search'
import ProductsRouter from './src/views/productsRouter'
import AreaRouter from './src/views/areaRouter'
import NormativaRouter from './src/views/normativaRouter'
import Home from './src/views/home'
import tabBarIcon from './tabBarIconFunc'

const Tab = createBottomTabNavigator()

export default function App() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    flexDirection: 'row',
                    bottom: 20,
                    height: 80,
                    marginHorizontal: 20,
                    borderRadius: 16,
                    position: 'absolute',
                    backgroundColor: Theme.light.green1,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => tabBarIcon(focused, route),
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
