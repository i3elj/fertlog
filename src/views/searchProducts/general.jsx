import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Theme from '../../globals/style-guide'
import ArrowRightIcon from '../../globals/icons/arrowRight'

export default function General() {
    return <View style={st.container}>
        <Text style={st.title}>General</Text>
        <View style={st.scroll}>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
            <TouchableOpacity style={st.item}></TouchableOpacity>
        </View>
        <LinearGradient
            colors={['#fff', '#fff', 'rgba(0,0,0,0)']}
            start={{ x: 1, y: 1}}
            end={{ x: 1, y: 0 }}
            style={st.gradient}
        >
            <TouchableOpacity style={st.seeMoreButton}>
                <Text style={st.verMais}>Ver mais</Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
}

const st = StyleSheet.create({
    container: {
        padding: 20,
        gap: 32,
    },

    title: {
        fontSize: 20,
    },

    scroll: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },

    item: {
        width: 96,
        height: 96,
        borderRadius: 12,
        backgroundColor: Theme.light.gray1,
    },

    seeMoreButton: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '110%',
        height: 120,
    },

    verMais: {
        height: 40,
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        color: '#444444',
        borderColor: Theme.light.gray1,
        backgroundColor: Theme.light.gray2,
    },
})
