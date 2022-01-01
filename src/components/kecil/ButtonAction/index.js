import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { fonts } from '../../../utils'

export default class ButtonAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { name: 'Absensi Masuk', icon: 'schedule' },
                { name: 'Absensi Keluar', icon: 'schedule' },
                { name: 'Riwayat Absensi', icon: 'history' },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatGrid
                    itemDimension={80}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.box}>
                            <Icon name={item.icon} size={45} color="#6AB1D7" />
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -28
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 14,
    },
    box: {
        backgroundColor: '#fafafa',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
