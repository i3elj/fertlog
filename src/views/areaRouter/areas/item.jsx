import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Theme from '../../globals/style-guide'

export default function Item() {
    return <TouchableOpacity style={st.container}>
        <Image style={st.image} source={require('../../../assets/map.png')} />
        <View style={st.degrade}></View>
        <LinearGradient
            colors={[Theme.light.gray1, Theme.light.gray1, 'rgba(0,0,0,0)']}
            start={{ x: 1.7, y: 0}}
            end={{ x: -0.01, y: 0 }}
            style={st.gradient}
        >
        </LinearGradient>
        <View style={st.info}>
            <View style={st.titleContainer}>
                <Text style={st.title}>Área B</Text>
                <Text style={st.distance}> - 234 km²</Text>
            </View>
            <View style={st.culturasContainer}>
                <Text style={st.culturasTitle}>Culturas: </Text>
                <Text style={st.culturas}>Uva, Manga, Melão</Text>
            </View>
            <Text style={st.descricao} numberOfLines={2} ellipsizeMode="tail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
            </Text>
            </View>
    </TouchableOpacity>
}

const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Theme.light.gray1
    },

    image: {
        height: 'auto',
        objectFit: 'cover',
        width: 128,
        left: -8,
    },

    gradient: {
        position: 'absolute',
        height: '100%',
        width: 128,
    },

    info: {
        paddingVertical: 18,
        flex: 1,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    title: {
        fontSize: 18,
    },

    distance: {
        fontWeight: 300,
    },

    culturasContainer: {
        flexDirection: 'row',
    },

    culturas: {
        fontWeight: 300,
    },

    descricao: {
        fontSize: 12,
        fontWeight: 300,
        // width: 300,
    },
})
