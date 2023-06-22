import { View, Text, ScrollView, StyleSheet } from 'react-native'

import NewsItem from './newsItem'

import Theme from '../../globals/style-guide'
import Header from '../../globals/header'
import Line from '../../globals/line'

export default function News() {
    return <View style={st.container}>
       <View style={st.title}>
           <Text style={st.titleText}>Noticias</Text>
        </View>
        <View style={st.feed}>
            <NewsItem style={{backgroundColor: '#E6E6E6'}}/>
            <NewsItem />
            <NewsItem style={{backgroundColor: '#E6E6E6'}}/>
        </View>
    </View>
}

const st = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
    },

    titleText: {
        fontSize: 26,
    },

    feed: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: Theme.light.gray1,
    },
})
