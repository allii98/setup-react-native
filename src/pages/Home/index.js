import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <StatusBar backgroundColor="#22668A" />

                {/* contents */}
                <View style={styles.content}>
                    <Text>Home Screen</Text>
                </View>

                {/* button tab */}

            </View>

        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white'
    },
    headers: {
        backgroundColor: '#22668A',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        backgroundColor: '#22668A',
        paddingVertical: 15,
        flexDirection: 'row',
    },
    btn_home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btn_profile: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

