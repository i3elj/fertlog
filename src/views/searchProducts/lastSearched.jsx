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

export default function LastSearched() {
    return <View style={st.container}>
        <Text style={st.title}>Ultimos itens Pesquisados</Text>
        <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={st.scroll}
            >
                <TouchableOpacity style={st.item}></TouchableOpacity>
                <TouchableOpacity style={st.item}></TouchableOpacity>
                <TouchableOpacity style={st.item}></TouchableOpacity>
                <TouchableOpacity style={st.item}></TouchableOpacity>
            </ScrollView>
            <LinearGradient
                colors={['#fff', '#fff', 'rgba(0,0,0,0)']}
                start={{ x: 1, y: 1}}
                end={{ x: 0, y: 1 }}
                style={st.arrow}
            >
                <TouchableOpacity style={st.arrow}>
                    <ArrowRightIcon style={{right: 8}} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
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
        flexDirection: 'row',
        paddingRight: 60,
    },

    item: {
        width: 112,
        height: 112,
        marginRight: 16,
        borderRadius: 12,
        backgroundColor: Theme.light.gray1,
    },

    arrow: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 64,
        position: 'absolute',
        right: 0,
    },
})
