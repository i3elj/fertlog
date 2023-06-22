import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'
import ReportIcon from '../../globals/icons/reportIcon'

export default function LatestNormativas() {
    return <View style={st.container}>
        <Text style={st.title}>Normativas</Text>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.itemContainer}
        >
            <View style={st.item}>
                <ReportIcon width={48} />
                <Text>5.3.2</Text>
            </View>
            <View style={st.item}>
                <ReportIcon width={48} />
                <Text>5.3.2</Text>
            </View>
            <View style={st.item}>
                <ReportIcon width={48} />
                <Text>5.3.2</Text>
            </View>
            <View style={st.item}>
                <ReportIcon width={48} />
                <Text>5.3.2</Text>
            </View>
            <View style={st.item}>
                <ReportIcon width={48} />
                <Text>5.3.2</Text>
            </View>
        </ScrollView>
    </View>
}

const st = StyleSheet.create({
    container: {
        gap: 10,
        paddingVertical: 20,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 26,
        paddingLeft: 20,
    },

    itemContainer: {
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    item: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: 84,
        width: 84,
        borderRadius: 8,
        backgroundColor: Theme.light.gray1,
    },
})
