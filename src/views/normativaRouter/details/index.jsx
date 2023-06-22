import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Theme from '../../../globals/style-guide.js'
import LeftArrow from '../../../globals/icons/leftArrow'

export default function Details() {
    return <ScrollView contentContainerStyle={st.container}>
        <TouchableOpacity style={st.voltar}><LeftArrow /></TouchableOpacity>
        <View style={st.titleContainer}>
            <Text style={st.title}>DIRETRIZ 5.3.2</Text>
            <Text style={st.subTitle}>03/06/2023</Text>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.descricao}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
        <Text style={{fontWeight: 500}}>Válido a partir de 15/07/2023</Text>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Culturas afetadas</Text>
            <View style={st.sectionMain}>
                <View style={st.row}>
                    <Text style={st.rowTitle}>Uva</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={[st.row, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.rowTitle}>Melancia</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={st.row}>
                    <Text style={st.rowTitle}>Melão</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
            </View>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Produtos afetados</Text>
            <View style={st.sectionMain}>
                <View style={st.row}>
                    <Text style={st.rowTitle}>AgroBio 3</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={[st.row, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.rowTitle}>ZettaBeta Plus</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={st.row}>
                    <Text style={st.rowTitle}>F3C504</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={[st.row, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.rowTitle}>Pó de Rocha</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
            </View>
        </View>
        <View style={st.sectionContainer}>
            <Text style={st.sectionTitle}>Válido nos seguintes países</Text>
            <View style={st.sectionMain}>
                <View style={st.row}>
                    <Text style={st.rowTitle}>Brasil</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={[st.row, {backgroundColor: '#E6E6E6'}]}>
                    <Text style={st.rowTitle}>Canada</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
                <View style={st.row}>
                    <Text style={st.rowTitle}>Espanha</Text>
                    <Text style={st.rowValue}>Ver no pdf</Text>
                </View>
            </View>
        </View>
        <View style={[st.sectionContainer, {flexDirection: 'row'}]}>
            <View style={st.verPDF}>
                <Text style={st.verPDFText}>Ver PDF</Text>
            </View>
            <View style={st.baixarPDF}>
                <Text style={st.baixarPDFText}>Baixar PDF</Text>
            </View>
        </View>
    </ScrollView>
}

const st = StyleSheet.create({
    container: {
        paddingBottom: 120,
        padding: 20,
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

    titleContainer: {
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 26,
    },

    subTitle: {
        fontWeight: 300,
    },

    sectionTitle: {
        fontSize: 18,
    },

    sectionContainer: {
        gap: 8,
    },

    sectionMain: {
        borderRadius: 8,
        overflow: 'hidden',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Theme.light.gray1,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },

    rowTitle: {
        fontWeight: 300,
    },

    rowValue: {
        fontSize: 10,
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

    verPDF: {
        flex: 1,
        padding: 14,
        borderRadius: 8,
        backgroundColor: Theme.light.blue2,
    },

    verPDFText: {
        fontSize: 16,
    },

    baixarPDF: {
        flex: 1,
        padding: 14,
        borderRadius: 8,
        backgroundColor: Theme.light.green2,
    },

    baixarPDFText: {
        fontSize: 16,
    },
})
