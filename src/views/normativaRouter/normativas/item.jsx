import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Theme from '../../../globals/style-guide'
import ReportIcon from '../../../globals/icons/reportIcon'

export default function Item({ navigation }) {
    return <TouchableOpacity
            onPress={() => navigation.navigate("NormativasDetails")}
            style={st.container}
        >
        <ReportIcon width={42} viewBox={32} />
        <View style={st.info}>
            <Text style={st.infoNome}>DIRETRIZ 5.3.2
                <Text style={st.infoData}> - 03/06/2023</Text>
            </Text>
            <Text style={st.infoTermos}>Termos:
                <Text style={st.infoTermosItens}> pó de rocha, uva, AgroBio 3</Text>
            </Text>
        </View>
    </TouchableOpacity>
}

const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        width: '100%',
        borderRadius: 20,
        backgroundColor: Theme.light.gray1
    },

    icon: {
        width: 64,
    },

    infoNome: {
        fontSize: 16,
        fontWeight: 500,
    },

    infoData: {
        fontSize: 14,
        fontWeight: 400,
    },

    infoTermos: {
        fontSize: 14,
        fontWeight: 400,
    },

    infoTermosItens: {
        fontWeight: 300,
    },
})
