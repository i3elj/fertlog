import { View, Text, StyleSheet } from 'react-native'

import Theme from '../globals/style-guide'

export default function AppTitle({ fontSize }) {
    return <View style={st.title}>
       <Text style={[st.titleText(fontSize), { color: Theme.light.green1 }]}>
            Fert
       </Text>
       <Text style={[st.titleText(fontSize), { color: Theme.light.green0 }]}>
           Log
       </Text>
    </View>
}

const st = StyleSheet.create({
    title: {
        flexDirection: 'row',
    },

    titleText: (size = 64) => ({
        fontSize: size,
    }),
})


