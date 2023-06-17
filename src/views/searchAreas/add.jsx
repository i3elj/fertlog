import { TouchableOpacity, StyleSheet } from 'react-native'

import Theme from '../../globals/style-guide'
import AddIcon from '../../globals/icons/AddIcon'

export default function Add() {
    return (
        <TouchableOpacity style={st.container}>
            <AddIcon />
        </TouchableOpacity>
    )
}

const st = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})
