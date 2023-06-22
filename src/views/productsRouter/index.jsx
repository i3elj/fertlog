import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import Products from './products'
import Details from './details'

const Stack = createNativeStackNavigator();

export default function ProductRouter() {
    return <NavigationContainer independent={true} >
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ProductsDetails" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}
