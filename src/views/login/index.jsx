import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Theme from '../../style-guide'

function authenticate(uname, pwd) {
    console.log(uname == 'admin' && pwd == 'admin')
}

export default function Login() {
    const [ username, setUsername ] = useState("")
    const [ pwd, setPwd ] = useState("")

    return <>
        <View style={st.container}>
            <View style={st.mainContent}>
                <View style={st.title}>
                    <Text style={[st.titleText, { color: Theme.light.green1 }]}>
                        Fert
                    </Text>
                    <Text style={[st.titleText, { color: Theme.light.green0 }]}>
                        Log
                    </Text>
                </View>
                <View style={st.form}>
                    <TextInput
                        style={st.input}
                        placeholder="login"
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={st.input}
                        placeholder="senha"
                        onChangeText={setPwd}
                    />
                    <TouchableOpacity
                        style={st.submit}
                        onClick={() => authenticate(username, pwd)}
                    >
                        <Text style={st.submitText}>entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={st.footer}>
                <View style={st.checkBox}></View>
                <Text style={st.terms}>
                    Li e aceito os Termos de Uso e Compromisso
                </Text>
            </View>
        </View>
    </>
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    mainContent: {
        marginTop: 100,
        width: '100%',
        alignItems: 'flex-end',
        gap: 80,
        padding: 60,
    },

    title: {
        flexDirection: 'row',
    },

    titleText: {
        fontSize: 64,
    },

    form: {
        gap: 20,
        width: '100%',
        alignItems: 'flex-end',
    },

    input: {
        width: '100%',
        fontSize: 26,
        paddingHorizontal: 34,
        paddingVertical: 8,
        borderRadius: 34,
        color: Theme.light.gray1,
        backgroundColor: Theme.light.gray0,
    },

    submit: {
        paddingHorizontal: 34,
        paddingVertical: 8,
        borderRadius: 34,
        backgroundColor: Theme.light.green1,
    },

    submitText: {
        fontSize: 20,
        color: "white",
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        backgroundColor: Theme.light.gray0,
        paddingVertical: 26,
    },

    checkBox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
    },

    terms: {
        fontSize: 16,
    },
})
