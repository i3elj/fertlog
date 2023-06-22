import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Theme from '../../../globals/style-guide.js'
import LeftArrow from '../../../globals/icons/leftArrow'

export default function Details() {
    return <ScrollView contentContainerStyle={st.container}>
        <TouchableOpacity style={st.voltar}><LeftArrow /></TouchableOpacity>
        <Image
            style={st.image}
            source={require('../../../../assets/map.png')}
        />
        <LinearGradient
            colors={['#fff', 'rgba(0,0,0,0)']}
            start={{ x: 0, y: 1}}
            end={{ x: 0, y: 0 }}
            style={st.gradient}
        >
        </LinearGradient>
        <View style={st.titleContainer}>
            <Text style={st.title}>Área B</Text>
            <Text style={st.subTitle}>20ha</Text>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Informações</Text>
            <View style={st.info}>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Extensão:</Text>
                    <Text style={st.infoRowValue}>20 hectáres</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Grupo:</Text>
                    <Text style={st.infoRowValue}>3B-2</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Local:</Text>
                    <Text style={st.infoRowValue}>Fazenda Nova Sol</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Tipo do Solo:</Text>
                    <Text style={st.infoRowValue}>Poroso</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Ph médio:</Text>
                    <Text style={st.infoRowValue}>7</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Umidade média da área:</Text>
                    <Text style={st.infoRowValue}>40%</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Cultura(s):</Text>
                    <Text style={st.infoRowValue}>Manga</Text>
                </View>
            </View>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Produtos em Uso</Text>
            <View style={st.info}>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Pó de Rocha</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Zetta beta max</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>AgroBio 3</Text>
                </View>
            </View>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Descrição</Text>
            <Text style={st.descricao}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        paddingBottom: 100,
        gap: 20,
        backgroundColor: '#fff',
    },

    voltar: {
        position: 'absolute',
        zIndex: 1,
        left: 20,
        top: 20,
        alignItems: 'center',
        width: 40,
        paddingVertical: 4,
        borderRadius: 20,
        backgroundColor: Theme.light.gray1,
    },

    image: {
        padding: 0,
        margin: 0,
        left: -40,
        objectFit: 'cover',
        width: '120%',
        height: 341,
    },

    gradient: {
        position: 'absolute',
        width: '100%',
        height: 341,
    },

    titleContainer: {
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 300,
    },

    subTitle: {
        fontWeight: 300,
    },

    sectionTitle: {
        fontSize: 18,
    },

    sectionContainer: {
        gap: 8,
        paddingHorizontal: 20,
    },

    info: {
        borderRadius: 8,
        overflow: 'hidden',
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Theme.light.gray1,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },

    infoRowTitle: {
        fontSize: 14,
    },

    infoRowValue: {
        fontSize: 12,
        fontWeight: 300,
    },

    diretrizes: {
        flexDirection: 'row',
        gap: 10,
    },

    diretriz: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20,
        backgroundColor: Theme.light.gray1
    },

    descricao: {
       textAlign: 'justify',
       fontSize: 14,
       fontWeight: 300,
    },
})
