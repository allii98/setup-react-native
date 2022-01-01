import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { fonts } from '../../utils'

export default class Histori extends Component {
    render() {
        return (
            <View style={styles.pages}>

                <Text style={styles.text}>Histori</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    text: {
        color: '#e0e0e0',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: fonts.primary.bold,
    }
})
