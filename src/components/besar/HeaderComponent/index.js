import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { fonts, responsiveHeight } from '../../../utils'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.headers}>
                <Text style={{ fontSize: 18, color: '#e0e0e0', marginHorizontal: 10, marginVertical: 5, fontFamily: fonts.primary.bold }}>Selamat datang, ALI</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headers: {
        backgroundColor: '#22668A',
        paddingVertical: 25,
        height: responsiveHeight(125),
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})
