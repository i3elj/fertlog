import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import Areas from './areas'
import Details from './details'

const Stack = createNativeStackNavigator();

export default function AreaRouter() {
    return <NavigationContainer independent={true} >
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Areas" component={Areas} />
            <Stack.Screen name="AreasDetails" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}
