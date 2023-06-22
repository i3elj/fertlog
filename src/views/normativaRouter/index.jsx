import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import Normativas from './normativas'
import Details from './details'

const Stack = createNativeStackNavigator();

export default function NormativaRouter() {
    return <NavigationContainer independent={true} >
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Normativas" component={Normativas} />
            <Stack.Screen name="NormativasDetails" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}
