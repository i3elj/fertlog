import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Theme from '../../../globals/style-guide'

export default function Item({ navigation }) {
    return <TouchableOpacity
        onPress={() => navigation.navigate('ProductsDetails')} style={st.item}
        >
        <Image
            style={st.image}
            source={require('../../../../assets/product.png')}
        />
        <LinearGradient
            colors={[Theme.light.gray2, Theme.light.gray2, 'rgba(0,0,0,0)']}
            start={{ x: 0, y: 1}}
            end={{x: 0, y: 0.5}}
            style={st.gradient}
        >
        </LinearGradient>
        <Text style={st.name}>Pó de Rocha</Text>
    </TouchableOpacity>
}

const st = StyleSheet.create({
    item: {
        alignItems: 'center',
        width: 110,
        height: 110,
        borderRadius: 12,
        backgroundColor: Theme.light.gray1,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    name: {
        position: 'absolute',
        fontSize: 12,
        bottom: 7,
    },
})
