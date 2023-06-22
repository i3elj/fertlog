import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import Theme from '../../../globals/style-guide.js'
import LeftArrow from '../../../globals/icons/leftArrow'

export default function Details() {
    return <ScrollView contentContainerStyle={st.container}>
        <TouchableOpacity style={st.voltar}><LeftArrow /></TouchableOpacity>
        <Image
            style={st.image}
            source={require('../../../../assets/product.png')}
        />
        <Text style={st.title}>Pó de Rocha</Text>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Informações</Text>
            <View style={st.info}>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Empresa:</Text>
                    <Text style={st.infoRowValue}>AgroPodas</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Tipo:</Text>
                    <Text style={st.infoRowValue}>Adubo</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Selos Organicos:</Text>
                    <Text style={st.infoRowValue}>USDA, BR</Text>
                </View>
                <View style={[st.infoRow, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.infoRowTitle}>Data:</Text>
                    <Text style={st.infoRowValue}>19/06/2002</Text>
                </View>
                <View style={st.infoRow}>
                    <Text style={st.infoRowTitle}>Culturas:</Text>
                    <Text style={st.infoRowValue}>Uva, Manga</Text>
                </View>
            </View>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Diretrizes Recentes</Text>
            <View style={st.diretrizes}>
                <View style={st.diretriz}>
                    <Text style={st.diretrizesRowTitle}>5.3.2</Text>
                </View>
                <View style={st.diretriz}>
                    <Text style={st.diretrizesRowTitle}>5.1.2</Text>
                </View>
                <View style={st.diretriz}>
                    <Text style={st.diretrizesRowTitle}>4.3.0</Text>
                </View>
                <View style={st.diretriz}>
                    <Text style={st.diretrizesRowValue}>4.0.5</Text>
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
        padding: 20,
        paddingBottom: 100,
        gap: 20,
        backgroundColor: '#fff',
    },

    voltar: {
        alignItems: 'center',
        width: 40,
        paddingVertical: 4,
        borderRadius: 20,
        backgroundColor: Theme.light.gray1,
    },

    image: {
        objectFit: 'contain',
        height: 260,
        width: '100%',
    },

    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 300,
    },

    sectionTitle: {
        fontSize: 18,
    },

    sectionContainer: {
        gap: 8,
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
