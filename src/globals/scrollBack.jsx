import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import ThickArrowTop from './icons/thickArrowTop'
import Theme from './style-guide'

export default function ScrollBack() {
    return <TouchableOpacity style={st.container}>
        <ThickArrowTop />
    </TouchableOpacity>
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        margin: 20,
        borderRadius: 8,
        backgroundColor: Theme.light.gray2
    },
})
