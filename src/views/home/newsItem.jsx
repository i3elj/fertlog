import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'
import Line from '../../globals/line'

export default function NewsItem() {
    return <View style={st.news}>
       <Text style={st.newsTitle}>
           Canada adere os insumos organicos
       </Text>
       <Text style={st.newsSubTitle}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       </Text>
    </View>
}

const st = StyleSheet.create({
    newsTitle: {
        fontSize: 20,
    },

    newsSubTitle: {
        fontSize: 12,
        fontWeight: 300,
    },
})
